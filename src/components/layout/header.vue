<template>
  <div class="flex header-wrap">
    <div class="logo align-self-middle">管理系统模板</div>
    <div class="flex flex-auto justify-end">
      <el-dropdown trigger="click" class="flex dropdown align-middle" placement="bottom">
        <span class="el-dropdown-link">
          <strong>{{username}}</strong>
          <i class="el-icon-caret-bottom drop-icon"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="changePass()">修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="loginout()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Hello World"
    };
  },
  computed: {
    username() {
      let userInfo = this.$api.getLStorage("loanuser", "decode");
      return userInfo ? userInfo.username : this.name;
    }
  },
  methods: {
    changePass() {},
    loginout() {
      window.localStorage.removeItem("loanuser");
      this.$router.replace("/login");
    }
  }
};
</script>

<style scoped>
.header-wrap {
  height: 100%;
}
.logo {
  padding: 0 30px;
  text-align: center;
}
.dropdown {
  height: 100%;
  padding: 0 30px;
  background: #eee;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>


