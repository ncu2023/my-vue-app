<!-- datepicker-next: https://github.com/mengxiong10/vue-datepicker-next -->
<template>
    <div class="container-backstage">
        <h1 class="title">系統管理</h1>

        <section>
            <h3>設定倒計時的時間</h3>
            <date-picker v-model:value="value4" type="datetime" value-type="timestamp" placeholder="選擇日期時間"></date-picker>
        </section>
        <el-button class="send-btn" type="success" @click="onSave()">儲存</el-button>
    </div>
</template>

<script>
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import axios from 'axios';
import { ElMessage } from 'element-plus'

export default {
    components: { DatePicker },
    data() {
        return {
            value4: null,
        };
    },
    methods: {
        onSave() {
            if(this.value4 == null) {
                ElMessage.warning('請先選擇日期時間');
                return;
            }
            console.log(this.value4);
            axios.put('http://localhost:8080/v1/countdown', { countdown: this.value4 })
                .then((response) => {
                    // 打API成功
                    if (response.status == 200 && response.data.code == 0) {
                        ElMessage.success('設定deadline成功');
                    } else {
                        ElMessage.error('設定deadline失敗');
                    }
                });

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