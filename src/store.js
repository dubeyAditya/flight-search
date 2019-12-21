import Vue from 'vue';
import Vuex from 'vuex';
import filterByJourney from './utils/utility.js';
import flightJson from './utils/flight.js';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		flightDetails: {
			dest: '',
			origin: '',
			departureDate: '',
			returnDate: '',
			passengers: 1,
			hasReturn: false
		},
		price: 10000,
		submitted: false,
		searchOneWay: [],
		searchTwoWay: [],
		searchData: [],
		flightData: flightJson
	},
	getters: {
		getResults(state, getters) {
			return state.submitted ? getters.getFilghtByPrice(state.searchData) : getters.getFilghtByPrice(state.flightData);
		},
		// getReturn(state) {
		// 	return state.retun;
		// },
		getPassengers(state) {
			return parseInt(state.flightDetails.passengers);
		},
		hasReturn(state) {
			return state.flightDetails.hassReturn;
		},
		isSubmitted(state) {
			return state.submitted;
		},
		getPrice(state) {
			return state.price;
		},
		getDate(state) {
			return type =>
				state[type].date
					.split('-')
					.reverse()
					.join('-');
		},
		getOrigin(state) {
			return type => state[type].origin.toUpperCase();
		},
		getDest(state) {
			return type => state[type].dest.toUpperCase();
		},
		getFlights(state, getters) {
			return type =>
				state.flightData.filter(
					item =>
						item.doj === getters.getDate(type) &&
						item.dest.toLowerCase() === state[type].dest.toLowerCase() &&
						item.origin.toLowerCase() === state[type].origin.toLowerCase()
				);
		},
		getFilghtByPrice(state) {
			return searchData => searchData.filter(item => item.fare <= state.price);
		}
	},
	mutations: {
		setPriceRange(state, price) {
			state.price = price;
		},
		setFlightDetails(state, { date, dest, origin }) {
			state.flightDetails.departureDate = date;
			state.flightDetails.dest = dest;
			state.flightDetails.origin = origin;
		},
		setResults(state, results) {
			state.searchData = results;
		}
	},
	actions: {
		searchRoundTripFlight({ getters, commit }) {
			// Code to fetch Data From Server
			commit('setResults', filterByJourney([...getters.getFlights('oneway')], [...getters.getFlights('twoway')]));
		},
		searchOneWayFlight({ getters, commit }) {
			// Code to fetch Data From Server
			commit('setResults', getters.getFlights('oneway'));
		},
		restResults({ state, commit }) {
			let restData = { dest: '', origin: '', departureDate: '', returnDate: '', passengers: 1, hasReturn: false };
			commit('setFlightDetails', restData);
			state.searchData = [];
			state.passengers = 1;
		}
	}
});
