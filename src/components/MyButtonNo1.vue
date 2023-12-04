<template>
    <button class="btn" @click="count()">{{ message }}</button>
</template>

<script>
export default {
    props: [
        "message"
    ],
    data() {
        return {
            times: 0,
        }
    },
    methods: {
        count() {
            this.times++;
            
            console.log(this.times);

            if(this.times >= 1) {
                // 通知父元件我被點擊10次
                this.$emit('on10Times', 9999);
            }
        }
    }

}
</script>

<style scoped>
.btn {
    color: yellow;
    background-color: black;
    width: 250px;
    height: 50px;
}

</style>