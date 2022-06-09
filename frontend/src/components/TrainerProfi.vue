<template>
  <div class="trainersall">
    <p style="font-size: 20px; text-shadow: black 5px 5px 5px">Тренера профі</p>
    <div style="display: flex; justify-content: space-around;">
      <div class="trainers_page prof" v-for="(train, index) in findTrainersProfi" v-bind:key="train.key">
        <a data-tooltip="Натисніть, щоб дізнатися більше"  @click="openModalView(train, index)"><img class="image_trainer p" :src="getImgUrl(train.img)" alt="trainer"></a>
        <p style="font-size: 19px">{{train.firstnameworker}} {{train.secondnameworker}} {{train.threenameworker}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainerProfi",
  props: ['findTrainersProfi', 'openModalView'],
  methods: {
    getImgUrl(img) {
      return require('../assets/image/trainer_stage/photo/' + img);
    },
  }
}
</script>

<style scoped>


a:before, a:after{
  position: absolute;
  opacity: 0;
  visibility: hidden;
}

a:after{
  font-size: 15px;
  content: attr(data-tooltip);
  width: 200px;
  height: 50px;
  line-height: 25px;
  background-color: #2f5585;
  border-radius: 3px;
  bottom: 50px;
  left: calc(50% - 99px);
}

a:hover:after {
  opacity: 0.7;
  visibility: visible;
  transition: .2s ease-in-out .2s;
}
.trainersall {
  flex-direction: column;
  align-content: space-around;
  display: flex;
  position: relative;
  border-radius: 30px;
  background: url("../assets/image/trainer_stage/bg.png") no-repeat 0/cover ;
  margin: 0 30px;
  height: 390px;
  width: 450px;
}


.trainers_page {
  margin: 12px 0;
  display: flex;
  position: relative;
  height: 310px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  align-content: flex-end;
}


.image_trainer {
  border-radius: 100px;
  box-shadow: #05163d 5px 5px 5px;
  border: 3px solid #ccc;
  transition: .3s;
  height: 240px;
  width: 160px;
  cursor: pointer;
}


.image_trainer:hover {
  transform: scale(1.1);
}
</style>