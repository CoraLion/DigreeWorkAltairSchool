<template>
  <router-view></router-view>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

.btn {
  transition: all .3s;
  width: 100px;
  height: 50px;
  color: white;
  background: #2f5585;
  font-size: 30px;
  border-radius: 20px;
  margin: 0 10px;
}

.btn:hover {
  background: #26446b;
  color: #e0e0e0;
  border-radius: 30px;
  cursor: pointer;
}

.btn:active {
  box-shadow: #05163d 5px 5px 5px;
}

router-link {
  all: unset
}

* {
  font-variant: small-caps;
}

.header_all {
  margin: 0 0 33px; font-size: 32px; text-shadow: black 5px 5px 5px;
  line-height: 3rem;
}

.header_block {
  margin: 5px 0 20px; font-size: 23px; text-shadow: black 5px 5px 5px;
}

.header_small {
  margin: 10px 0; font-size: 20px; text-shadow: black 5px 5px 5px; line-height: 1.5rem;
}

.submit {
  display: flex;
  transition: all .3s;
  width: 100px;
  height: 50px;
  color: white;
  background: #2f5585;
  font-size: 15px;
  border-radius: 20px;
  margin: 10px 0;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.submit:hover {
  background: #26446b;
  color: #e0e0e0;
  border-radius: 30px;
}

input {
  border: none; outline: none;
}

button {
  border: none; outline: none;
}

h1 {
  text-decoration: none;
  margin: 0 25px;
  text-align: center;
  color: #ffffff;
  font-variant: small-caps;
  font-size: 55px;
}

ul {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial, "Bank Gothic Light BT", Helvetica, sans-serif;
  scroll-behavior: smooth;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  background: #091326;
  overflow-x: hidden;
  max-width: 100%;
  color: #fff;
  text-align: center;
}

*, :after, :before {
  list-style-type: none;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

@media screen {
  .btn {
    align-items: center;
  }
}
</style>
