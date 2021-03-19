<template>
     <div class="pt-5 pb-3">
            <div class="box-score col-6 mx-auto  positon-absolute">
            <div class="row my-2">
                <div class="col-4 text-center mt-5 py-3"><h3 class="my-3">Player</h3>
                <h4 class="my-0 py-0" v-for="(item,i) in player" :key="i">{{item.name}}</h4>
                </div>
                <div class="col-4 text-center mt-2"><h2>Playerlist</h2></div>
                <div class="col-4 text-center mt-5 py-3"><h3 class="my-3">Score</h3>
                <h4 class="my-0 py-0" v-for="(item,i) in player" :key="i">{{item.score}}</h4>
                </div>
            </div>
        </div>
        </div>
</template>
<style scoped>
 .box-score{
        border-radius: 10px;
        background-color: rgb(202, 203, 224);
        z-index: 10;
        height: 20vh;
        overflow: scroll;  
    }

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius:7px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(96, 84, 201);
  border-radius:7px;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(127, 118, 209); 
}
</style>
<script>
export default {
   computed:{
        question(){
            console.log(this.$store.getters.questions)
           return this.$store.getters.questions
        },
        player(){
            return this.$store.getters.player
        }
    }
}
</script>