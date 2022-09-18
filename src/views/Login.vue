<template>
  <div class="login">
    <div class="box">
      <h1>Login Form</h1>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-user-solid"
        v-model="from.username"
      >
      </el-input>
      <el-input
        placeholder="密码"
        prefix-icon="el-icon-lock"
        v-model="from.password"
        show-password
      >
      </el-input>
      <el-button type="primary" @click="login">Login</el-button>
      <el-alert
        title="密码或者账号错误"
        type="error"
        center
        show-icon
        v-show="flag"
      ></el-alert
      >;
    </div>
  </div>
</template>
<script>
import { querylogin } from "../utils/index";
export default {
  data() {
    return {
      from: {
        username: "",
        password: "",
      },
      flag: false,
    };
  },
  methods: {
    login() {
      querylogin(this.from).then((res) => {
        console.log(res.data);
        if (res.data.code == 20000) {
          localStorage.setItem("token", res.data.data.token);
          this.$message({
            message: "恭喜你登陆成功",
            type: "success",
          });
          this.$router.push("/");
        }else{
            this.$message({
            message: "登陆失败",
            type: "error",
          });
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  .box {
    width: 500px;
    height: 500px;
    margin: auto;
    padding-top: 100px;
  }
}
.el-input {
  margin-top: 40px;
}
h1 {
  text-align: center;
  color: #fff;
}
:deep .el-input__inner {
  background-color: #2d3a4b;
  border: 1px solid #3a4554;
  color: #fff;
}
.el-button {
  width: 500px;
  height: 40px;
  margin-top: 20px;
}
</style>