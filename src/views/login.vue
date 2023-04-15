<template>
  <div class="login-wrap">
    <div class="ms-title">动态表单设计系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" label-width="0px" ref="domRuleForm">
        <el-form-item prop="userName">
          <el-input placeholder="请输入用户名" v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input
            @keyup.enter.native="submitForm()"
            placeholder="请输入密码"
            type="password"
            v-model="ruleForm.passWord"
          ></el-input>
        </el-form-item>
        <p style="color: #999; font-size: 12px; margin: -10px 0 10px 0">用户名密码随意输入即可</p>
        <div class="login-btn">
          <el-button @click="submitForm()" type="primary">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import Utils from '@/utils/index';
import { reactive, ref } from 'vue';
import router from '@/router';

let domRuleForm = ref(null);

const ruleForm = reactive({
  userName: '',
  passWord: '',
});
const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

function submitForm() {
  domRuleForm &&
    domRuleForm.value.validate(valid => {
      if (valid) {
        Utils.setLStorage('loanuser', { username: ruleForm.userName });
        router.push('/home');
      } else {
        return false;
      }
    });
}

let userInfo = Utils.getLStorage('loanuser', true);
if (userInfo) {
  ruleForm.userName = userInfo.username;
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: #324157;
}

.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 30px;
  color: #fff;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
}
</style>
