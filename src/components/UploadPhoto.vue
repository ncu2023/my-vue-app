<template>
    <div class="container">
        <div class="upload-photo-container" @dragover.prevent="" @drop.prevent="onDrop($event)">
            <div v-if="isShowPreview" class="preview-container">
                <img class="preview-image" src="/src/assets/photo.png" ref="previewImg" />
            </div>

            <img v-if="isShowPreview" src="/src/assets/close.png" 
                class="close-btn" @click="isShowPreview = false, selectedFile = null"/>

            <div class="title-group">
                <img src="/src/assets/upload.png" class="title-img" />
                <div class="title-text">選擇圖片或拖曳至此處</div>
            </div>
            <div class="title-text-des">僅限PNG圖檔</div>
            <!-- 選檔案的按鈕 -->
            <label>
                <div class="select-file-btn">選擇檔案</div>
                <input type="file" @change="onFileChange($event)" class="input-btn" accept="image/png,image/jpeg">
            </label>
        </div>

        <div v-if="isShowWarning" class="warning-msg">請先選取檔案</div>
        <div class="upload-btn" @click="onUpload()">上傳</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            selectedFile: null,
            isShowWarning: false,
            isShowPreview: false,
        }
    },
    methods: {
        onPreview(file) {
            this.isShowPreview = true;
            
            // 把選擇的照片顯示到img標籤
            // const preview = document.querySelector(".preview-image");
            
            // preview.src = URL.createObjectURL($event.target.files[0]);

            this.$nextTick(() => {
                this.$refs.previewImg.src = URL.createObjectURL(file);
            });
        },
        onFileChange($event) {
            // 將使用者選擇的檔案存到變數
            this.selectedFile = $event.target.files[0];
            console.log($event.target.files[0].name);

            this.onPreview($event.target.files[0]);
        },
        onUpload() {
            if(this.selectedFile == null) {
                this.isShowWarning = true;
                return;
            }

            // 準備資料
            const formData = new FormData();
            // 這個files名稱必須跟後端接收參數時設定的名字一樣，否則後端會收不到資料
            formData.append('files', this.selectedFile);

            // 定義API header
            const header = {
                'Content-Type': 'multipart/form-data'
            }

            // 呼叫API
            axios.post('http://localhost:8080/file', formData, {}, header)
                .then((response) => {
                    console.log(response);
                });
        },
        onDrop($event) {
            this.selectedFile = $event.dataTransfer.files[0];
            console.log($event.dataTransfer.files);

            this.onPreview($event.dataTransfer.files[0]);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.upload-photo-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    align-items: center;
    justify-content: center;

    width: 350px;
    height: 200px;
    
    /* background-color: aquamarine; */
    border: 4px dashed #1C7293;
    border-radius: 15px;
}

.upload-btn {
    margin-top: 10px;
    background-color: #1C7293;
    border-radius: 5px;
    color: beige;
    cursor: pointer;
    padding: 5px;
    box-shadow: 2px 2px 10px 2px #222222;
}

.warning-msg {
    color: red;
}

.select-file-btn {
    border: 2px solid #1C7293;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1C7293;
    border-radius: 5px;
    cursor: pointer;
}

.input-btn {
    display: none;
}

.preview-container {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
}
.preview-image {
    width: 100%;
    height: 100%;
}

.close-btn {
    position: absolute;
    width: 32px;
    height: 32px;
    right: -16px;
    top: -16px;
    cursor: pointer;
}

.title-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.title-img {
    width: 32px;
    height: auto;
}

.title-text {
    color: white;
}

.title-text-des {
    margin-top: -20px;
    color: #1C7293;
    font-size: 0.6em;
}
</style>