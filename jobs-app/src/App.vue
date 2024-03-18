<template>
  <div class="home-nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </div>

  <router-view />

  <div class="dev-info">
    <h2>Router navigation demo:</h2>
    <button @click="redirectToJobs">Redirect to Jobs</button>
    <button @click="back">Back</button>
    <button @click="forward">Forward</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    redirectToJobs() {
      this.$router.push({ name: 'jobs' });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    }
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
  max-width: 960px;
  margin: 0 auto;
}

.home-nav {
  padding: 30px;
}

.home-nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

.home-nav a.router-link-exact-active {
  color: white;
  background: navy;
}

.dev-info {
  margin-top: 50px;
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 12px;
  color: navy;
  background: #f4f4f4;
  border: 1px solid #ccc;
}

.dev-info button {
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid orange;
  border-radius: 5px;
  color: orange;
  background: navy;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
</style>
