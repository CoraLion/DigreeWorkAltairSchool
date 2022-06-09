<template>
    <div class="modalview" @click.self="closeModalViewD">
      <div class="modal_wrapper">
        <div class="modal_container">
          <div style="margin-bottom: 10px">
            <p style="font-size: 23px; text-shadow: black 5px 5px 5px;">Тренер</p>
          </div>
          <slot class="modal_body">
            <img class="image_trainer" :src="getImgUrl(chosenTrainer.img)" alt="trainer">
            <p>ФІО: {{chosenTrainer.firstnameworker}} {{chosenTrainer.secondnameworker}} {{chosenTrainer.threenameworker}}</p>
            <p>Спеціалізація: {{chosenTrainer.name}}</p>
            <p>День народження: {{chosenTrainer.birthday}}</p>
            <p>Номер телефону: +{{chosenTrainer.phone}}</p>
          </slot>
          <slot class="modal_footer">
              <button class="btn" @click="closeModalViewD">
                Закрити
              </button>
          </slot>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "ModalTrainers",
  props: ['chosenTrainer', 'index'],
  methods: {
    closeModalViewD() {
      !this.$emit('showModal');
    },
    getImgUrl(img) {
      return require('../assets/image/trainer_stage/photo/' + img);
    }
  }
}
</script>

<style scoped lang="scss">

.btn {
  font-size: 20px;
}

p {
  margin: 5px 0;
  padding: 0;
}

* {
  color: #ffffff;
}
.modalview {
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

.image_trainer {
  margin-bottom: 15px;
  height: 300px;
  border-radius: 100px;
  box-shadow: #05163d 5px 5px 5px;
  border: 3px solid #ccc;
  transition: .3s;
}

.modal_wrapper {
  overflow-x: auto;
  display: table-cell;
  vertical-align: middle;
}

.modal_container {
  width: 400px;
  height: 550px;
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
}

.modal_body {
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  align-items: center;
}

</style>