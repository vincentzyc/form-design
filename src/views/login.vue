<template>
  <div class="login-wrap">
    <div class="ms-title">动态表单设计系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
        <el-form-item prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.passWord" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <p style="color:#999;font-size:12px;margin:-10px 0 10px 0">用户名密码随意输入即可</p>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      nextUrl: "",
      ruleForm: {
        userName: "",
        passWord: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$util.setLStorage("loanuser", { username: this.ruleForm.userName }, true);
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    let userInfo = this.$util.getLStorage("loanuser", true);
    if (userInfo) {
      this.ruleForm.userName = userInfo.username;
    }
  }
};
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
