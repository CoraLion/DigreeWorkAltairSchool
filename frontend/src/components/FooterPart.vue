<template>
  <footer class="footer">
    <div class="footer_stage">
      <ul class="footer_ul">
        <li class="footer_li">
          Соціальні
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img class="footer_li_img" src="../assets/1.png" alt="instagram"/>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/">
            <img class="footer_li_img" src="../assets/2.png" alt="tiktok"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <img class="footer_li_img" src="../assets/3.png" alt="twitter"/>
          </a
          ></li>
        <li class="footer_li">
          мережі
        </li>
      </ul>
      <div>
        CopyRight
        <strong>AltairComplex.com</strong>
        @2022
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPart"
}
</script>

<style scoped>

.footer {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: url("../assets/footer_bar.png") no-repeat 50%/cover;
}

.footer_stage {
  max-width: 1480px;
  width: 100%;
  margin: 0 auto;
  height: 100px;
}

.footer_ul {
  justify-content: center;
  display: flex;
  align-items: center;
  padding-bottom: 7px;
}

.footer_li {
  display: flex;
  font-size: 17.5px;
  margin: 30px 40px 0 40px;
  text-align: center;
  transition: color .3s;
}

.footer_li:hover {
  color: #4aa181;
}

.footer_li_img {
  margin: 20px 30px 0 30px;
  height: 50px;
  width: 50px;
}
</style>