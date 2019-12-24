<template>
	<v-container>
		<FlightSearch />
	</v-container>
</template>

<script>
import FlightSearch from './FlightSearch';
export default {
	name: 'AppContainer',
	components: {
		FlightSearch
	},
	data: () => ({})
};
</script>

<style>
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
