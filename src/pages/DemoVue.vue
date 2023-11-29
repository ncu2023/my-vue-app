<!-- Vue Flip Countdown元件: https://github.com/coskuncay/vue3-flip-countdown?ref=madewithvuejs.com -->
<template>
    <div class="container-demo-vue">
        <h1 class="title">black FRIDAY</h1>
        <Countdown deadline="2023-12-20 14:00:00" 
            countdownSize="6rem" labelSize="2.4em"
            mainColor="#ffffff" secondFlipColor="#ffff00"
            mainFlipBackgroundColor="#777700" secondFlipBackgroundColor="#007777"
            @timeElapsed="onTimeElapsed()" />

    </div>
</template>

<script>
import {Countdown} from 'vue3-flip-countdown'
export default {
    components: {
        Countdown
    },
    methods: {
        onTimeElapsed() {
            alert('結訓了');
        }
    },
    mounted() {
        // 打API
    }
}
</script>

<style scoped>
.container-demo-vue {
    width: 100%;
    height: 100vh;
}

.title {
    font-size: 6em;
    margin: 0.1em 0;
    padding: 0.2em 0 0;
    font-weight: 700;
    text-shadow: rgba(17,17,17,.5) 10px 10px 20px;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins,sans-serif;
}
</style>