<template>
  <div class="week_container">
    <ul class="dayofweek">
      <li v-for="day in dayofweek" :key="day.num" @click.self="activeDay(activeDayOfTrainer(day), day.name)">{{day.short}}</li>
    </ul>
  </div>
    <div v-if="this.chosenSchedule !== null" class="trainerday">
        <ScheduleWeek :chosenWeek="this.chosenSchedule" :chosenDay="this.chosenDay"/>
    </div>
    <div v-else-if="this.chosenTrainer !== null" class="trainerday">
      <p class="header_small">Будь ласка, визначитись з днем тижня.</p>
    </div>
    <div v-else-if="this.chosenSchedule === null || this.chosenTrainer === null" class="trainerday">
      <p class="header_small">Тут буде розклад, коли ви визначитесь спочатку з тренером, потім з днем тижня.</p>
    </div>
</template>

<script>
import ScheduleWeek from "@/components/ScheduleWeek";
export default {
  name: "PartSchedule",
  components: {ScheduleWeek},
  props: ['chosenTrainer', 'chosenIndex'],
  data() {
    return {
      dayofweek: [
        {num: 0, name: 'Понеділок', short: 'Пн'},
        {num: 1, name: 'Вівторок', short: 'Вт'},
        {num: 2, name: 'Середа', short: 'Ср'},
        {num: 3, name: 'Четвер', short: 'Чт'},
        {num: 4, name: 'П`ятниця', short: 'Пт'},
        {num: 5, name: 'Субота', short: 'Сб'},
        {num: 6, name: 'Неділя', short: 'Нд'}],
      chosenDay: null,
      chosenSchedule: null
    }
  },
  watch: {
    chosenTrainer() {
      this.chosenSchedule = null;
    }
  },
  methods: {
    activeDay(arr, index) {
      if (arr != null) {
        this.chosenSchedule = arr;
        this.chosenDay = index;
      }
    },
    activeDayOfTrainer(day) {
      return this.chosenTrainer.filter((trainer) => {
        return trainer.nameday === day.name;
      })
    },
  }
}
</script>

<style scoped lang="scss">

.upclass {
  display: flex;
}

.classup {
  display: flex;
  padding: 10px;
  width: 100px;
}


.trainerday{
  display: flex;
  height: 70%;
  width: 100%;
  padding: 10px;
  flex-direction: column;
}

.week_container {
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, 0.2);
  border-radius: 30px;
  border-bottom: white 3px;
}

.dayofweek{
  display: flex;
  padding: 10px;
}

li {
  padding: 10px 15px;
}

li:hover {
  color: #5580de;
  text-shadow: #243a16 2px 4px 10px;
  cursor: pointer;
}

</style>