<template>
  <transition name="fade" mode="in-out">
  <div style="z-index: 9999" v-if="showModal">
    <ModalTrainers :chosenTrainer="this.chosenArr" :index="this.chosenIndex" @showModal="closeModalView"/>
  </div>
  </transition>
    <div class="trainers">
      <p class="header_all"> Тренера нашого комплексу</p>
      <div class="trainers_container">
        <div class="trainersallkv">
        <p style="font-size: 23px; text-shadow: black 5px 5px 5px">Тренера з конкуру</p>
        <TrainerOne :findTrainersKonk="findTrainersKonk" :openModalView="openModalView"/>
        </div>
        <div class="trainerpn">
          <TrainerNew :findTrainersNov="findTrainersNov" :openModalView="openModalView"/>
          <TrainerProfi :findTrainersProfi="findTrainersProfi" :openModalView="openModalView"/>
        </div>
        <div class="trainersallkv">
        <p style="font-size: 23px; text-shadow: black 5px 5px 5px">Тренера з виїздки</p>
        <TrainerOne :findTrainersKonk="findTrainersVui" :openModalView="openModalView"/>
        </div>
        <div>
        </div>
      </div>
    </div>
</template>

<script>

import axios from "axios";
import ModalTrainers from "@/components/ModalTrainers";
import TrainerOne from "@/components/TrainerOne";
import TrainerNew from "@/components/TrainerNew";
import TrainerProfi from "@/components/TrainerProfi";
export default {
  name: "TrainersStage",
  components: {TrainerProfi, TrainerNew, TrainerOne, ModalTrainers},
  data() {
    return {
      allTrainers: [],
      showModal: false,
      chosenArr: null,
      chosenIndex: null
    }
  },

  created(){
    this.getTrainer();
  },

  methods: {
    getImgUrl(img) {
      return require('../assets/image/trainer_stage/photo/' + img);
    },

    async getTrainer() {
      try {
        const response = await axios.get("http://localhost:5000/trainer");
        this.allTrainers = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    openModalView(arr, index) {
      if (arr != null) {
        this.chosenArr = arr;
        this.chosenIndex = index;
      }
      this.showModal = true;
    },
    closeModalView() {
      this.showModal = false;
    }
    },

  computed: {
    findTrainersKonk() {
      return this.allTrainers.filter((allTrainers) => {
        return allTrainers.name==='Тренер з конкуру';
      })
    },
    findTrainersProfi() {
      return this.allTrainers.filter((allTrainers) => {
        return allTrainers.name==='Тренер профі';
      })
    },
    findTrainersVui() {
      return this.allTrainers.filter((allTrainers) => {
        return allTrainers.name==='Тренер з виїздки';
      })
    },
    findTrainersNov() {
      return this.allTrainers.filter((allTrainers) => {
        return allTrainers.name==='Тренер новеньких';
      })
    }

  }
}
</script>

<style scoped lang="scss">

.trainersallkv {
  flex-direction: column;
  align-content: space-around;
  display: flex;
  position: relative;
  border-radius: 30px;
  background: url("../assets/image/trainer_stage/bg.png") no-repeat 0/cover ;
  height: 748px;
  width: 450px;
  margin: 0 30px 40px;
}

.trainers {
  justify-content: space-between;
  margin: 90px 0;
  width: 100%;
  height: 100%;
}

.trainers_container {
  filter: drop-shadow(0 -2px 18px #000000);
  display: flex;
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
}

.trainerpn {
  justify-content: space-around;
  align-items: center;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
}

.fade-enter-active{
  transition: opacity 0.8s
}

.fade-leave-active {
  transition: opacity 0.2s
}

.fade-enter-from, .fade-leave-to {
  opacity: 0
}

@media screen and (max-width: 1050px){
  .trainers_container {
    flex-direction: column;
    align-items: center;
  }
  .trainersall {
    margin-bottom: 40px;
  }
  .trainers {
    margin: 50px 0;
  }
}

</style>