<template>
    <div class="trainers_page" v-for="(train, index) in findTrainersKonk" :key="train.key">
      <a data-tooltip="Натисніть, щоб дізнатися більше" @click="openModalView(train, index)"><img class="image_trainer" :src="getImgUrl(train.img)" alt="trainer"></a>
      <p style="font-size: 19px">{{train.firstnameworker}} {{train.secondnameworker}} {{train.threenameworker}}</p>
    </div>
</template>

<script>
export default {
  name: "TrainerOne",
  props: ['findTrainersKonk', 'openModalView'],
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

.image_trainer {
  height: 270px;
  width: 180px;
  border-radius: 100px;
  box-shadow: #05163d 5px 5px 5px;
  border: 3px solid #ccc;
  transition: .3s;
}

.image_trainer:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>