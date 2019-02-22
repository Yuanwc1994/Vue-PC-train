<template>
   <div class="product" v-if="prod">
    <p class="name">{{prod.name}}</p>
    <ul>
      <li v-for="(item, index) in prod.list" :key="index" class="item">
        <a :href="item.url">{{item.text}}</a>
        <i v-if='item.type == true' class="hot">HOT</i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'product',
    props: {
      prod: {
        type: Object
      }
    },
    data() {
      return {}
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
  .product {
    padding: 0 16px 4px;
    .name {
      padding: 22px 0;
      font-weight: bold;
      font-size: 14px;
    }
    .item {
      padding-left: 4px;
      margin-bottom: 12px;
      line-height: 14px;
      font-size: 14px;
      a {
        color: #444444;
        text-decoration: none;
        &:hover { color: #d21e2f;}
      }
      .hot {
        display: inline-block;
        text-align: center;
        width: 36px;
        height: 14px;
        line-height: 14px;
        font-size: 10px;
        color: #fff;
        background-color: #c04fb1;
      }
    }
  }
</style>
