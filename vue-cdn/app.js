const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'Some title',
      author: 'Some author',
      age: 100,
    }
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
  },
})

app.mount('#app')
