<!-- datepicker-next: https://github.com/mengxiong10/vue-datepicker-next -->
<template>
    <div class="container-backstage">
        <h1 class="title">系統管理</h1>
        
        <section>
            <h3>設定倒計時的時間</h3>
            <date-picker v-model:value="value4" type="datetime" placeholder="Select datetime"></date-picker>
        </section>
        <el-button class="send-btn" type="success" @click="onSave()">儲存</el-button>
    </div>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

export default {
    components: { DatePicker },
    data() {
        return {
            value4: null,
        };
    },
    methods: {
        onSave() {
            console.log(this.value4);
            // 打API
        }
    }
}

</script>

<style scoped>
.container-backstage {
    width: 100%;
    height: 100vh;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 6em;
    margin: 0.1em 0;
    padding: 0.2em 0 0;
    font-weight: 700;
    text-shadow: rgba(17, 17, 17, .5) 10px 10px 20px;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins, sans-serif;
}

.send-btn {
    width: 150px;
}
</style>