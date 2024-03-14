const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          id: 1,
          title: 'Book 1',
          author: 'Author 1',
          cover: 'assets/1.jpg',
          isFav: true,
        },
        {
          id: 2,
          title: 'Book 2',
          author: 'Author 2',
          cover: 'assets/2.jpg',
          isFav: false,
        },
        {
          id: 3,
          title: 'Book 3',
          author: 'Author 3',
          cover: 'assets/3.jpg',
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
      if (e.type === 'mousemove') {
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    },
  },
})

app.mount('#app')
