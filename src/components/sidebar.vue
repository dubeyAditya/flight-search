<template>
	<div class="sideContainer">
		<Tab />
		<Slider />
	</div>
</template>
<script>
import Tab from './Tab';
import Slider from './Slider';
export default {
	name: 'SideBar',
	components: {
		Slider,
		Tab
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
