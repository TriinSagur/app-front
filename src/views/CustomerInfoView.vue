<template>

  <div>
    <input placeholder="nimi" v-model="firstName">
    <br>
    <br>



    <button v-on:click="greetingWithName('Otto Triin')">Tervituse nupp</button>
    <br>
    <br>
    {{ greetMessage }}
  </div>
</template>


<script>
export default {

  name: "CustomerInfo",
  data: function () {
    return {
      firstName: "",
      greetMessage: ""
    }
  },
  methods: {
    greeting: function () {
      this.greetMessage = "Tere Triin"
    },

    greetingWithName: function (firstName) {
      this.firstName =firstName;
      this.greetMessage = 'Tere ' + firstName

    }

  }
}
</script>
