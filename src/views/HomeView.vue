<template>
  <div class="home">
    <el-container>
      <el-aside :width="flag ? '200px' : '50px'">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/index">
            <i class="el-icon-setting"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-submenu
            :index="item.path"
            v-for="(item, index) in list"
            :key="index"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group v-for="(each, i) in item.children" :key="i">
              <el-menu-item :index="each.path">{{ each.title }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="df">
          <div class="top">
            <i class="el-icon-s-fold" @click="change"></i>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div>
            <p>
              欢迎管理员：admin
              <img
                src="https://p3-passport.byteimg.com/img/mosaic-legacy/3795/3047680722~64x64.awebp"
                alt=""
              />
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item ><span @click="goout">退出</span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
          </div>
        </div>

        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { aside } from "../utils/index";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      list: {},
      flag: true,
    };
  },
  methods: {
    change() {
      this.flag = !this.flag;
    },
    goout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  created() {
    aside().then((res) => {
      this.list = res.data.data.permissionList;
      console.log(this.list);
    });
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.df {
  display: flex;
  justify-content: space-between;
}
.top {
  display: flex;
  align-items: center;
}
.el-aside {
  background-color: #304156;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100vh;
}
</style>