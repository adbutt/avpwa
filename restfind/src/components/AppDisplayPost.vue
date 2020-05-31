<template>
  <div class="card">
    <!-- <img
      v-if="postType.vue_meta.featuredmedia_url"
      :src="postType.vue_meta.featuredmedia_url"
      :alt="postType.vue_meta.featuredmedia_alt || 'post thumbnail'"
      class="card-img-top"
    />-->

    <div class="card-body">
      <h5 class="card-title">
        <!-- <a :href="postType.link">
          <span v-html="highlightedPostTitle || postType.title.rendered" />
        </a>-->
        <span v-html="highlightedPostTitle || postType.title.rendered" />
      </h5>
      <p class="card-text">
        <small
          class="about text-muted pb-1"
          v-html="highlightedPostExcerpt || postType.vue_meta.description"
        />
        <!-- <span class="cuisine pb-1" v-html="postType.vue_meta.cuisines.join(' - ')" />
        <small class="supply pb-1" v-html="postType.vue_meta.supply_options.join(' & ')" />
        <small class="address" v-html="postType.vue_meta.address" />-->
        <!-- <span v-html="highlightedPostExcerpt || postType.vue_meta.custom_excerpt" /> -->
      </p>
    </div>
    <!-- .card-body -->

    <div class="card-footer">
      <small class="text-muted order-wrap">
        <span class="download">
          <a :href="postType.vue_meta.file.url">
            <span class="dashicons dashicons-download"></span>
            Download File
          </a>
          <!-- <a :href="postType.vue_meta.file.url">Download File ({{postType.vue_meta.file.filesize}})</a> -->
        </span>
        <!-- <span class="web">
          <a :href="`${postType.vue_meta.web}`" target="_blank">Order Online</a>
        </span>-->
        <!-- <span
          v-if="postType.vue_meta.postcodes.length"
          v-html="highlightedPostExcerpt || postType.vue_meta.postcodes.join(', ')"
        />
        <span v-else>uncategorized</span>-->
      </small>
    </div>
    <!-- .card-footer -->
  </div>
  <!-- .card -->
</template>

<script>
export default {
  props: {
    postType: {
      type: Object,
      required: true,
      default: null
    },
    searchTerm: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    // highlight the search term in post titles.
    highlightedPostTitle() {
      if (this.searchTerm) {
        return this.highlightData(this.postType.title.rendered);
      }
    },

    // highlight the search term in post excerpts.
    highlightedPostExcerpt() {
      if (this.searchTerm) {
        return this.highlightData(this.postType.vue_meta.description);
      }
    }
  },
  methods: {
    // add span tags with the hl-search CSS class to the search term.
    highlightData(data) {
      if (this.searchTerm) {
        const pattern = new RegExp(this.searchTerm, "i");
        const highlightedData = data.replace(
          pattern,
          `<span class="hl-search">${this.searchTerm}</span>`
        );
        return highlightedData;
      }
    }
  }
};
</script>

<style>
.card {
  min-width: 30%;
  margin-bottom: 20px !important;
}
.card-title {
  font-weight: 400;
  font-size: 14px;
}
.card-img-top {
  height: 15vw;
  object-fit: cover;
}

.card .hl-search {
  background-color: yellow;
}
.card-text small {
  display: block;
}
.card-text .cuisine {
  display: block;
  text-align: center;
}
.card-text .supply {
  text-transform: capitalize;
}
.dashicons {
  color: #771844;
}
.download a {
  display: inline-block;
  background-color: #771844;
  border-radius: 3px;
  color: #fff;
  padding: 5px 10px 5px 5px;
}
.download .dashicons {
  color: #fff;
}
@media only screen and (max-width: 768px) {
  .card {
    min-width: 50%;
  }
}

@media only screen and (max-width: 480px) {
  .card {
    min-width: 100%;
  }
}
.order-wrap {
  display: flex;
  justify-content: space-between;
}
</style>

