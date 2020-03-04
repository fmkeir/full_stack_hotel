<template lang="html">
  <form id="bookings-form" @submit.prevent="handleSubmit">
    <h2>Add Booking</h2>
    <label for="name">Name:</label>
      <input type="text" name="name" v-model="newBooking.name">
    <label for="emailAddress">E-mail:</label>
      <input type="text" name="emailAddress" v-model="newBooking.emailAddress">

    <input type="submit">
  </form>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "bookings-form",
  data() {
    return {
      newBooking: {
        name: "",
        emailAddress: "",
        checkedIn: false
      }
    }
  },
  methods: {
    handleSubmit() {
      eventBus.$emit('submit-booking', this.newBooking);
      this.newBooking = {
        name: "",
        emailAddress: "",
        checkedIn: false
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
