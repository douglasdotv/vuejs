<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>

  <div>
    <input type="text" ref="name">
    <button @click="handleClick">Click me</button>
  </div>

  <teleport to=".modals" v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">Learn more</a>
      </template>
      <h1>{{ giveawayHeader }}</h1>
      <p>{{ giveawayContent }}</p>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>{{ newsletterHeader }}</h1>
      <p>{{ newsletterContent }}</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">Show giveaway modal</button>
  <button @click="toggleModalTwo">Show newsletter modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      giveawayHeader: 'Giveaway!',
      giveawayContent: 'Grab this for half price!',
      newsletterHeader: 'Subscribe to our newsletter',
      newsletterContent: 'Get the latest news and offers',
      theme: 'sale',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      alert('Hello, ' + this.$refs.name.value)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
  color: #2c3e50;
}
</style>
