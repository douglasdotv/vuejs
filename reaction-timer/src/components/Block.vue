<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <p class="block-text">Click me!</p>
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            this.$emit('game-over', this.reactionTime)
        }
    }
}
</script>

<style scoped>
.block {
    width: 200px;
    height: 200px;
    background-color: navy;
    margin: 0 auto;
    margin-top: 100px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.block-text {
    color: white;
    text-align: center;
    padding-top: 80px;
    font-size: 20px;
    font-weight: bold;
}
</style>