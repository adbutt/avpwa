<template>
  <!-- Filter Buttons -->
  <div class="input-filters mx-auto mb-2">
    <div
      v-for="(filter1, index) in supFilters"
      :key="`${filterType}_${filter1}_${index}`"
      class="toggle-container d-inline-block mb-2"
    >
      <label :for="`${filterType}_${filter1}_${index}`" class="toggle-switch mx-2">
        <input
          :id="`${filterType}_${filter1}_${index}`"
          :name="filter1"
          :value="filter1"
          :type="filterType"
          v-model="inputFilter1"
        />
        <span class="filter-toggle" />
        <span class="label" v-html="filter1"></span>
      </label>
      <!-- .toggle-switch -->
    </div>
    <!-- .toggle-container -->
  </div>
  <!-- .input-filter -->
</template>

<script>
export default {
  props: {
    supFilters: {
      type: Array,
      default: null
    },
    filterType: {
      type: String,
      default: "checkbox"
    }
  },
  data() {
    return {
      inputFilter1: []
    };
  },
  watch: {
    // notify the parent component when an input switch is toggled
    inputFilter1(filter1) {
      this.$emit("onFilterToggle1", filter1);
      // console.log("filter clicked");
    }
  }
};
</script>

<style scoped>
/* CSS for Toggle toggle-Switch:  https://www.w3schools.com/howto/howto_css_switch.asp */

.toggle-switch {
  position: relative;
  display: inline-block;

  height: 24px;
}

.toggle-switch .filter-toggle {
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
  border-radius: 0.2rem;
}

.toggle-switch .label {
  display: inline-block;
  margin: 0 20px 0 35px;
  font-weight: 400;
  text-transform: capitalize;
  font-size: 16px;
}

.toggle-switch .filter-toggle:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.1s;
  transition: 500ms;
  border-radius: 8px;
}

.toggle-switch input:checked + .filter-toggle {
  background-color: #771844;
}

.toggle-switch input:checked + .filter-toggle:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
