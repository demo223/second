<template>
  <div id="login-container">
    <!-- <div slot="header" id="login-title">
      <h1>实用校园二手物品淘宝交易系统</h1>
    </div> -->
    <div class="login-left">
      <span>图片</span>
      <!-- <img class="img-left" src="@/assets/img/left.png" /> -->
    </div>
    <div class="login-right">
      <h2 class="title">实用校园二手物品淘宝交易系统</h2>
      <el-form ref="loginForm" class="loginForm" :model="loginForm" label-position="left">
        <el-form-item prop="userName">
          <el-input
            v-model="loginForm.userName"
            placeholder="请输入用户名/学号"
            maxlength="18"
            prefix-icon="el-icon-user-solid"
            style="width: 70%"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="请输入账号密码"
            maxlength="18"
            prefix-icon="el-icon-lock"
            style="width: 70%"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <div class="form-text">
              <!-- <h4>忘记密码</h4> -->
              <el-link @click="forgotPassword">忘记密码</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="form-btn">
            <el-button type="primary" @click="logon">注册</el-button>
            <el-button type="primary" @click="login">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { GET, POST } from "@/api/http.js";
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    logon() {},
    login() {},
    forgotPassword() {},
  },
}
</script>

<style lang="less" scoped>
#login-container {
  width: 50%;
  display: flex;
  margin-top: 8%;
  margin-left: 20%;
  justify-content: center;
  // border: 1px solid red;
  .login-left {
    width: 40%;
    background-color: skyblue;
    border-radius: 3% 0 0 3%;
  }
  .login-right {
    padding-top: 2%;
    padding-left: 2%;
    width: 60%;
    background-color: pink;
    border-radius: 0 3% 3% 0;
    .title {
      margin-top: 4%;
      text-align: center;
    }
    .loginForm {
      margin-top: 20%;
      // margin-left: 10%;
      text-align: center;
      .form-text{
        line-height: 2em;
      }
      .form-btn {
        margin-top: 2%;
        margin-left: 15%;
        margin-right: 15%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
