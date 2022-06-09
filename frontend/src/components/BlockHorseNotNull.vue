<template>
        <p class="header_block">Кінь</p>
            <div class="content_one">
              <transition  name="fade" mode="out-in" appear>
              <img class="img_horse_stage" :src="getImgUrlHorse(activeHorseUser.img_horse)" alt="hos">
              </transition>
              <div class="textp">
                <transition  name="fade" mode="out-in" appear>
                <p style="margin: 5px 0; font-size: 19px;">Ім'я: {{activeHorseUser.namehorse}} </p>
                </transition>
                  <transition  name="fade" mode="out-in" appear>
                <p style="margin: 5px 0; font-size: 19px;">Порода: {{activeHorseUser.breed}}</p>
                  </transition>
                    <transition  name="fade" mode="out-in" appear>
                <p style="margin: 5px 0; font-size: 19px;">Вік: {{activeHorseUser.age}}</p>
                    </transition>
                      <transition  name="fade" mode="out-in" appear>
                        <p style="margin: 5px 0; font-size: 19px;">Класс: {{activeHorseUser.classh}} </p>
                      </transition>
              </div>
            </div>
                  <p class="header_block">Власник коня</p>
            <div>
              <transition  name="fade" mode="out-in" appear>
              <img class="img_horse_stage" :src="getImgUrlUser(activeHorseUser.img)" alt="us">
              </transition>
              <div>
                <transition  name="fade" mode="out-in" appear>
                <p style="margin: 10px 0; font-size: 19px;">{{activeHorseUser.firstnameuser}} {{activeHorseUser.secondnameuser}} {{activeHorseUser.threenameuser}} {{activeHorseUser.raiting}} балів</p>
                </transition>
              </div>
            </div>
</template>

<script>
export default {
  name: "block_horsenotnull",
  props: ['activeHorseUser'],
  methods: {
    getImgUrlHorse(img) {
      return require('../assets/image/horse_stage/photo_horse/' + img);
    },

    getImgUrlUser(img) {
      return require('../assets/image/horse_stage/photo_users/' + img);
    },
  }
}


</script>

<style scoped lang="scss">
img {
  transition: 1s all;
}

img:hover {
  transform: scale(0.9);
}
//p {
//  margin: 5px 0;
//  font-size: 19px;
//}

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


.fade-enter-active {
  transition: all 1s ease;
}

.fade-leave-active {
  transition: all 3s ease;
}

.fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}


</style>