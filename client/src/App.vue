<template lang="html">
  <div id="app">
    <bookings-form/>
    <bookings-list :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingsForm from '@/components/BookingsForm'
import BookingsList from '@/components/BookingsList'
import BookingService from '@/services/BookingService'

export default {
  name: "app",
  components: {
    'bookings-form': BookingsForm,
    'bookings-list': BookingsList
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
    });

    eventBus.$on('update-booking', newBooking => {
      const index = this.bookings.findIndex(booking => booking._id === newBooking._id)
      this.bookings[index] = newBooking
      BookingService.updateBooking(newBooking)
    });

    eventBus.$on('delete-booking', id => {
      BookingService.deleteBooking(id)
      .then(() => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings.splice(index, 1);
      })
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
