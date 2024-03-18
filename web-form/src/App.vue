<template>
  <SignupForm />
  <img class="logo" alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import SignupForm from './components/SignupForm.vue';

export default {
  name: 'App',
  components: {
    SignupForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background: #f2f2f2;
}

.logo {
  margin: 40px 0 20px;
  width: 100px;
  height: 100px;
}
</style>
