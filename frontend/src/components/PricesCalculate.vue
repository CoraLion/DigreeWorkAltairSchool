<template>
    <div class="calculateview" @click.self="closeModalView">
      <div class="calcalate_wrapper">
        <div class="calculate_content">
          <p class="header_block">Калькулятор</p>
          Ціни та послуги встановлюються приблизно. Уточнюйте у оператора.
          <p class="header_small">Аренда коня</p>
          <select v-model="selectedHorse">
            <option v-for="fh in findHorse" v-bind:value="fh" :key="fh.key">{{fh.nameofprice}} || {{fh.price}} грн/міс </option>
          </select>
          <ul>
            <li class="header_small">Аксесуари</li>
            <li class="ul_prices" v-for="fh in findAcc" :key="fh.key">
              <input type="checkbox" v-bind:value="fh" :id="fh.key" v-model="selected">
              {{fh.nameofprice}} || {{fh.price}} грн/міс
            </li>
            <li class="header_small">Сервіс</li>
            <li class="ul_prices" v-for="fs in findService" :key="fs.key">
              <input type="checkbox" v-bind:value="fs" :id="fs.key" v-model="selected"> {{fs.nameofprice}} || {{fs.price}} грн/міс
            </li>
            <li class="header_small">Доповнення (одноразова виплата)</li>
            <li class="ul_prices" v-for="fd in findDop" :key="fd.key">
              <input type="checkbox" :id="fd.key" v-model="selected" v-bind:value="fd"> {{fd.nameofprice}} || {{fd.price}} грн
            </li>
          </ul>
          <div class="prices">
            <div v-if="!isNaN(calculatePrice)">
              {{calculatePrice}} грн
            </div>
            <div v-else-if="selected.length !== 0">
              Будь ласка, оберіть коня.
            </div>
            <div v-else>
              Будь ласка, оберіть пункти.
            </div>
          </div>
          <div class="footer_price">
            <div class="btn" @click="checkAll">Оновити</div>
            <div class="btn" @click="closeModalView">Закрити</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "PricesCalculate",
  props: ['pricesData'],
  data() {
    return {
      selectedHorse: [],
      selected: [],
      calculate: null,
      number: 0,
      isCheckAll: false
    }
  },

  methods: {
    closeModalView() {
      !this.$emit('showCalculate');
    },
    checkAll: function(){
      this.isCheckAll = !this.isCheckAll;
      this.selected = [];
      this.selectedHorse = [];
    },
  },
  computed: {
    findHorse() {
      return this.pricesData.filter((allHorse) => {
        return allHorse.nameofprice.includes('категорії');
      })
    },
    findAcc() {
      return this.pricesData.filter((allHorse) => {
        return allHorse.nameofprice.includes('Використання');
      })
    },
    findService() {
      return this.pricesData.filter((allHorse) => {
        return allHorse.nameofprice.includes('Послуга');
      })
    },
    findDop() {
      return this.pricesData.filter((allHorse) => {
        return allHorse.nameofprice.includes('Консультація');
      })
    },
    findCard() {
      return [...this.selected, this.selectedHorse];
    },
    calculatePrice() {
      return this.findCard.reduce((sum, item) => sum + item.price, 0);
    },
  },
}

</script>

<style scoped>

.calculateview {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;
}

.calcalate_wrapper {
  overflow-x: auto;
  display: table-cell;
  vertical-align: middle;
}

.calculate_content {
  width: 400px;
  height: 750px;
  margin: 0 auto;
  padding: 20px 30px;
  background: url("../assets/image/trainer_stage/modal_background.png") no-repeat 0/cover ;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-around;
}

.btn {
  font-size: 20px;
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
}

.footer_price {
  display: flex;
  margin: 20px;
}

.ul_prices {
  display: flex;
  padding: 3px;
  width: 370px;
}

select {
  background-color: #2f5585;
  color: white;
  border: none;
}

select:hover {
  background-color: #26446b;
}

.prices {
  font-size: 20px;
  margin: 15px;
  text-shadow: black 5px 5px 5px;
}

</style>

