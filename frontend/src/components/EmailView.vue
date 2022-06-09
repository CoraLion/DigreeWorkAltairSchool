<template>
  <transition name="fade" mode="in-out">
  <div v-if="activeAlert">
    <AlertTools :activeTextAlert="activeTextAlert" @closeModal="closeModalView"/>
  </div>
  </transition>
  <p style="font-size: 20px; text-shadow: black 5px 5px 5px">Залиш свої дані, і ми з тобою зв'яжемося</p>
  <form ref="form" @submit.prevent="sendEmail" style="display: flex;flex-direction: column; align-items: center;">
    <p>Ваше ім'я</p>
    <input class="input_part" type="text" placeholder="Ім'я" name="firstname" v-model="firstname">
    <p>Ваше прівище</p>
    <input class="input_part" type="text" placeholder="Прізвище" name="secondname" v-model="secondname">
    <p>Ваш номер телефону</p>
    <input class="input_part" type="tel" placeholder="Телефон" name="telephone" v-model="email">
    <p>Ваша почта</p>
    <input class="input_part" type="email" placeholder="Пошта" name="email" v-model="telephone">
    <p>Ваше повідомлення</p>
    <textarea class="input_part textarea" cols="40" rows="5" placeholder="Ваш текст" name="message" v-model="textarea"/>
    <input class="submit" type="submit" value="Надіслати"/>
  </form>
</template>

<script>
import * as emailjs from "emailjs-com";
import AlertTools from "@/components/AlertTools";

export default {
  name: "EmailView",
  components: {AlertTools},
  data() {
    return {
      firstname: null,
      secondname: null,
      email: null,
      telephone: null,
      textarea: null,
      activeAlert: false,
      textAlert: [
        {num: 1, nameHeader: "Успіх!", name: "Дякуємо! Ми з Вами зв'яжемося."},
        {num: 2, nameHeader: "Щось трапилось!", name: "Будь-ласка, заповніть усі форми!"}
      ],
      activeTextAlert: {}
    }
  },
  methods: {
    sendEmail() {
      if(this.firstname &&  this.secondname && this.email && this.telephone && this.textarea) {
        emailjs.sendForm('service_5kz8etp', 'template_9rsv13p', this.$refs.form,
            'os17KGEvCqlvtuiio').then((result) => {
          console.log('SUCCESS!', result.text);
        } , (error) => {
          console.log('FAILED...', error.text);});
        this.firstname = null;
        this.secondname = null;
        this.email = null;
        this.telephone = null;
        this.textarea = null;
        this.activeAlert = true;
        this.activeTextAlert = this.textAlert[0];
      } else {
        this.activeAlert = true;
        this.activeTextAlert = this.textAlert[1];
      }
    },
    closeModalView() {
      this.activeAlert = false;
      this.activeTextAlert = {};
    }
  }
}
</script>

<style scoped lang="scss">

.input_part {
  color: white;
  border-radius: 10px;
  transition: all .3s;
  padding: 15px;
  font-size: 20px;
  width: 290px;
  height: 50px;
  background-color: rgba(47, 85, 133, 0.8);
}

.input_part:focus {
  border-radius: 24px;
  background-color: rgba(34, 59, 89, 0.8);
}

.textarea {
  border: none;
  resize: none;
  width: 310px;
  height: 100px;
}
p {
  font-size: 20px;
}


.fade-enter-active,
.fade-leave-active{
  transition: .5s ease all;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>