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

    <input type="file" @change="handleImage" accept="image/x-png, image/jpg">


    <br><br>


    <button type="submit" class="btn btn-outline-success m-3" v-on:click="addNewCustomer">Lisa uus klient</button>
    <button v-on:click="addNewCustomerPicture" type="button" class="btn btn-outline-success m-3">Lisa pilt</button>
    <button v-on:click="showCustomerPictures" type="button" class="btn btn-outline-success m-3">kuva pilt</button>



    <div v-for="pictures in pictures" style="width: ">
      <label>{{picture.title}}</label>

      <img :src="picture.data" alt="">
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
      // this.displayInputPicture = true
      // this.displayUploadPictureDetailsOptions = true

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