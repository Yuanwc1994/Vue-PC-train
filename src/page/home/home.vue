<template>
  <div class="home clearfix">
    <div class="menu-wrapper">
      <div class="prod-wrapper">
        <p class="title">{{prod.title}}</p>
        <v-product :prod="prod.PC" class="border-1px"></v-product>
        <v-product :prod="prod.MB"></v-product>
      </div>
      <div class="prod-wrapper">
        <p class="title">{{news.title}}</p>
        <ul class="new-list">
          <li v-for="(item, index) in news.list" :key="index" class="item">
            <a :href="item.url">{{item.text}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-wrapper">
      <carousel :perPage="1" autoplay :autoplayTimeout="5000" :navigationEnabled="true" paginationColor="#fff" paginationPosition="bottom-overlay" :centerMode="true">
        <slide v-for="(item, index) in carousel.list" :key="index">
          <router-link :to="item.url">
            <img :src="item.img">
          </router-link>
        </slide>
      </carousel>
      <div class="block-wrapper">
        <ul>
          <li v-for="(item, index) in block" :key="index" class="block">
            <div class="image">
              <img :src="item.image" width="100" height="100" >
            </div>
            <div class="sketch">
              <p class="title">{{item.title}}</p>
              <p class="desc">{{item.description}}</p>
              <router-link :to="item.url" class="buy">立即购买</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel';
  import VProduct from 'components/other/product';

  export default {
    name: 'home',
    data() {
      return {
        prod: [],
        news: [],
        block: [],
        carousel: []
      };
    },
    methods: {
      getNewsApi() {
        this.$ajax.get('/prodData/api').then((response) => {
          console.log(JSON.stringify(response.data, null, 2));
          console.log(response.data);
          let res = response.data.productData;
          this.prod = res.product;
          this.news = res.news;
          this.block = res.block;
          this.carousel = res.carousel;
        });
      }
    },
    created() {
      this.getNewsApi();
    },
    components: {
      VProduct, Carousel, Slide
    }
  };
</script>

<style lang="scss" type="text/css" scoped>
  @import "../../common/styles/base.scss";

  .home {
    width: 1000px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;
    .menu-wrapper {
      float: left;
      width: 270px;
      .prod-wrapper {
        border: 1px solid #ecedef;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 14px;
        .title {
          height: 34px;
          line-height: 34px;
          padding-left: 14px;
          background-color: #4fc08d;
          color: #fff;
          font-size: 16px;
        }
        .border-1px { border-bottom: 1px solid #ccc;}
        .new-list {
          min-height: 300px;
          overflow-y: auto;
          padding: 35px 18px;
          .item {
            font-size: 14px;
            margin-bottom: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            a {
              color: #444444;
              text-decoration: none;
              &:hover { color: #d21e2f;}
            }
          }
        }
      }
    }
    .content-wrapper {
      float: right;
      width: 700px;
      overflow: hidden;
      .block-wrapper {
        margin-top: 14px;
        .block {
          width: 343px;
          height: 169px;
          margin-bottom: 18px;
          padding: 20px;
          font-size: 0;
          border: 1px solid #ecedef;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          background-color: #fff;
          box-sizing: border-box;
          &:nth-child(odd) { float: left;}
          &:nth-child(even) { float: right;}
          .image {
            display: inline-block;
            vertical-align: top;
            border-radius: 50%;
            overflow: hidden;
            img {
              display: block;
            }
          }
          .sketch {
            width: 170px;
            display: inline-block;
            vertical-align: top;
            margin-left: 20px;
            .title {
              font-size: 16px;
              font-weight: bold;
              margin-top: 5px;
            }
            .desc {
              font-size: 14px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              margin-top: 25px;
            }
            .buy {
              display: inline-block;
              width: 96px;
              height: 42px;
              line-height: 42px;
              color: #fff;
              text-align: center;
              font-size: 14px;
              background-color: #4fc08d;
              border-radius: 5px;
              margin-top: 25px;
              cursor: pointer;
              text-decoration: none;
            }
          }
        }
      }
    }
  }

</style>
<!-- 修改vue-carousel组件样式 -->
<style lang="scss" type="text/css">
  .VueCarousel {
    width: 100%;
    height: 300px;
    .VueCarousel-navigation-button:focus { outline: none;}
    .VueCarousel-navigation-prev { left: 30px; }
    .VueCarousel-navigation-next { right: 30px; }
    .VueCarousel-dot {
      margin-bottom: 5px;
      &:focus { outline: none;}
    }
  }
</style>
