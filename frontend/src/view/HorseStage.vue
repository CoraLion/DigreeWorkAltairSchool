<template>
    <div class="horse">
      <div class="horse_container">
        <p class="header_all" >Коні нашого комплексу та їх власники</p>
        <div class="horse_part">
          <div class="horse_have">
              <div class="horse_have_content" v-if="horseuser.length > 0" :key="indexActiveUser" >
                <BlockHorseNotNull :activeHorseUser="activeHorseUser"/>
              </div>
            <div>
              <button class="btn" @click="indexActiveUser--;" :disabled="indexActiveUser <= 0" >←</button>
              <button class="btn" @click="indexActiveUser++;" :disabled="indexActiveUser === horseuser.length - 1">→</button>
            </div>
          </div>
          <div class="horse_have  two">
            <div class="horse_have_content" v-if="horsenulluser.length > 0" :key="indexActiveNull" >
              <BlockHorsenNull :activeHorseNull="activeHorseNull"/>
            </div>
            <div>
              <button class="btn" @click="indexActiveNull--;" :disabled="indexActiveNull <= 0">←</button>
              <button class="btn" @click="indexActiveNull++;" :disabled="indexActiveNull === horsenulluser.length - 1">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import BlockHorseNotNull from "@/components/BlockHorseNotNull";
import BlockHorsenNull from "@/components/BlockHorsenNull";
export default {
  name: "HorseStage",
  components: {BlockHorseNotNull, BlockHorsenNull},
  data() {
    return {
      horsenulluser: [],
      horseuser: [],
      indexActiveUser: 0,
      indexActiveNull: 0,
      showModal: false,
      chosenArr: null,
    }
  },

  created() {
    this.getHorseUser();
    this.getHorseNullUser();
  },

  computed: {
    activeHorseUser() {
      return this.horseuser[this.indexActiveUser];
    },
    activeHorseNull() {
      return this.horsenulluser[this.indexActiveNull];
    }
  },

  methods: {
    async getHorseNullUser() {
      try {
        const response = await axios.get("http://localhost:5000/horsenullusers");
        this.horsenulluser = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async getHorseUser() {
      try {
        const response = await axios.get("http://localhost:5000/horseusers");
        this.horseuser = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  }
}
</script>

<style scoped lang="scss">


.horse {
  justify-content: space-between;
  padding: 90px 0;
  width: 100%;
  height: 100%;
}

.horse_container {
  display: flex;
  max-width: 1480px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
}

.horse_part {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

.horse_have {
  filter: drop-shadow(0 -2px 18px #000000);
  width: 500px;
  height: 690px;;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  background: url("../assets/image/horse_stage/stage_background.png");
  flex-direction: row;
  border-radius: 30px;
}

.horse_have_content {
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}


.horse_nothave {
  display: flex;
  overflow: auto;
}

.horse_container::after {
  position: absolute;
  content: '';
  bottom: 0;
  left: calc(100% - 1900px);
  width: 433px;
  height: 386px;
  background: #b5252500 url("../assets/image/horse_stage/logo_horse.png") no-repeat bottom left;
  background-size: cover;
  transform: scaleX(-1);
}

.two {
  width: 500px;
  height: 550px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
}

@media (max-width: 1588px){
  .horse_container::after {
    left: calc(100% - 1700px);
  }

@media (max-width: 1050px) {
  .horse_part {
    flex-direction: column;
  }

  .horse_have {
    margin-bottom: 50px;
  }

  .header_horse {
    margin: 0 0 45px;
  }

  .horse_container::after {
    left: calc(100% - 1100px);
  }
}
}


</style>
