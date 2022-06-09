<template>
  <div class="feedback">
    <p class="header_all" >Зв'язатися з нами</p>
    <div class="feedback_container">
      <div class="email_stage">
        <EmailView/>
      </div>
      <div class="video_horse_feedback">
        <div style="display: flex; justify-content: center; margin: 10px 0;">
          <iframe style="border-radius: 30px;" height="650px" width="760px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailView from "@/components/EmailView";
export default {
  name: "FeedbackStage",
  components: {EmailView}
}
</script>

<style scoped>
.feedback{
  padding: 90px 0;
  width: 100%;
  height: 100%;
  position: relative;
}

.feedback_container {
  margin: 0 auto;
  max-width: 1480px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  filter: drop-shadow(0 -2px 18px #000000);
}

.video_horse_feedback {
  border: thick double #125672;
  margin: 0 30px;
  height: 680px;
  width: 800px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 30px;
}

.email_stage {
  justify-content: center;
  padding: 20px;
  border-radius: 30px;
  display: flex;
  width: 500px;
  height: 750px;
  background: url("../assets/image/feedback_stage/stage_background.png") no-repeat 50%/cover;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

</style>