<template>
  <div class="v-footer">
    <div class="footer-wrapper">
      <span>&copy; 2019 yuanwenchao MIT</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'v-footer',
    data() {
      return {}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
  .v-footer {
    width: 100%;
    background-color: #e3e4e8;
    .footer-wrapper {
      width: 1000px;
      height: 80px;
      line-height: 80px;
      margin: 0 auto;
      text-align: center;
      color: #444444;
      font-size: 14px;
    }
  }
</style>
