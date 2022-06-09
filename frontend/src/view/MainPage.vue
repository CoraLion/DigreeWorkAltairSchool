<template>
  <header class="header">
    <div class="header_container">
      <nav class="bt_menu">
        <ul class="bt_menu_list" v-show="!mobile">
          <router-link class="btn_menu_list_word text" v-for="item in items" router :to="item.router" v-bind:key="item.key" @click="openTo(item.key)">
            {{item.text}}
          </router-link>
          <li class="btn_menu_list_word logo">
            <a href="/" aria-current="page" class="logo_type">
              <img class="logo_type_img" src="../assets/altair2.png" alt="Лого"/>
            </a>
          </li>
          <router-link class="btn_menu_list_word text" v-for="item in itemstwo" router :to="item.router" v-bind:key="item.key" @click="openTo(item.key)">
            {{item.text}}
          </router-link>
        </ul>
        <div class="burgermenu" v-show="mobile">
          <div class="btn_menu_burger_word">
            <a href="/" aria-current="page" class="logo_type_media">
              <img class="logo_type_img_media" src="../assets/altair.png" alt="Лого"/>
            </a>
          </div>
          <div class="button_menu" @click="showMenuBar">
            <p style="margin-right: 20px; font-size: 20px;">Меню</p>
            <img src="../assets/menu_burger.png" style="height: 20px; width: 20px" alt="menuburger">
          </div>
        </div>
          <transition name="fade" mode="in-out">
            <ul v-show="menubarShow" class="bt_menu_burger">
              <router-link class="btn_menu_list_word texttwo" v-for="item in items" router :to="item.router" v-bind:key="item.key" @click="openTo(item.key)">
                {{item.text}}
              </router-link>
              <router-link class="btn_menu_list_word texttwo" v-for="item in itemstwo" router :to="item.router" v-bind:key="item.key" @click="openTo(item.key)">
                {{item.text}}
              </router-link>
            </ul>
          </transition>
      </nav>
    </div>
  </header>
  <main class="main_stage">
    <div class="stage">
      <div ref="stage-1" class="stage_part one">
          <AboutStage/>
      </div>
      <div ref="stage-2" class="stage_part five">
        <PeculStage/>
      </div>
      <div ref="stage-3" class="stage_part two">
          <HorseStage/>
      </div>
      <div ref="stage-4"  class="stage_part three">
        <TrainersStage/>
      </div>
      <div ref="stage-5"  class="stage_part four">
        <ScheduleStage/>
      </div>
      <div ref="stage-6"  class="stage_part six">
        <FeedbackStage/>
      </div>
    </div>
  </main>
  <FooterPart/>
</template>

<script>

import AboutStage from "@/view/AboutStage";
import HorseStage from "@/view/HorseStage";
import TrainersStage from "@/view/TrainersStage";
import ScheduleStage from "@/view/ScheduleStage";
import PeculStage from "@/view/PeculStage";
import FeedbackStage from "@/view/FeedbackStage";
import FooterPart from "@/components/FooterPart";

export default {
  name: "MenuBar",
  components: {FooterPart, FeedbackStage, PeculStage, ScheduleStage, TrainersStage, HorseStage, AboutStage},
  data() {
    return {
      isActive: false,
      items: [
        {key: 1, text: 'Про нас', router: "#about"},
        {key: 2, text: 'Особливості', router: "#pecul"},
        {key: 3, text: 'Конячки', router: "#horse"},
      ],
      itemstwo: [
        {key: 4, text: 'Тренера', router: "#trainer"},
        {key: 5, text: 'Тренування', router: "#schedule"},
        {key: 6, text: 'Зв`язатися', router: "#feedback"}
      ],
      mobile: true,
      menubarShow: false,
      windowWidth: null
    }
  },

  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },

  methods: {
    async openTo(num_slide) {
      let slide = this.$refs[`stage-${num_slide}`];
      let top = window.scrollY + slide.getBoundingClientRect().top - document.querySelector("header").offsetHeight;
      window.scrollTo({
        top: top,
        behavior: "smooth"
      })
      if(this.menubarShow === true) {
        this.menubarShow = false;
      }
    },
    showMenuBar() {
      this.menubarShow = !this.menubarShow;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if(this.windowWidth <= 1300) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.menubarShow = false;
    }
  }
}

</script>

<style scoped lang="scss">


.header {
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: url("../assets/menu_bar.png") no-repeat 50%/cover;

  .header_container {
    align-items: center;
    max-width: 1480px;
    width: 100%;
    margin: 0 auto;

    .logo {
      padding: 0 100px;
      margin: 0;
      text-align: center;
    }

    .logo_type {
      display: inline-block;
    }

    .logo_type_img {
      align-items: center;
      display: block;
    }

    .logo_type_media {
      align-items: center;
    }
    .logo_type_img_media {
      width: 120px;
      height: 70px;
    }

    .bt_menu_list {
      justify-content: center;
      display: flex;
      align-items: center;
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 0;
    }

    .btn_menu_list_word {
      text-decoration: none;
      display: flex;
      margin: 0 25px;
      text-align: center;
      color: #ffffff;
      font-variant: small-caps;
      font-size: 17.5px;
      transition: color .3s;
    }
    .text {
      padding-bottom: 20px;
      font-size: 20px;
    }

    .btn_menu_list_word:hover {
      color: #5580de;
      text-shadow: #243a16 2px 4px 10px;
      cursor: pointer;
    }

    .burgermenu {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-around;
      height: 100px;
    }

    .btn_menu_burger_word {
      padding-right: 100px;
    }

    .bt_menu_burger {
      padding: 20px;
      display: flex;
      width: 200px;
      border-radius: 10px;
      flex-direction: column;
      filter: drop-shadow(0 -2px 18px #000000);
      background: url("../assets/background_burger.png") no-repeat 0/cover ;
      align-items: center;
      height: 88vh;
    }

    .button_menu {
      display: flex; align-items: center;  padding-bottom: 10px;
    }
    .texttwo {
      padding: 10px;
      font-size: 20px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 1s ease all;
}

.fade-enter-from, .fade-leave-to {
  transform: translateX(-250px);
}

.fade-enter-to{
  transform: translateX(0);
}

.stage {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .stage_part{
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: thick double #125672;
  }

  .one {
    background: url("../assets/image/about_stage/about_background.png") no-repeat 0/cover;
  }

  .two {
    background: url("../assets/image/horse_stage/horses_background.png") no-repeat 0/cover;
  }

  .three {
    background: url("../assets/image/trainer_stage/trainer_background.png") no-repeat 50% 0/cover;
  }

  .four {
    background: url("../assets/image/schedule_stage/schedule_background.png") no-repeat 0/cover;
  }

  .five {
    background: url("../assets/image/pecul_stage/pecul_background.png") no-repeat 0/cover;
  }

  .six {
    background: url("../assets/image/feedback_stage/feedback_background.png") no-repeat 0/cover;
  }

}

</style>