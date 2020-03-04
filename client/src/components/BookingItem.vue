<template lang="html">
  <div class="booking">
    <div v-if="!edit">
      <h2><b>Name:</b>{{booking.name}}</h2>
      <h3><b>E-mail:</b>{{booking.emailAddress}}</h3>
      <h3 v-if="booking.checkedIn" class="green">Checked in</h3>
      <button
        name="check-in"
        v-if="!booking.checkedIn"
        @click="handleCheckIn"> Check in
      </button>
      <button name="delete" @click="handleDelete">Delete booking</button>
      <button name="edit" @click="handleEdit">Edit booking</button>
    </div>

    <div v-if="edit">
      <form id="edit-booking" @submit.prevent="handleUpdate">
        <label for="name">Name:</label>
          <input type="text" name="name" :value="booking.name">
        <label for="emailAddress">E-mail:</label>
          <input type="text" name="emailAddress" :value="booking.emailAddress">

        <input type="submit" value="Confirm changes">
      </form>
    </div>

  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: "booking",
  data() {
    return {
      edit: false
    }
  },
  props: ['booking'],
  methods: {
    handleCheckIn() {
      this.booking.checkedIn = true
      eventBus.$emit('update-booking', this.booking)
    },

    handleDelete(){
      eventBus.$emit('delete-booking', this.booking._id)
    },

    handleEdit(){
      this.edit = true
    },

    handleUpdate(event){
      this.booking.name = event.target.elements[0].value
      this.booking.emailAddress = event.target.elements[1].value
      eventBus.$emit('update-booking', this.booking)
      this.edit = false
    }
  }
}
</script>

<style lang="css" scoped>
  .green {
    color: lightgreen;
  }
</style>
