<template>
  <div class="body">
    <div class="toast" v-if="isShowToast">{{ toastMessage }}</div>
    <div class="add-btn" @click="isShowForm = true">
      <img src="/src/assets/plus.svg" style="width: 100%;" />
    </div>
    
    <div class="bg">
      <h1>歡迎{{ username }}</h1>
    </div>
    <div class="nav-bar">
      <button type="text" class="submit" @click="isShowForm = true">新增商品</button>
    </div>
    
    <div class="container">
      <!-- 卡片資料 -->
      <div v-for="p in data" class="nft">
        <div class='main'>
          <img class='tokenImage' :src="p.photoUrl" alt="NFT" />
          <h2>{{ p.title }}</h2>
          <p class='description'>{{ p.description }}</p>
          <div class='tokenInfo'>
            <div class="price">
              <ins>$</ins>
              <p>{{ p.price }}</p>
            </div>
            <!-- <div class="duration">
              <ins>◷</ins>
              <p>11 days left</p>
            </div> -->
          </div>
          <hr />
          <div class='creator'>
            <div class='wrapper'>
              <img :src="p.storeUrl" alt="Creator" />
            </div>
            <p><ins>{{ p.storeName }}</ins></p>
          </div>
        </div>
      </div>

    </div>

    <el-pagination
        style="margin: 50px; z-index: 1;"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[3, 9, 15, 30]"
        :small="false"
        :background="true"
        :disabled="false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange()"
        @current-change="handleCurrentChange()"
      />  

    <div class="mask" v-if="isShowForm"></div>

    <!-- 輸入用彈出式表單 -->
    <div class="form" v-if="isShowForm">
      <div class="title">新增商品</div>
      <!-- <div class="subtitle">Let's create your account!</div> -->
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " v-model="newProduct.photoUrl" />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">商品圖片位置</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " v-model="newProduct.title" />
        <div class="cut cut-short"></div>
        <label for="lastname" class="placeholder">商品名稱</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " v-model="newProduct.description" />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">商品描述</label>
      </div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " v-model="newProduct.price" />
        <div class="cut cut-short"></div>
        <label for="firstname" class="placeholder">商品價格</label>
      </div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " v-model="newProduct.storeUrl" />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">商店圖片位置</label>
      </div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " v-model="newProduct.storeName" />
        <div class="cut cut-short"></div>
        <label for="firstname" class="placeholder">商店名稱</label>
      </div>
      <div class="btn-group">
        <button type="text" class="submit" @click="isShowForm = false">取消</button>
        <button type="text" class="submit" @click="onSend()">確定</button>
      </div>
    </div>  
  </div>
  
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      // 分頁用的變數
      currentPage: 1,
      pageSize: 3,

      username: '',
      toastMessage: '',
      isShowToast: false,
      isShowForm: false, // 控制新增表單是否要出現

      // 新增商品用的資料結構
      newProduct: {
        photoUrl: '',
        title: '',
        description: '',
        price: 0,
        storeUrl: '',
        storeName: '',
      },
      // 存放商品資訊
      data: []
    }
  },
  // Vue要使用的方法
  methods: {
    handleSizeChange($event) {
      console.log('handleSizeChange');
      console.log($event);

      // 更新商品卡片
      this.fetchProduct();
    },
    // 切換商品分頁
    handleCurrentChange($event) {
      console.log('handleCurrentChange');
      console.log($event);

      // 更新商品卡片
      this.fetchProduct();
    },
    uploadFile(event) {
      console.log(event.target.files);
      this.$refs.preview.src = URL.createObjectURL(event.target.files[0]);
    },
    // 送出要新增的商品資料
    onSend() {
      axios.post('http://localhost:8080/product', this.newProduct)
        .then((response) => {
          // 打API成功
          if(response.status == 200 && response.data.code == 0) {
            // alert('新增資料成功');
            this.showToast('新增資料成功');
            
            // 將新增的資料丟給畫面顯示
            this.data.push(JSON.parse(JSON.stringify(this.newProduct)));
          } else {
            alert('新增資料失敗');
          }
        });
      // 隱藏對話框
      this.isShowForm = false;
    },
    showToast(msg) {
      this.isShowToast = true;
      this.toastMessage = msg;

      setTimeout(() => {
        this.isShowToast = false;
      }, 2000);
    },
    fetchProduct() {
      // 打API要商品資訊
      axios.get('http://localhost:8080/v2/product?limit=' + this.pageSize + '&offset=' 
                + ((this.currentPage - 1) * this.pageSize) + '&sortMode=0')
        .then((response) => {
          // 處理API的response
          console.log(response);

          if(response.status == 200) { // API呼叫成功 
            if(response.data.code == 0)  // 取的資料成功
              this.data = response.data.data; // 將商品資訊存到變數內
            else
              this.data =[];  // 清空資料
          }
        });
    }
  },
  // 這個方法會網頁載入完畢後會自動被呼叫
  mounted() {
    // 取得網址列參數
    const queryString = window.location.search;
    // 解析參數列
    const parameters = new URLSearchParams(queryString);
    // 取得使用者名稱
    this.username = parameters.get('username');

    // 更新商品卡片
    this.fetchProduct();
  }
}
</script>

<style scoped>
.body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #161418;
  color: #eee;
  user-select: none;

  align-items: center;
  background-color: #000;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* height: 100vh; */
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

.nft {
  user-select: none;
  max-width: 300px;
  min-width: 300px;
  margin: 1rem auto;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, #282c34 0%, rgba(17, 0, 32, 0.5) 100%);
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  align-self: flex-start;
  justify-self: flex-start;
}
.nft hr {
  width: 100%;
  border: none;
  border-bottom: 1px solid #88888855;
  margin-top: 0;
}
.nft ins {
  text-decoration: none;
}
.nft .main {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 1rem;
}
.nft .main .tokenImage {
  border-radius: 0.5rem;
  max-width: 100%;
  height: 250px;
  object-fit: cover;
}
.nft .main .description {
  margin: 0.5rem 0;
  color: #a89ec9;
}
.nft .main .tokenInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nft .main .tokenInfo .price {
  display: flex;
  align-items: center;
  color: #ee83e5;
  font-weight: 700;
}
.nft .main .tokenInfo .price ins {
  margin-left: -0.3rem;
  margin-right: 0.5rem;
}
.nft .main .tokenInfo .duration {
  display: flex;
  align-items: center;
  color: #a89ec9;
  margin-right: 0.2rem;
}
.nft .main .tokenInfo .duration ins {
  margin: 0.5rem;
  margin-bottom: 0.4rem;
}
.nft .main .creator {
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
  margin-bottom: -0.3rem;
}
.nft .main .creator ins {
  color: #a89ec9;
  text-decoration: none;
}
.nft .main .creator .wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #ffffff22;
  padding: 0.3rem;
  margin: 0;
  margin-right: 0.5rem;
  border-radius: 100%;
  box-shadow: inset 0 0 0 4px #000000aa;
}
.nft .main .creator .wrapper img {
  border-radius: 100%;
  border: 1px solid #ffffff22;
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  margin: 0;
}
.nft ::before {
  position: fixed;
  content: "";
  box-shadow: 0 0 100px 40px #ffffff08;
  top: -10%;
  left: -100%;
  transform: rotate(-45deg);
  height: 60rem;
  transition: 0.7s all;
}
.nft:hover {
  border: 1px solid #ffffff44;
  box-shadow: 0 7px 50px 10px #000000aa;
  transform: scale(1.015);
  filter: brightness(1.3);
}
.nft:hover ::before {
  filter: brightness(0.5);
  top: -100%;
  left: 200%;
}

.bg {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.bg h1 {
  font-size: 20rem;
  filter: opacity(0.5);
}

.container {
  display: flex;
  gap: 10px;
  margin: 10px;
  flex-wrap: wrap;
}

/* form css */
body {
  
}

.form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 320px;
  position: fixed;
  top: 50px;
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
}

.input-container {
  height: 40px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin-top: 20px;
}

.ic2 {
  margin-top: 20px;
}

.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 79px;
}

.cut-short {
  width: 60px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 35px;
  transition: transform 200ms, color 200ms;
  top: 15px;
  font-size: 0.8em;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: #08d;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 40px;
  margin-top: 20px;
  /* outline: 0;  */
  text-align: center;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.submit:active {
  background-color: #06b;
}


.btn-group {
  display: flex;
  gap: 20px;
}

.nav-bar {
  width: 200px;
  align-self: flex-end;
  margin-right: 20px;
}

.mask {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000a;
}

.add-btn {
  width: 50px;
  height: 50px;
  max-height: 50px;
  max-width: 50px;
  background-color:#06b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  padding: 0;
  /* padding-bottom: 2px; */
  text-decoration: none;
  gap: 0;
  border: 0;
  
  border-radius: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;

  z-index: 1;
}

.add-btn:hover {
  background-color: #08d;
}

.toast {
  background-color: #00aa00;
  width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  position: fixed;
  top: 10px;
  z-index: 5;
}
.pagination-block {
  width: 500px;
  height: 100px;
  background-color: #00aa00;
}
</style>
