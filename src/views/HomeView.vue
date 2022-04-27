<template>
  <div class="home">
    <header>
      <h1>Weather Comparison</h1>
    </header>
    <div class="accuweather">
      <h1>Accuweather</h1>
      <form class="accuweather-form">
        <div class="row">
          <div class="col">
            <label>Days</label>
            <select v-model="weatherRequest.dateRange" class="form-control">
              <option>1</option>
              <option>5</option>
            </select>
          </div>
          <div class="col">
            <label for="latitude">Latitude</label>
            <input v-model="weatherRequest.latitude" type="text" class="form-control" id="latitude">
          </div>
          <div class="col">
            <label for="longitude">Longitude</label>
            <input v-model="weatherRequest.longitude" type="text" class="form-control" id="longitude">
          </div>
          <div class="col">
            <button type="button" class="btn btn-outline-info btn-lg" id="submit" v-on:click="getAccuweather">Get
              data!
            </button>
          </div>
        </div>
      </form>
      <table class="table table-hover table-sm">
        <thead>
        <tr>
          <th scope="col" style="width: 13%">City</th>
          <th scope="col" style="width: 13%">Country</th>
          <th scope="col" style="width: 15%">Date/time</th>
          <th scope="col" style="width: 12%">Minimum temperature</th>
          <th scope="col" style="width: 12%">Maximum temperature</th>
          <th scope="col" style="width: 13%">Rain</th>
          <th scope="col" style="width: 13%">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>City</td>
          <td>Country</td>
          <td>Date/time</td>
          <td>Minimum temperature</td>
          <td>Maximum temperature</td>
          <td>Rain</td>
          <td>Description</td>
        </tr>
        </tbody>
      </table>
      {{weatherRequest}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  data:function(){
    return {
      weatherRequest:{}
    }
  },
  methods:{
    getAccuweather: function () {
          this.$http.post("/accuweather", this.weatherRequest)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {console.log(error)})
    }
  }
}
</script>
</script>

<style scoped>
header {
  margin: 0;
  height: 20vh;
  width: auto;
  background-color: #a1d5e5;
}

header h1 {
  text-align: left;
  padding-left: 5vh;
  padding-top: 6vh;
  font-size: 3em;
}

.accuweather h1 {
  background-color: bisque;
  text-align: left;
  padding-left: 11vh;
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-bottom: 3vh;
  font-size: 2em;
}

form {
  width: 40vw;
  margin-left: 5vw;
  margin-bottom: 3vh;
}
form button{
  margin-top: 15%;
}
.table table-hover{
  width: 70%;
}
</style>
