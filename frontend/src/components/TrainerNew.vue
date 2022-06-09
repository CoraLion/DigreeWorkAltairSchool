<template>
  <div class="trainersall">
    <p style="margin-top: 14px; margin-bottom: 0; font-size: 20px; text-shadow: black 5px 5px 5px">Тренер новеньких</p>
    <div class="trainers_page" v-for="(train, index) in findTrainersNov" v-bind:key="train.key">
      <a data-tooltip="Натисніть, щоб дізнатися більше" class="dop"  @click="openModalView(train, index)"><img class="image_trainer" :src="getImgUrl(train.img)" alt="trainer"></a>
      <p style="font-size: 19px">{{train.firstnameworker}} {{train.secondnameworker}} {{train.threenameworker}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainerNew",
  props: ['findTrainersNov', 'openModalView'],
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

.dop:after {
  height: 30px;
  font-size: 13px;
  left: calc(50% - 199px);
  bottom: 0;
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
  height: 250px;
  width: 400px;
}
.image_trainer {
  height: 170px;
  width: 110px;
  border-radius: 100px;
  box-shadow: #05163d 5px 5px 5px;
  border: 3px solid #ccc;
  transition: .3s;
  cursor: pointer;
}

.image_trainer:hover {
  transform: scale(1.1);
}

.trainers_page {
  margin: 12px 0;
  display: flex;
  position: relative;
  height: 310px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

</style>