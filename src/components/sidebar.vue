<template>
  <div class="sideContainer">
    <tab></tab>
    <div class="rangeSelector cont">
    <div class="marginB10">Refine Flight Search</div>
    <div class="marginB10">Price :{{price}}</div>
    <div style="display:flex"><span>0</span>
    <range-slider
    class="slider"
    min="1000"
    max="10000"
    step="100"
    v-model="price">
  </range-slider>
   <span style="margin-left:5px">10000</span> </div>
   <div >
    <button style="margin:5px 0px 0px 0px" class="form-button" @click="filterByPrice(price)">Apply</button>
  </div>  
  </div>
  </div>
</template>
<script>
import RangeSlider from "vue-range-slider";
// you probably need to import built-in style
import "vue-range-slider/dist/vue-range-slider.css";
import tab from "./tab";
export default {
  data() {
    return {
      price: 10000
    };
  },
  components: {
    RangeSlider,
    tab
  },
  methods: {
    filterByPrice(price) {
      this.$store.commit("setPriceRange", price);
    }
  }
};
</script>

<style>
.slider {
  /* overwrite slider styles */
  width: 150px;
}
.rangeSelector {
  margin-top: 10px;
}
.sideContainer {
  padding: 5px;
  border: 1px solid;
  border-color: #ffff #e1e1e1 #ffff #ffff;
}
.marginB10 {
  margin-bottom: 10px;
}
</style>