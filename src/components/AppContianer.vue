<template>
	<v-container>
		<v-layout text-center wrap>
			<FlightSearch />
		</v-layout>
	</v-container>
</template>

<script>
import FlightSearch from './FlightSearch';
export default {
	name: 'AppContainer',
	components: {
		FlightSearch
	},
	data: () => ({
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader'
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify'
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify'
			}
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com'
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com'
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify'
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs'
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify'
			}
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer'
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/layout/pre-defined'
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
			}
		]
	})
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
