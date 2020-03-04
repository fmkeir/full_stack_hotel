<template lang="html">
  <div id="app">
    <bookings-form/>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsForm from '@/components/BookingsForm'
import BookingService from '@/services/BookingService'

export default {
  name: "app",
  components: {
    'bookings-form': BookingsForm
  },
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on('submit-booking', newBooking => {
      this.bookings.push(newBooking)
      BookingService.postBooking(newBooking)
      // .then(booking => this.bookings.push(booking))
    });
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
