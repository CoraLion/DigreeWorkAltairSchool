<template>
    <div class="about">
      <div class="about_container">
        <div class="content_about">
          <div class="abouttwo">
            <transition name="fade" mode="out-in" appear >
              <img class="horse one" src="../assets/image/about_stage/about_horse_1.png" alt="horse_about">
            </transition >
            <div class="content_about_two">
              <transition style="margin: 30px 0" name="fade-right"  mode="out-in"  appear>
                <span class="head_about">Ласкаво просимо!</span>
              </transition>
              <transition name="fade-left" mode="out-in" appear  style="padding: 30px 0 30px 0">
              <span class="text-content">
                 Ви знаходитесь на сайті кінно-cпортивного комплексу «Альтаїр». Він був заснований у 2020 році, у місті Миколаїв, Україна.
                <br/>
                 І за такий короткий час добився звання гарного місця для занять та отримання небувалого досвіду.  <br/>У нашому розпорядженні безліч
                різних порід та сильних коней, наші учні отримують високі бали на міжнародних заїздах.
              </span>
              </transition>
              <transition name="fade-in" mode="out-in" appear>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {

  name: "AboutStage",
  data() {
    return {
      show: true,
    }
  }
}
</script>

<style scoped lang="scss">

.head_about {
  line-height: 3rem; font-size: 60px; text-shadow: black 10px 10px 10px
}

.content_about {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.about {
  padding: 90px 0 220px 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: center;
}

.abouttwo {
  display: flex;
  align-items: center;
  margin-top: 100px;
}

.about_container {
  max-width: 1480px;
  width: 100%;
  padding: 0 90px;
  margin: 0 auto;
}

.about::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: calc(50% - 950px);
  width: 333px;
  height: 486px;
  background: #b5252500 url("../assets/image/about_stage/about_horse_two.png") no-repeat bottom left;
  background-size: cover;
  transform: scaleX(-1);
}

.fade-enter-active {
  transition: all 1.0s ease-out;
}

.fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.horse {
  margin: 0 40px;
  width: 657px;
  height: 525px;
  display: block;
}

.one {
  width: 657px;
  height: 425px;
}

.about_complex {
  margin: 20px 10px;
  height: 100%;
  width: 100%;
  display: block;
  align-items: center;
}

.content_about_two {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.text-content {
  font-size: 22px; line-height: 1.5rem; text-align: justify;
}

.fade-enter-active {
  transition: all 1.5s ease-out;
}

.fade-enter-from {
  transform: translateY(30px);
  opacity: 0;
}

.fade-right-enter-active {
  transition: all 2.5s ease-out;
}

.fade-right-enter-from {
  transform: translateY(-40px);
  opacity: 0;
}

.fade-left-enter-active {
  transition: all 2.5s ease-out;
}

.fade-left-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.fade-in-enter-active {
  transition: all 2.5s ease-out;
}

.fade-in-enter-from {
  transform: translateY(40px);
  opacity: 0;
}


@media screen and (max-width: 769px) {
  .abouttwo {
    flex-direction: column;
    margin-top: 30px;
  }
  .about {
    padding: 90px 0 60px 0;
  }
  .one {
    width: 457px;
    height: 325px;
  }
  .two {
    width: 357px;
    height: 425px;
  }
  .text-content {
    width: 350px;
    font-size: 15px;
  }
  .head_about {
    font-size: 40px;
  }
}

@media (max-width: 1300px) {
  .abouttwo {
    flex-direction: column;
    margin-top: 30px;
  }
  .about {
    padding: 90px 0 60px 0;
  }
  .one {
    width: 457px;
    height: 375px;
  }
  .text-content {
    text-align: end;
  }
  .about:after {
    left: calc(50% - 700px);
  }

}
</style>