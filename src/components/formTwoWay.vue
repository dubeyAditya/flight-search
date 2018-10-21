<template>
  <form @submit.prevent="searchFlight(twoway)" class="form">
  <div class="form-input">
      <input v-model.trim="twoway['origin']" required  type="text" placeholder="Enter Origin City">
  </div>
   <div class="form-input">
      <input v-model.trim="twoway['dest']" required type="text" placeholder="Enter Destination City">
  </div> 
  <div>
  <label class="labelText" for="Departure Date">Departure Date</label>
   <div class="form-input-date">
      <input v-model="twoway['departDate']" required name="Departure Date" type="date" placeholder="Departure Date">
  </div>
  </div> 
  <div>
    <label class="labelText" for="Return Date">Return Date</label>
    <div class="form-input-date">
    <input v-model="twoway['returnDate']" required name="Return Date"  type="date" >
  </div> 
  </div>
   <div class="form-input">
    <input v-model="passengers" type="number" min="1" step="1" max="5" required placeholder="Passengers"/>
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
      twoway: {
        origin: "",
        dest: "",
        departDate: "",
        returnDate: ""
      },
      passengers: 1
    };
  },
  mounted() {
    this.$store.dispatch("restResults");
  },
  methods: {
    searchFlight(twoway) {
      if (this.validate(twoway)) {
        this.$store.state.submitted = true;
        this.flightsByJourney(twoway);
      }
    },
    flightsByJourney({ dest, origin, departDate, returnDate }) {
      this.$store.state.isReturn = true;
      this.$store.passengers = this.passengers;
      this.$store.commit("setOneWay", {
        origin,
        dest,
        date: departDate
      });
      this.$store.commit("setTwoWay", {
        origin: dest,
        dest: origin,
        date: returnDate
      });
      this.$store.dispatch("searchTwoWayFlight");
      // this.scrollToResults("mainCont");
    },
    validate({ dest, origin, departDate, returnDate }) {
      let validate = true;
      if (dest === origin) {
        alert("Destination and Origin can not be same..!");
        validate = false;
      }
      if (new Date(departDate).getTime() < new Date().getTime()) {
        alert("Journey Date should be greater or equal to Today's date");
        validate = false;
      }
      if (new Date(departDate).getTime() > new Date(returnDate).getTime()) {
        alert(
          "Return Date is Not Valid Please Select a Date equal or greater than Departure Date..!"
        );
        validate = false;
      }
      return validate;
    }
  }
};
</script>


