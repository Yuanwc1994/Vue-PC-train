<template>
  <div class="detail">
    <div class="detail-left">
      <div class="tab-warp">
        <img :src="setImage" height="100" width="100" alt="">
        <ul class="tab-list">
          <router-link v-for="(item, index) in tab" :to="{ path: item.path }" tag="li" :key="index">{{item.name}}</router-link>
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        tab: [],
        image: {}
      }
    },
    methods: {
      getTabApi() {
        this.$ajax.get('/prodData/api').then((response) => {
          let res = response.data.productData;
          this.tab = res.tab;
          this.image = res.imgMap;
        });
      }
    },
    created() {
      this.getTabApi();
    },
    computed: {
      setImage() {
        return this.image[this.$route.path]
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css">
  .detail {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    clear: both;
    overflow: hidden;
    font-size: 14px;
    .detail-left{
      float: left;
      width: 200px;
      background-color: #fff;
      .tab-warp {
        padding: 20px 0;
        text-align: center;
        .tab-list {
          margin-top: 20px;
          li {
            padding: 10px 15px;
            text-align: left;
            cursor: pointer;
            &.router-link-active, &:hover {
              background-color: #4fc08d;
              color: #fff;
            }
          }
        }
      }
    }
    .detail-right {
      float: right;
      width: 980px;
      .sales-board {
        background: #fff;
        &-intro {
          h2 {
            font-size: 20px;
            padding: 20px;
          }
          p {
            background: #f7fcff;
            padding: 10px 20px;
            color: #999;
            line-height: 1.8;
          }
        }
        &-form {
          padding: 30px 20px;
          font-size: 14px;
          .sales-board-line {
            clear: both;
            padding-bottom: 20px;
            &-left {
              display: inline-block;
              width: 90px;
            }
            &-right {
              display: inline-block;
              width: 75%;
              .button {
                background: #4fc08d;
                color: #fff;
                display: inline-block;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
            }
            }
          }
        }
        &-des {
          border-top: 20px solid #f0f2f5;
          padding: 15px 20px;
          p {
            line-height: 1.6;
          }
          h2 {
            font-size: 20px;
            padding-bottom: 15px;
          }
          h3 {
            font-size: 18px;
            font-weight: bold;
            padding: 20px 0 10px 0;
          }
          li {
            padding: 5px 0;
          }
          .sales-board-table {
            width: 100%;
            margin-top: 20px;
            th {
              background: #4fc08d;
              color: #fff;
            }
            td {
              border: 1px solid #f0f2f5;
              padding: 15px;
            }
          }
        }
      }
    }
  }
</style>
