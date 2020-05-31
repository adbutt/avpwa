<template>
  <div v-if="isDataAvailable" class="container">
    <!-- Number of Posts -->
    <small v-if="filteredResults.length === wpPosts.length">{{ wpPosts.length }} Files</small>
    <small v-else>Found {{ filteredResults.length }} of {{ wpPosts.length }} Files</small>

    <div class="card-deck">
      <!-- AppDisplayPost Component -->
      <app-display-post
        v-for="postType in filteredResults"
        :key="postType.id"
        :search-term="searchTerm"
        :post-type="postType"
        role="article"
      >
        <!-- AppDisplayPost is called for each post in the filteredResults -->
      </app-display-post>
    </div>
    <!-- .card-group -->
  </div>
  <!-- .container -->
  <div v-else>
    <p class="text-center" v-html="apiResponse" />
  </div>
</template>

<script>
import axios from "axios";
import AppDisplayPost from "./AppDisplayPost";

export default {
  components: {
    "app-display-post": AppDisplayPost
  },
  props: {
    searchTerm: {
      type: String,
      default: ""
    },
    supFilters: {
      type: Array,
      default: null
    },
    appFilters: {
      type: Array,
      default: null
    },
    route: {
      type: String,
      default: "file"
    },
    fetchNow: {
      type: Number,
      default: 1
    }
  },
  data() {
    /*global wpData:true*/
    /*eslint no-undef: "error"*/

    return {
      apiResponse: "", // initial loading or error messages.
      wpPosts: [], // REST API response data goes here.
      wpData, // global data made available via wp_localize_script.
      isDataAvailable: false
    };
  },
  computed: {
    // computed property to get filtered data based on search key or category filter.

    filteredResults() {
      if (this.wpPosts) {
        // match keyword against post titles or excerpts.
        const pattern = new RegExp(this.searchTerm, "i");
        let filteredPosts = this.wpPosts.filter(post => {
          return (
            post.title.rendered.match(pattern) ||
            // post.vue_meta.custom_excerpt.match(pattern)
            post.vue_meta.description.match(pattern)
            // post.vue_meta.postcodes.some(postc => postc.includes(adam))
          );
        });

        //further filter the results based on the delivery filters.
        // if (this.supFilters && this.supFilters.length) {
        //   filteredPosts = filteredPosts.filter(post =>
        //     post.vue_meta.supply_options.match(this.supFilters)
        //   );
        //   // return filteredPosts;
        // }
        if (this.supFilters && this.supFilters.length) {
          filteredPosts = filteredPosts.filter(post =>
            post.vue_meta.folders.some(folders =>
              this.supFilters.includes(folders.toLowerCase())
            )
          );
          // return filteredPosts;
        }

        // further filter the results based on the delivery filters.
        if (this.appFilters && this.appFilters.length) {
          filteredPosts = filteredPosts.filter(post =>
            post.vue_meta.subfolders.some(subfolders =>
              this.appFilters.includes(subfolders.toLowerCase())
            )
          );
          return filteredPosts;
        } else {
          return filteredPosts;
        }
      }
    }
  },
  watch: {
    // watch the prop fetchNow which changes when submit is clicked, and call the method this.fetchData()
    fetchNow: "fetchData"
  },
  mounted() {
    // get posts from the WordPress REST API on component creation.
    this.fetchData();
  },
  methods: {
    // fetch posts only if fetchNow is greater than 0.
    fetchData() {
      this.isLoading = true;
      if (0 < this.fetchNow) {
        this.getPosts(this.route);
        this.apiResponse = " Loading ⏳ ";
      }
    },
    async getPosts(route = "file", namespace = "wp/v2") {
      try {
        /* Note: the per_page argument is capped at 100 records by the REST API.
         * https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
         */

        const postsPerPage = 6; // default is 10.
        const restURL = this.wpData.rest_url;
        const fields = "id,title,link,vue_meta"; // retrieve data for specific fields only

        // send an initial request and await the response to get the total number of posts.
        const response = await axios(
          `${restURL}/${namespace}/${route}?per_page=${postsPerPage}&page=1&_fields=${fields}`
        );

        // since partial data is already available from this response, make it available.
        this.wpPosts = response.data;
        this.isDataAvailable = true;

        /*
         * calculate total number of required API requests using the header fields from the response.
         *
         * headers['x-wp-total']: Total WordPress Posts
         * headers['x-wp-totalpages'] Total number of pages based on the per_page param.
         */
        const wpTotalPages = Math.ceil(
          response.headers["x-wp-total"] / postsPerPage
        );

        // check & get additional posts but restrict to 1000 posts when per_page is 100. Modify as required.
        const promises = [];
        for (let page = 2; page <= wpTotalPages && 10 >= page; page++) {
          // save the promise returned by the axios requests.
          promises.push(
            axios(
              `${restURL}/${namespace}/${route}?per_page=${postsPerPage}&page=${page}&_fields=${fields}`
            )
          );
        }

        /*
         * Await all promises to return before rendering the data.
         * This also ensures that the response is in the same order in which the requests were made.
         */
        const wpData = await Promise.all(promises);
        wpData.map(post => this.wpPosts.push(...post.data));
        /* OR
         * render data as soon as it becomes available.
         */
        // promises.map( posts => {
        // 	posts.then( post => {
        // 		this.wpPosts.push( ...post.data );
        // 		if ( ! this.isDataAvailable ) {
        // 			this.isDataAvailable = true;
        // 		}
        // 	});
        // });

        // all posts are retrieved at this point.
      } catch (error) {
        this.apiResponse = ` The request could not be processed! <br> <strong>${error}</strong> `;
      }
    }
  }
};
</script>

<style>
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  outline: none !important;
}
</style>
