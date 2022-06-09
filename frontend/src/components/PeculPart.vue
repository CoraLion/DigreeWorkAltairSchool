<template>
  <transition name="fade-two" appear>
  <div class="container one">
      <p class="header_block">{{activePecul.key}}</p>
    <div class="content_pecul">
      <div>
        <transition-group name="fade-two" appear>
          <div v-for="item in activePecul.imagepecul" v-bind:key="item">
            <img class="img_two" :src="getImgUrl(item.image)" alt="hos">
          </div>
        </transition-group>
      </div>
      <div>
        <transition-group name="fade-two" appear tag="ul" class="twopart">
          <li v-for="item in activePecul.texttwo" v-bind:key="item" >
            {{item.name}}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
    </transition>
    <div class="content two">
      <transition name="fade" appear>
        <div> <img class="img_pecul" :src="getImgUrl(activePecul.image)" alt="hos"></div>
      </transition>
      <div>
        <transition name="fade-in" appear>
        <img class="img" src="../assets/image/pecul_stage/five.png" alt="hos">
        </transition>
      </div>
      </div>
  <transition name="fade-three" appear>
  <div class="container one">
    <transition name="fade-three" appear>
      <p class="header_block">{{activePecul.keytwo}}</p>
    </transition>
    <transition name="fade-three" appear>
    <div>
      <p style="font-size: 19px; text-align: end; line-height: 1.3rem;">{{activePecul.text}}</p>
    </div>
    </transition>
  </div>
  </transition>
</template>

<script>
export default {
  name: "PeculPart",
  props: ['activePecul'],
  methods: {
    getImgUrl(img) {
      return require('../assets/image/pecul_stage/' + img);
    },
  }
}
</script>

<style scoped lang="scss">

li {
  margin: 15px 0;
  align-content: revert;
  font-size: 19px;
}

.container {
  padding: 10px;
  display: flex;
  margin: 10px 70px;
}

.two {
  flex-direction: column;
  flex-wrap: nowrap;
}

.one {
  filter: drop-shadow(0 -2px 18px #000000);
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  height: auto;
  width: 300px;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  background: url("../assets/image/pecul_stage/bg.png")   no-repeat 50%/cover;

}

.img_pecul {
  height: 300px;
  width: 300px;
}

.img {
  width: 300px;
  height: 100px;
}

.img_two {
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 30px;
  box-shadow: #05163d 5px 5px 5px;
  border: 3px solid #ccc;
  margin: 10px;
  flex-direction: column;
}

.twopart {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content_pecul {
  margin: 0 40px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}


.fade-enter-active,
.fade-leave-active, .fade-two-enter-active,
.fade-two-leave-active, .fade-three-enter-active,
.fade-three-leave-active, .fade-in-enter-active,
.fade-in-leave-active{
  transition: 1s ease all;
}

.fade-enter-from, .fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}

.fade-two-enter-from, .fade-two-leave-to {
  transform: translateX(30px);
  opacity: 0;
}

.fade-three-enter-from, .fade-three-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}



</style>