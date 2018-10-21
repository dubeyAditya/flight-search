<template>
  <form @submit.prevent="searchFlight" class="form">
  <div class="form-input">
      <input v-model.trim="oneway['origin']" required  type="text" placeholder="Enter Origin City">
  </div>
   <div class="form-input">
      <input v-model.trim="oneway['dest']" required type="text" placeholder="Enter Destination City">
  </div> 
  <div>
  <label class="labelText" for="Departure Date">Departure Date</label>
   <div class="form-input-date">
      <input v-model="oneway['date']" required name="Departure Date" type="date" placeholder="Departure Date">
  </div>
  <div class="form-input">
    <input v-model="passengers" type="number" min="1" step="1" max="5" required placeholder="Passengers"/>
  </div>
  </div> 
   <div>
    <input id="search" class="form-button" type="submit" value="Search"/>
  </div>  
  </form> 
</template>
<script>
export default {
  name: "formOneWay",
  props: ["journyType"],
  data() {
    return {
      oneway: {
        origin: "",
        dest: "",
        date: "",
      },
      passengers:1
    };
  },
  mounted() {
    this.$store.dispatch("restResults");
  },
  methods: {
    searchFlight() {
      this.$store.state.submitted = true;
      if (this.validate(this.oneway)) {
        this.flightsByJourney();
      }
    },
    flightsByJourney() {
      this.$store.state.passengers = this.passengers;
      this.$store.commit("setOneWay", this.oneway);
      this.$store.dispatch("searchOneWayFlight");
      // this.scrollToResults("mainCont"); //for Moblile Device
    },
    validate({ dest, origin, date }) {
      let validate = true;
      if (dest === origin) {
        alert("Destination and Origin can not be same..!");
        validate = false;
      }
      if (new Date(date).getTime() < new Date().getTime()) {
        alert("Journey Date should be greater or equal to Today's date");
        validate = false;
      }
      return validate;
    }
  }
};
</script>
