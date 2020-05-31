<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <!-- Search Box -->
          <div class="input-group my-4">
            <input
              v-model.lazy="searchTerm"
              type="text"
              class="form-control p-2"
              placeholder="Enter Search ..."
              aria-label="Search"
            />
            <div class="input-group-append ssubmit">
              <span class="input-group-text bg-light">Search</span>
            </div>
          </div>
          <!-- .input-search -->
        </div>
      </div>
      <div class="row">
        <div id="filters" class="col-md-4">
          <p>
            <button class="btn btn-sm btn-outline-primary" v-on:click="cseen = !cseen">
              <span class="dashicons dashicons-portfolio"></span>
              Filter by Category
            </button>
            <button class="btn btn-sm btn-outline-primary" v-on:click="seen = !seen">
              <span class="dashicons dashicons-tag"></span> Filter by Tag
            </button>
          </p>
          <p></p>
        </div>

        <div class="col-md-8">&nbsp;</div>
      </div>
      <div class="row">
        <div class="col-sm">
          <transition name="fadeit">
            <div v-if="cseen">
              <!-- Filter Buttons -->
              <sup-filter-switches
                :sup-filters="supplyOptions"
                @onFilterToggle1="supplyFilter = $event"
              />
              <!-- Filter Buttons -->
            </div>
          </transition>
        </div>
      </div>
      <div class="row">
        <div class="col-sm">
          <transition name="fadeit">
            <div v-if="seen">
              <app-filter-switches
                :app-filters="wpCategories"
                @onFilterToggle="categoryFilter = $event"
              />
            </div>
          </transition>
        </div>
      </div>
    </div>
    <!-- AppGetPosts Component -->
    <app-get-posts
      :search-term="searchTerm"
      :app-filters="categoryFilter"
      :sup-filters="supplyFilter"
    />
  </div>
</template>

<script>
import AppFilterSwitches from "./AppFilterSwitches";
import SupFilterSwitches from "./AppSupFilterSwitches";
import AppGetPosts from "./AppGetPosts";

export default {
  components: {
    "app-filter-switches": AppFilterSwitches,
    "sup-filter-switches": SupFilterSwitches,
    "app-get-posts": AppGetPosts
  },
  data() {
    /*global wpData:true*/
    /*eslint no-undef: "error"*/

    return {
      seen: false,
      cseen: false,
      searchTerm: "",
      categoryFilter: [],
      supplyFilter: [],
      wpCategories: wpData.post_subfolders.map(term => term.toLowerCase()),
      supplyOptions: wpData.post_folders.map(term => term.toLowerCase())
    };
  }
};
</script>

<style scoped>
/* CSS for Toggle Switch:  https://www.w3schools.com/howto/howto_css_switch.asp */
.ssubmit {
  cursor: pointer;
}
.switch {
  position: relative;
  display: inline-block;

  height: 24px;
}

.switch .category-toggle {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  background-color: #eee;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch .label {
  display: inline-block;
  margin: 0 20px 0 30px;
  font-weight: 400;
}

.switch .category-toggle:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.1s;
  transition: 500ms;
}

.input-filters .toggle-switch input:checked {
  background: #771844 !important;
}
.toggle-switch input:checked + .filter-toggle[data-v-08bed612] {
  background-color: #771844;
}
.toggle-switch input:checked + .filter-toggle:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.fadeit-enter-active,
.fadeit-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fadeit-enter,
.fadeit-leave-to {
  opacity: 0;
}
#filters button {
  border-color: #771844;
  color: #771844;
}
#filters button:hover,
#filters button:focus {
  background-color: #771844;
  color: #fff;
  border-color: #771844;
}
#filters button:hover .dashicons,
#filters button:focus .dashicons {
  color: #fff;
}
</style>
