<template>
	<div class="mainCont">
		<div class="searchHeader">
			<div v-if="!isSubmitted">Search Flights Between Pune and Delhi</div>
			<div>
				<span v-if="$store.state.flightDetails.origin">{{ getOrigin('oneway') }} > </span>
				<span> {{ getDest('flightDetails') }} </span>
				<span v-if="isReturn"> > {{ getDest('flightDetails') }}</span>
			</div>
			<div class="filghtTiming">
				<div v-if="$store.state.flightDetails.origin">Depart : {{ getDate('oneway') }}</div>
				<div v-if="isReturn">Return : {{ getDate('twoway') }}</div>
			</div>
		</div>
		<div v-if="!getResults.length && $store.state.submitted" class="cont flightResultCont">
			<div class="flightItem">
				<div class="item error">
					No Matching Flights Found! We Apologise For Inconvenience.
				</div>
			</div>
		</div>
		<div class="cont flightResultCont" v-for="(flight, index) in getResults" :key="index">
			<div v-if="isReturn && flight.oneway && flight.twoway">
				<div class="priceHeder">
					<span class="curency">Rs.{{ flight.fare }}</span>
				</div>
				<div class="flightItem">
					<div class="item">
						<div class="flightName">{{ flight.oneway.name }}</div>
						<div>{{ flight.oneway.origin }} > {{ flight.oneway.dest }}</div>
						<div>Departs : {{ flight.oneway.departs }}</div>
						<div>Arrives : {{ flight.oneway.arrives }}</div>
						<div>Passengers : {{ getPassengers }}</div>
					</div>
					<div class="item">
						<div class="flightName">{{ flight.twoway.name }}</div>
						<div>{{ flight.twoway.origin }} > {{ flight.twoway.dest }}</div>
						<div>Departs : {{ flight.twoway.departs }}</div>
						<div>Arrives : {{ flight.twoway.arrives }}</div>
						<div>Passengers : {{ getPassengers }}</div>
					</div>
				</div>
			</div>
			<div v-if="!isReturn && flight">
				<div class="priceHeder flex">
					<div class="curency">Rs. {{ flight.fare * getPassengers }}</div>
					<div class="filghtTiming" v-if="!isSubmitted">Departure Date : {{ flight.doj }}</div>
				</div>
				<div class="flightItem">
					<div class="item">
						<div class="flightName">{{ flight.name }}</div>
						<div>{{ flight.origin }} > {{ flight.dest }}</div>
						<div>Departs : {{ flight.departs }}</div>
						<div>Arrives : {{ flight.arrives }}</div>
						<div v-if="isSubmitted">Passengers : {{ getPassengers }}</div>
					</div>
					<div class="item booking">
						<div>
							<button id="book" class="form-button" value="Book">Book</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	name: 'results',
	data() {
		return {
			isReturn: false
		};
	},
	computed: {
		...mapGetters([
			'isSubmitted',
			// "isReturn",
			'getPassengers',
			'getResults',
			'getOrigin',
			'getDest',
			'getDate'
		])
	}
};
</script>

<style>
.mainCont {
	height: 100%;
	width: 100%;
}
.flightResultCont {
	margin: 10px 5px 10px 5px;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	font-weight: bold;
}
.searchHeader {
	font-weight: 200;
	font-size: 20px;
	color: gray;
	padding: 15px;
	border: 1px solid;
	border-color: #ffff #ffff #e1e1e1 #ffff;
	display: flex;
}
.flightItem {
	display: flex;
}
.flightItem .item {
	flex-grow: 1;
	margin-right: 5px;
	align-content: space-between;
}
.filghtTiming {
	text-align-last: right;
	font-size: 12px;
}
.flightName {
	font-size: 12px;
}
.priceHeder {
	padding: 0px 15px 15px 0px;
}
.curency {
	color: lightgreen;
	font-size: 20px;
	font-family: 'Times New Roman', Times, serif;
	font-weight: bold;
}
.searchHeader > div {
	flex-grow: 1;
}
.error {
	color: darkgoldenrod;
}
.flex {
	display: flex;
}
.flex div {
	flex-grow: 1;
}
.booking {
	align-self: flex-end;
}

#book {
	width: 80px;
	float: right;
}
</style>
