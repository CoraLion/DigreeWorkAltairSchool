<template>
    <div class="alertview" @click.self="closeModal">
    <div class="alert_content">
      <span style="font-size: 30px; margin: 0 0 32px; text-shadow: black 5px 5px 5px;">{{activeTextAlert.nameHeader}}</span>
      <span style="font-size: 20px; margin: 0 0 15px;">{{activeTextAlert.name}}</span>
      <div class="submit" @click="closeModal">Закрити</div>
    </div>
    </div>
</template>

<script>
export default {
  name: "AlertTools",
  props: ['activeTextAlert'],
  methods: {
    closeModal() {
      !this.$emit('closeModal');
    }
  }
}
</script>

<style scoped lang="scss">
.alertview {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s ease;
  align-items: center;
}

.alert_content {
  width: 400px;
  height: 230px;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(85, 128, 222, 0.9);
  border-radius: 15px;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.8);

}

</style>