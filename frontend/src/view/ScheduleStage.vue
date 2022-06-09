<template>
  <div class="schedule">
    <div class="schedule_container">
      <p class="header_all" >Розклад занять за тренерами</p>
      <div class="all_container">
        <div class="part">
          <p style="margin: 0 0 5px; font-size: 32px; text-shadow: black 5px 5px 5px;" >Тренера</p>
        <div v-bind:style= "[chosenIndex === index ? {filter: ['sepia(80%)']} : {filter: ['none']}]" class="text_p" v-for="(area,index) in sortedData" :key="index" @click="activeTrainer(area, index)">
          <div style="text-shadow: black 5px 5px 5px;">{{index}}</div>
        </div>
      </div>
        <div class="part two">
            <PartSchedule :chosenTrainer="this.chosenArr" :chosenIndex="this.chosenIndex"/>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import PartSchedule from "@/components/PartSchedule";
export default {
  name: "ScheduleStage",
  components: {PartSchedule},
  data() {
    return {
      indexActiveTrainer: null,
      workerDate: [],
      chosenArr: null,
      chosenIndex: null,
    }
  },
  computed: {
    sortedData() {
      return this.workerDate.reduce(
          (massive, object) => {
            const nameworker = object.firstnameworker;
            massive[nameworker] ??= [];
            massive[nameworker].push(object);
            return massive;
          },
          {},
      )
    },
  },
  created() {
    this.getDateTrainer();
  },
  methods: {
    async getDateTrainer() {
      try {
        const response = await axios.get("http://localhost:5000/trainersname");
        this.workerDate = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    activeTrainer(arr, index) {
      if (arr != null) {
        this.chosenArr = arr;
        this.chosenIndex = index;
      }
    },
  }

}
</script>

<style scoped lang="scss">

.schedule {
  padding: 90px 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}
.schedule_container {
  display: flex;
  max-width: 1480px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
}

.part {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  font-size: 23px;
  padding: 20px;
  justify-content: space-evenly;
  height: 600px;
  width: 450px;
  background: url("../assets/image/schedule_stage/one_backgroud.png") no-repeat 50%/cover;
}

.two {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.all_container {
  filter: drop-shadow(0 -2px 18px #000000);
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.text_p {
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  transition: all .3s;
  border-radius: 20px;
}

.text_p:nth-child(3n+1) {
  background-color: rgba(18, 54, 105, 0.5);
}

.text_p:nth-child(3n+2) {
  background-color: rgba(22, 67, 129, 0.5);
}

.text_p:nth-child(3n+3) {
  background-color: rgba(46, 100, 171, 0.5);
}

.text_p:hover {
  transform: scale(1.05);
  cursor: pointer;
}

@media screen and (max-width: 769px)  {
  .all_container {
    flex-direction: column;
  }
  .part {
    margin-bottom: 40px;
  }
}

</style>