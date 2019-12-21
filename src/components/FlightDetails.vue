<template>
	<form @submit.prevent="searchFlight" class="form">
		<div class="form-input">
			<input v-model.trim="flight['origin']" required type="text" placeholder="Enter Origin City" />
		</div>
		<div class="form-input">
			<input v-model.trim="flight['dest']" required type="text" placeholder="Enter Destination City" />
		</div>
		<div>
			<label class="labelText" for="Departure Date">Departure Date</label>
			<div class="form-input-date">
				<input
					v-model="flight['departureDate']"
					required
					name="Departure Date"
					type="date"
					placeholder="Departure Date"
				/>
			</div>
		</div>
		<div v-if="hasRoundTrip">
			<label class="labelText" for="Return Date">Return Date</label>
			<div class="form-input-date">
				<input v-model="flight['returnDate']" required name="Return Date" type="date" />
			</div>
		</div>
		<div class="form-input">
			<input v-model="flight['passengers']" type="number" min="1" step="1" max="5" required placeholder="Passengers" />
		</div>
		<div>
			<input id="search" class="form-button" type="submit" value="Search" />
		</div>
	</form>
</template>
<script>
export default {
	name: 'FlightDetails',
	props: ['journyType'],
	data() {
		return {
			flight: {
				dest: '',
				origin: '',
				departureDate: '',
				returnDate: '',
				passengers: 1,
				hasReturn: false
			}
		};
	},
	computed: {
		hasRoundTrip() {
			return this.journyType === 1 ? false : true;
		}
	},
	mounted() {
		this.$store.dispatch('restResults');
	},
	methods: {
		searchFlight() {
			this.$store.state.submitted = true;
			if (this.validate(this.flight)) {
				this.getFlightDetails();
			}
		},
		getFlightDetails() {
			let hasReturn = this.hasRoundTrip;
			this.$store.commit('setFlightDetails', { ...this.flight, hasReturn });
			if (hasReturn) {
				this.$store.dispatch('searchRoundTripFlight');
			} else this.$store.dispatch('searchOneWayFlight');
		},
		validate({ dest, origin, departDate, returnDate }) {
			let validate = true;
			if (dest === origin) {
				alert('Destination and Origin can not be same..!');
				validate = false;
			}
			if (new Date(departDate).getTime() < new Date().getTime()) {
				alert("Journey Date should be greater or equal to Today's date");
				validate = false;
			}
			if (this.hasRoundTrip && new Date(departDate).getTime() > new Date(returnDate).getTime()) {
				alert('Return Date is Not Valid Please Select a Date equal or greater than Departure Date..!');
				validate = false;
			}
			return validate;
		}
	}
};
</script>
