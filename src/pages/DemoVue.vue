<!-- Vue Flip Countdown元件: https://github.com/coskuncay/vue3-flip-countdown?ref=madewithvuejs.com -->
<template>
    <div class="container-demo-vue">
        <Countdown deadline="2023-11-29 9:56:30" @timeElapsed="onTimeElapsed()" />

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
            alert('時間到');
        }
    }
}
</script>

<style scoped>
.container-demo-vue {
    background-color: aquamarine;
    width: 100%;
    height: 100vh;
}
</style>