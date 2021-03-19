<template>
    <div class="themeColor">
        <div class="container-fluid page-home mx-0 px-0">

        
            <div>
                <img class="presenting-img" src="../../public/img/willsmith.png" alt="">
            </div>
        <boxplayer />
        <div class="question col-8 mt-5 mx-auto">
            <div class="pt-1">
                <div class="box-question mt-3 py-3 px-3">
                <h1>{{question[increment].question}}</h1>
            </div>
            <div class="answer row mt-5">
                <div class="col-6 my-2" v-for="(answer,i) in question[increment].option" :key="i"><h1 class="text-center">{{answer.list}}</h1></div>
                    <button type="button" class="btn btn-info col-8 mx-auto mt-5" @click="logout">Keluar ae boy</button>
            </div>
            
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

//ini kalo mau dipake lagi pindahin ke css
//   .themeColor{
//         background: #1a2a6c;  /* fallback for old browsers */
//         background: -webkit-linear-gradient(to bottom, #fdbb2d, #b21f1f, #1a2a6c);  /* Chrome 10-25, Safari 5.1-6 */
//         background: linear-gradient(to bottom, #fdbb2d, #b21f1f, #1a2a6c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

//       height: 100vh;
//     }
</script>
<style scoped>
    .question{
        height: 50vh;
        background-color:rgb(202, 203, 224);
        border-radius: 7px;
    }
    .box-question{
        background-color: rgb(96, 84, 201);
        border-radius: 7px;
    }
   .presenting-img {
        position: absolute;
        left: 0%;
        margin-left: 0;
        margin-top: 55vh;
        width: 400px;
        height: auto;
}
</style>