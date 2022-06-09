<template>
  <transition name="fade" mode="in-out">
  <div style="z-index: 9999" v-if="showCalculate">
    <PricesCalculate @showCalculate="closeModalView" :pricesData="this.pricesData"/>
  </div>
  </transition>
  <div class="pecul">
    <div class="pecul_container">
      <p class="header_all" >Особливості нашого комплексу</p>
      <div class="content">
        <div class="content_one" :key="indexActive">
          <PeculPart :activePecul="activePecul"/>
        </div>
        <nav class="content_two">
          <button class="btn" @click="indexActive--;" :disabled="indexActive <= 0">←</button>
          <div class="nav_transition">
            <div v-for="item in navitem" v-bind:key="item.key">
              <img v-bind:style= "[indexActive === item.key ? {filter: ['drop-shadow(0 -2px 18px #ffffff)']} : {filter: ['drop-shadow(0 -2px 18px #000000)']}]" :src="getImgUrl(item.image)" alt="nav" @click="updateIndexActiveNav(item.key)">
            </div>
          </div>
          <button class="btn" @click="indexActive++;" :disabled="indexActive === items.length - 1">→</button>
        </nav>
        <div class="btn one" @click="updateCalculate">Калькулятор цін</div>
      </div>
    </div>
  </div>
</template>

<script>
import PeculPart from "@/components/PeculPart";
import axios from "axios";
import PricesCalculate from "@/components/PricesCalculate";
export default {
  name: "PeculStage",
  components: {PricesCalculate, PeculPart},
  data() {
    return {
      items: [
        {key: "Аксесуари", keytwo: "Неймовірність", image: "one.png", text: "Ми привнесли численні покращення до стандартних підвидів аксесуарів та амуніції, яку ви зможете або орендувати, або купити за найнижчою ціною. Удосконалюючи цей аспект та оновлюючи товари, ми прагнемо створити максимально зручне для наших учнів середовище.",
          texttwo: [ {name:"Бинти"}, {name:"Вальтрапи"}, {name:"Вушка"}, {name:"Ногавки"}, {name:"Кобури"}, {name:"Ватники"} ],
          imagepecul: [{image: "one_one.png"}, {image: "one_two.png"}, {image: "one_three.png"}]},
        {key: "Попони", keytwo: "Унікальність", image: "two.png", text: "Такої різноманітності одягу для ваших коней Ви не побачите ніде. У будь-яку погоду вона залишиться в теплі, ми разом захистимо їхню шерсть від дощу, вітру та снігу. Ви зможете орендувати чи купити їх у нашому комплексі. Упевнені, кожен зможе підібрати щось на свій смак, або отримати унікальну попону.",
          texttwo: [ {name:"Міховки"}, {name:"Дощовики"}, {name:"Флісовики"}, {name:"Сідлові"}, {name:"Охолоджувачі"}, {name:"Вовнянячи"} ],
          imagepecul: [{ image: "two_one.png"}, {image: "two_two.png"}, {image: "two_three.png"}]},
        {key: "Догляд", keytwo: "Зручність", image: "three.png", text: "Експериментуйте та розвивайтеся з нашими тренерами, а тим часом наші конюхи із задоволенням зроблять все інше. У нас найкращі доглядові засоби, найкращі фахівці та найкращі алгоритми. Чистота та доглянутість – запорука того, що Ваш кінь буде щасливо виконувати роботу.",
          texttwo: [ {name:"Щітки"}, {name:"Мазі"}, {name:"Підкови"}, {name:"Шампуні"}, {name:"Гелі"}, {name:"Глина"} ],
          imagepecul: [{ image: "three_one.png"}, {image: "three_two.png"}, {image: "three_three.png"}]},
        {key: "Седла", keytwo: "Свобода", image: "four.png", text: "Ви можете розвиватися в будь-якому напрямку кінної їзди: починаючи конкурним та закінчуючи скаковим. На вибір ми можемо запропонувати вам будь-яку техніку, а тренера в будь-який момент прийдуть до Вас на допомогу. Змагання та медалі - ось, що чекає на вас у нашому комплексі. І не забувайте, що все лише у Ваших руках.",
          texttwo: [ {name:"Конкурні"}, {name:"Виїздкові"}, {name:"Універсальні"}, {name:"Скакові"}, {name:"Вестерн"}, {name:"Запчастини"} ],
          imagepecul: [{image: "four_one.png"}, {image: "four_two.png"}, {image: "four_three.png"}]}
      ],
      navitem: [
        {key: 0, image: "nav_one.png"},
        {key: 1, image: "nav_two.png"},
        {key: 2, image: "nav_three.png"},
        {key: 3, image: "nav_four.png"},
      ],
      indexActive: 0,
      showCalculate: false,
      pricesData: []
    }
  },
  computed: {
    activePecul() {
      return this.items[this.indexActive];
    },
  },
  created() {
    this.getPrices();
  },
  methods: {
    async getPrices() {
      try {
        const response = await axios.get("http://localhost:5000/pricesname");
        this.pricesData = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    getImgUrl(img) {
      return require('../assets/image/pecul_stage/' + img);
    },
    updateIndexActiveNav(item){
      this.indexActive = item;
    },
    updateCalculate() {
     this.showCalculate = true;
    },
    closeModalView() {
      this.showCalculate = false;
    }
  },
}
</script>

<style scoped lang="scss">

.one {
  font-size: 20px;
  display: flex;
  width: 200px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
}

.pecul {
  padding: 90px 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.pecul_container {
  display: flex;
  max-width: 1480px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
}

.content {
  filter: drop-shadow(0 -2px 18px #000000);
  display: flex;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  border-radius: 30px;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  background: url("../assets/image/pecul_stage/stage_background.png")  no-repeat 50%/cover;
  align-items: center;
}

.content_one {
  display: flex;
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;

}

.content_two {
  width: 900px;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
}

.nav_transition {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

@media screen and (max-width: 1300px) {
  .content {
      width: 900px;
  }
  .content_one {
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 800px) {
  .content {
    width: 700px;
  }
  .nav_transition {
    flex-wrap: wrap;
    width: 250px;
  }
  .content_two {
    flex-direction: column;
  }
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

</style>