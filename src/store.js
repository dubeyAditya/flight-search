import Vue from 'vue'
import Vuex from 'vuex'
import filterByJourney from './utils/utility.js'
import flightJson from './utils/flight.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isReturn: false,
    price: 10000,
    oneway: {
      date: "",
      dest: "",
      origin: ""
    },
    twoway: {
      date: "",
      dest: "",
      origin: ""
    },
    passengers:1,
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
    getReturn(state) {
      return state.retun;
    },
    getPassengers(state) {
      return parseInt(state.passengers);
    },
    isReturn(state) {
      return state.isReturn;
    },
    isSubmitted(state) {
      return state.submitted;
    },
    getPrice(state) {
      return state.price;    },
    getDate(state) {
      return type => state[type].date.split("-").reverse().join("-");
    },
    getOrigin(state) {
      return type => state[type].origin.toUpperCase()
    },
    getDest(state) {
      return type => state[type].dest.toUpperCase();
    },
    getFlights(state, getters) {
      return type => state.flightData.filter(item => item.doj === getters.getDate(type) && item.dest.toLowerCase() === state[type].dest.toLowerCase() && item.origin.toLowerCase() === state[type].origin.toLowerCase());
    },
    getFilghtByPrice(state) {
      return searchData => searchData.filter(item => item.fare <= state.price);
    }
  },
  mutations: {
    setPriceRange(state, price) {
      state.price = price;
    },
    setOneWay(state, {
      date,
      dest,
      origin
    }) {
      state.oneway.date = date;
      state.oneway.dest = dest;
      state.oneway.origin = origin;
    },
    setTwoWay(state, {
      date,
      dest,
      origin
    }) {
      state.twoway.date = date;
      state.twoway.dest = dest;
      state.twoway.origin = origin;
    },
    setResults(state, results) {
      state.searchData = results;
    }
  },
  actions: {
    searchTwoWayFlight({
      getters,
      commit
    }) {
      // Code to fetch Data From Server
      commit("setResults", filterByJourney([...getters.getFlights('oneway')], [...getters.getFlights('twoway')]));
    },
    searchOneWayFlight({
      getters,
      commit
    }) {
      // Code to fetch Data From Server
      commit("setResults", getters.getFlights('oneway'));
    },
    restResults({
      state,
      commit
    }) {
      var restData = {
        origin: "",
        dest: "",
        date: ""
      };
      commit("setOneWay", restData);
      commit("setTwoWay", restData);
      state.searchData = [];
      state.passengers = 1;
    }
  }
});