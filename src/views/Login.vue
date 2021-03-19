<template>
  <div>
    <div class="container-fluid page-login mx-0 px-0">
      <div
        class="col-12 position-absolute d-flex align-content-center flex-wrap my-auto"
        style="z-index: 10; height: 100vh"
      >
      
        <div class="d-flex justify-content-center position-absolute">
          <div class="title position-absolute"><h1 class="text-white font-weight-bold">Game PS5</h1>
          </div>
          <img class="w-img" src="../../public/img/Group 51.png" alt=""></div>
        <div class="box-login col-12 col-md-4 mx-auto px-5 py-5">
          
          <form>
            <div class="form-group mt-5">
              <label for="text"> <h2>Nama Lo Boy</h2></label>
              <input type="text" class="form-control" v-model="name" placeholder="Masukkin sini boy" />
            </div>
            <button type="submit" @click="setName" class="btn btn-fun mt-4 col-12 text-white">
             <h2>Masuk Boy</h2>
            </button>
          </form>
        </div>
      </div>
      <div class="overlay-image px-0 mx-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:''
    }
  },
sockets: {
    connect () {
      console.log('connected')
    }
  },
  methods:{
    setName(){
      if (this.name) {
        localStorage.setItem('name',this.name)
        this.$router.push('/Home')
        // this.$store.commit('SET_PLAYERS', this.name)
        this.name = ''
        this.$swal('Login success bor')
      } else {
        this.$swal('Yang bener ae bos')
      }
    }
  }
}
</script>
<style scoped>
.w-img{
  margin-top:100px ;
  z-index: 100;
  width: 15%;
}
.title{
 z-index: 101;
}
.btn-fun{
  background-color: #023e8a;
}
</style>
