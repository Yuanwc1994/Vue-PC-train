<template>
  <div class="v-header">
    <div class="header-wrapper">
      <router-link to="/"><img src="../../assets/logo.png" width="50" height="50"></router-link>
      <div class="login-wrapper">
        <span>登录</span> |
        <span>注册</span> |
        <span>关于</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-header',
    data() {
      return {}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
  .v-header {
    width: 100%;
    background-color: #363636;
    .header-wrapper {
      width: 1000px;
      height: 90px;
      margin: 0 auto;
      img {
        vertical-align: middle;
        margin: 20px 0;
      }
      .login-wrapper {
        vertical-align: middle;
        float: right;
        color: #b2b2b2;
        margin: 35px 0;
        span {
          font-size: 14px;
          cursor: pointer;
        }
        a {
          color: #b2b2b2;
          text-decoration: none;
        }
      }
    }
  }
</style>
