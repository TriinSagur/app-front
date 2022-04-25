<template>
  <div>

    <input type="text" placeholder="Eesnimi" v-model="customer.firstName">
    <br>
    <br>
    <input type="text" placeholder="Perekonnanimi" v-model="customer.lastName">
    <br>
    <br>
    <input type="text" placeholder="Isikukood" v-model="customer.isikukood">
    <br>
    <br>
    <button type="submit" v-on:click="addNewCustomer">Lisa uus klient</button>

    <br>
    <br>


    <input type="file" @change="handleImage" accept="image/x-png, image/jpeg">

    <br>
    <br>
    <button v-on:click="addNewCustomerPicture" type="button" class="btn btn-success m-5">Lisa pilt</button>
    <br>
    <br>
    <button v-on:click="getAllPictures" type="button" class="btn btn-success m-5">Vaata pilti</button>


    <div v-for="picture in pictures">
      <label>{{picture.title}}</label>
      <img :src="picture.data">
    </div>

  </div>
</template>

<script>
export default {
  name: 'NewCustomerView',

  data: function () {
    return {
      customer: {},
      pictureExport: {},
      pictures: {}
    }
  },
  methods: {

    handleImage(event) {
      this.displayInputPicture = true
      this.displayUploadPictureDetailsOptions = true

      const selectedImage = event.target.files[0];
      this.createBase64Image(selectedImage);
    },

    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = () => {
        this.pictureExport.data = reader.result;
      };
      reader.onerror = function (error) {
        alert(error);
      }
      reader.readAsDataURL(fileObject);
    },

    addNewCustomer: function () {

      this.$http.post('/customer', this.customer)
          .then(response => {
            this.customer.id = response.data.id
            alert('Klient lisatud. ID: ' + this.customer.id)
          })
          .catch(error => {
            alert(error.response.data.detail)
            console.log(error.response.data)
          })
    },

    addNewCustomerPicture: function () {
      this.$http.post("/picture/in", this.pictureExport
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    getAllPictures: function () {
      this.$http.get("/picture/all")
          .then(response => {
            this.pictures = response.data
            console.log(response.data)
          }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>


<style scoped>

</style>