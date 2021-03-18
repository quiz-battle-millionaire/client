<template>
    <div class="themeColor">
       <boxplayer />
       <div class="question col-8 mt-5 mx-auto">
         <div class="pt-1">
               <div class="box-question mt-3 py-3 px-3">
               <h1>{{question[increment].question}}</h1>
           </div>
           <div class="answer row mt-5">
               <div class="col-6 my-2" v-for="(answer,i) in question[increment].option" :key="i"><h1 class="text-center">{{answer.list}}</h1></div>
                  <button type="button" class="btn btn-danger col-8 mx-auto mt-5" @click="logout">Keluar ae boy</button>
           </div>
         </div>
       </div>
    </div>
</template>
<script>
import boxplayer from "@/components/BoxPlayer"
export default {
    data(){
        return{
            increment:2
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('name')
            this.$router.push('/')
        }
    },
    components:{
        boxplayer
    },
    mounted(){
        this.$store.dispatch('questions')
    },
    computed:{
        question(){
            console.log(this.$store.getters.questions)
           return this.$store.getters.questions
        }
    }
}
</script>
<style scoped>
    .themeColor{
       background: #1a2a6c;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #fdbb2d, #b21f1f, #1a2a6c);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #fdbb2d, #b21f1f, #1a2a6c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      height: 100vh;
    }
    .question{
        height: 50vh;
        background-color: white;
         border-radius: 7px;
    }
    .box-question{
        background-color: thistle;
        border-radius: 7px;
    }
</style>