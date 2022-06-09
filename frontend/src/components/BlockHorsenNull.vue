<template>
    <p style="margin: 10px 0 55px; font-size: 23px; text-shadow: black 5px 5px 5px;">Вільні конячки</p>
  <div class="content_one">
    <transition  name="fade" mode="out-in" appear>
      <img class="img_horse_stage" :src="getImgUrlHorse(activeHorseNull.img_horse)" alt="hos">
    </transition>
    <div class="textp">
      <transition  name="fade" mode="out-in" appear>
        <p>Ім'я: {{activeHorseNull.namehorse}} </p>
      </transition>
      <transition  name="fade" mode="out-in" appear>
        <p>Порода: {{activeHorseNull.breed}}</p>
      </transition>
      <transition  name="fade" mode="out-in" appear>
        <p>Вік: {{activeHorseNull.age}}</p>
      </transition>
      <transition  name="fade" mode="out-in" appear>
        <p>Класс: {{activeHorseNull.classh}}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlockHorsenNull",
  props: ['activeHorseNull'],
  methods: {
    getImgUrlHorse(img) {
      return require('../assets/image/horse_stage/photo_horse/' + img);
    },
  }
}
</script>

<style scoped lang="scss">

p {
  margin: 5px 0;
  font-size: 19px;
}

.content_one {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.img_horse_stage {
  width: 230px;
  height: 230px;
  border-radius: 50px;
  box-shadow: #05163d 5px 5px 5px;
  border: 3px solid #ccc;
}

.textp {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 20px;
}

img {
  transition: 1s all;
}

img:hover {
  transform: scale(0.9);
}
.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-active {
  transition: all 3s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>