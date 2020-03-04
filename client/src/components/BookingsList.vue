<template lang="html">
  <div class="bookings-list">
    <booking v-for="(booking, index) in bookings"
      :key="index"
      :booking="booking"
    />
  </div>
</template>

<script>
import Booking from './BookingItem'

export default {
  name: "bookings-list",
  components: {
    'booking': Booking
  },
  props: ['bookings']
}
</script>

<style lang="css" scoped>
</style>
