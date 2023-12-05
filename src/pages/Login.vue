<template>
  <div class="body">
    <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
      <span></span> <span></span> <span></span> <span></span> <span></span>

      <div class="signin">
        <div class="content">
          <h2>健行拍賣網</h2>
          <div class="form">
            <div class="inputBox">
              <!-- 綁定username變數給input -->
              <input v-model="username" type="text" name="username" required> <i>帳號</i>
            </div>
            <div class="inputBox">
              <!-- 綁定password變數給input -->
              <input v-model="password" type="text" name="code" required> <i>密碼</i>
            </div>
            <div v-if="isShowLoginError" class="login-failed">登入失敗</div>
            <div class="links"> <a href="#">忘記密碼</a> <a href="#">註冊</a>
            </div>
            <div class="inputBox">
              
              <!-- <input type="submit" value="登入" @click="login()"> -->
              <MyButtonNo1 message="登入" @on10Times="login($event)" />

              <!-- gogole 登入 -->
              <div id="signinDiv"></div>
              
            </div>
          </div>
        </div>
      </div>

    </section> <!-- partial -->
  </div>
</template>

<script>
import axios from 'axios';
import MyButtonNo1 from '../components/MyButtonNo1.vue';
import { ElMessage } from 'element-plus'
import { jwtDecode } from "jwt-decode"

export default {
  data() {
    return {
      count: 0,
      message: "Hello Vue!",
      test: "Aaron",
      username: "",
      password: "",
      isShowLoginError: false,
    };
  },
  // Vue要使用的方法
  methods: {
    testClick() {
      // alert('Hi Vue');
      this.test = "Andy";
    },
    // 登入用的方法
    login($event) {
      console.log('子元件傳來的資料: ' + $event);

      // alert('Login');
      console.log("Login"); // System.out.println()
      console.log("username=" + this.username);
      console.log("password=" + this.password);
      // 串接登入API
      axios.get("http://localhost:8080/login?username=" + this.username + "&password=" + this.password)
        .then((response) => {
          console.log(response);
          // 處理API的回應
          if (response.status == 200) {
            console.log("呼叫API成功");
            if (response.data.code > 0) { // 登入失敗
              console.log("登入失敗:" + response.data.message);
              this.isShowLoginError = true;

              // 彈出登入失敗的toast
              ElMessage.error('登入失敗');
            }
            else {
              console.log("登入成功");
              location.href = "/product?username=" + this.username; // 跳轉網頁
            }
          }
        });
    }
  },
  components: { MyButtonNo1 },
  mounted() {
      // 官方文件: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid?hl=en
      google.accounts.id.initialize({
        client_id: '108299712597-8tmajmgmcpcc8d027l0a6vj1o3reumss.apps.googleusercontent.com',
        callback: (response) => {
          console.log(response.credential);

          // 解碼憑證
          const decoded = jwtDecode(response.credential);

          const jwtStr = JSON.stringify(decoded, null, 4);
          console.log(jwtStr);

          // 幫使用者自動註冊API
          axios.post('http://localhost:8080/v1/account', {
            name: decoded.name,
            code: decoded.sub,
            email: decoded.email,
            phone: '',
          }).then((response) => {
            if(response.status == 200 && response.data.code == 0)  { // 登入成功
              // 跳轉商品頁
              location.href = "/product?username=" + this.username; // 跳轉網頁
            } else {
              ElMessage.error('登入失敗');
            }
          });
        }
      });
      google.accounts.id.prompt();
    
    google.accounts.id.renderButton(document.getElementById("signinDiv"), {
      theme: 'outline',
      size: 'large',
      width: '250px',
      click_listener: onClickHandler
    });

    function onClickHandler(){
      console.log("Sign in with Google button clicked...")
    }
    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #000;
  padding: 0;
  gap: 0;
  margin: 0;
}

section {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(#000, #0f0, #000);
  animation: animate 5s linear infinite;
}

@keyframes animate {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

section span {
  position: relative;
  display: block;
  width: calc(6.25vw - 2px);
  height: calc(6.25vw - 2px);
  background: #181818;
  z-index: 2;
  transition: 1.5s;
}

section span:hover {
  background: #0f0;
  transition: 0s;
}

section .signin {
  position: absolute;
  width: 400px;
  background: #222;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 9);
}

section .signin .content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
}

section .signin .content h2 {
  font-size: 2em;
  color: #0f0;
  text-transform: uppercase;
}

section .signin .content .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section .signin .content .form .inputBox {
  position: relative;
  width: 100%;
}

section .signin .content .form .inputBox input {
  position: relative;
  width: 100%;
  background: #333;
  border: none;
  outline: none;
  padding: 25px 10px 7.5px;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 1em;
}

section .signin .content .form .inputBox i {
  position: absolute;
  left: 0;
  padding: 15px 10px;
  font-style: normal;
  color: #aaa;
  transition: 0.5s;
  pointer-events: none;
}

.signin .content .form .inputBox input:focus~i,
.signin .content .form .inputBox input:valid~i {
  transform: translateY(-7.5px);
  font-size: 0.8em;
  color: #fff;
}

.signin .content .form .links {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.signin .content .form .links a {
  color: #fff;
  text-decoration: none;
}

.signin .content .form .links a:nth-child(2) {
  color: #0f0;
  font-weight: 600;
}

.signin .content .form .inputBox input[type="submit"] {
  padding: 10px;
  background: #0f0;
  color: #000;
  font-weight: 600;
  font-size: 1.35em;
  letter-spacing: 0.05em;
  cursor: pointer;
}

input[type="submit"]:active {
  opacity: 0.6;
}

@media (max-width: 900px) {
  section span {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}

@media (max-width: 600px) {
  section span {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
  }
}

.login-failed {
  color: red;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -10px;
}

.inputBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
}
</style>