<template>
	<div class="rangeSelector cont">
		<div class="marginB10">Refine Flight Search</div>
		<div class="marginB10">Price :{{ price }}</div>
		<div class="slid-container">
			<div>0</div>
			<div class="slider">
				<range-slider class="slider" min="1000" max="10000" step="100" v-model="price"> </range-slider>
			</div>
			<div>10000</div>
		</div>
		<div class="filter-button">
			<button class="form-button" @click="filterByPrice(price)">Apply</button>
		</div>
	</div>
</template>

<script>
import RangeSlider from 'vue-range-slider';
import 'vue-range-slider/dist/vue-range-slider.css';
export default {
	name: 'Slider',
	components: {
		RangeSlider
	},
	data() {
		return {
			price: 10000
		};
	},
	methods: {
		filterByPrice(price) {
			this.$store.commit('setPriceRange', price);
		}
	}
};
</script>

<style>
.slid-container {
	display: flex;
}

.slider {
	flex-grow: 1;
}

.filter-button {
	margin: 5px 0px 0px 0px;
}
</style>
