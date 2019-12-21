<template>
	<div id="app">
		<FlightSearch />
	</div>
</template>
<script>
import FlightSearch from './components/FlightSearch';
export default {
	name: 'App',
	components: {
		FlightSearch
	}
};
</script>

<style>
#app {
	font-family: 'Courier New', Courier, monospace;
	color: #2c3e50;
}
@media (max-width: 786px) {
	.contentContainer,
	.searchHeader {
		flex-direction: column;
	}
	.filghtTiming {
		text-align-last: left;
		margin-top: 5px;
	}
	.mainContainer {
		padding: 0px;
	}
	.slider {
		width: 100%;
	}
}
</style>
