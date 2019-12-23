<template>
	<div class="mainContainer">
		<div class="mainHeader "><span>Flight Search Engine</span></div>
		<div class="contentContainer">
			<Sidebar />
			<SearchList />
		</div>
	</div>
</template>

<script>
import Sidebar from './Sidebar';
import SearchList from './SearchList';
export default {
	name: 'FlightSearch',
	props: {
		msg: String
	},
	components: {
		Sidebar,
		SearchList
	},
	data() {
		return {};
	},
	created: function() {}
};
</script>

<style>
.cont {
	border: 1px solid #ccc;
	padding: 15px;
}
/* .mainContainer {
  
} */
.mainHeader {
	font-weight: 300;
	font-size: 20px;
	color: gray;
	border: 1px solid;
	border-color: #e1e1e1 #e1e1e1 #ffff #e1e1e1;
	padding: 15px;
}
.contentContainer {
	display: flex;
	align-content: space-between;
	border: 1px solid #e1e1e1;
}
</style>
