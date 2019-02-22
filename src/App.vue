<template>
  <div id="App">
    <v-header></v-header>
    <div class="v-content">
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHeader from 'components/header/header';
  import VFooter from 'components/footer/footer';

  export default {
    name: 'App',
    components: {
      VHeader, VFooter
    }
  };
</script>

<style lang="scss" type="text/css">
  html,body {
    width: 100%;
    background-color: #f0f2f5;
    color: #444;
    font-size: 14px;
  }

  #App {
    .v-content {
      width: 1000px;
      margin: 0 auto;
      min-height: 813px;
      .fade-enter-active,.fade-leave-active {
        opacity: 0;
        background-color: rgba(7, 17, 27, 0);
      }
      .fade-transition {
        opacity: 1;
        background-color: rgba(7, 17, 27, 0.8);
      }
    }
  }
</style>
