<template>
    <div v-if="chosenWeek.length !== 0">
      <div v-for="sw in chosenWeek" :key="sw.key">
        <p class="header_small">Ім'я та прізвище</p> <p class="cont"> {{sw.firstnameuser}} {{sw.threenameuser}}</p>
        <p class="header_small">Початок заняття</p> <p class="cont">  {{sw.timestart}}</p>
        <p class="header_small">Кінець заняття</p> <p class="cont"> {{sw.timeover}}</p>
        <p class="header_small">Тип заняття</p> <p class="cont"> {{sw.name}}</p>
      </div>
    </div>
    <div class="header_small" v-if="chosenWeek.length === 0">
      Занять немає.
    </div>
</template>

<script>
export default {
  name: "ScheduleWeek",
  props: ['chosenWeek', 'chosenDay'],
}
</script>

<style scoped lang="scss">

.cont {
  font-size: 21px;
}
</style>