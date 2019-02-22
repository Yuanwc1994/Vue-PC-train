<template>
  <div class="selection-component" >
    <div class="selection-show" @click="toggleDrop">
      <span>{{ selections[nowIndex].label }}</span>
      <i class="arrow"></i>
    </div>
    <div class="selection-list" v-if="isDrop">
      <ul>
        <li v-for="(item, index) in selections" :key="index" @click="chooseSelection(index)">{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'selection',
    props: {
      selections: {
        type: Array,
        default: () => {
          return [{
            label: 'test',
            value: 0
          }]
        }
      }
    },
    data() {
      return {
        isDrop: false,
        nowIndex: 0
      }
    },
    methods: {
      toggleDrop() {
        this.isDrop = !this.isDrop;
      },
      chooseSelection(index) {
        this.nowIndex = index;
        this.isDrop = false;
        this.$emit('on-change', this.nowIndex);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
  .selection-component {
    display: inline-block;
    position: relative;
    .selection-show {
      display: inline-block;
      position: relative;
      height: 25px;
      line-height: 25px;
      padding: 0 20px 0 10px;
      border-radius: 3px;
      border: 1px solid #e3e3e3;
      cursor: pointer;
      background-color: #fff;
      .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        border-width: 5px 4px 0 4px;
        border-color: #e3e3e3 transparent transparent transparent;
        border-style: solid dashed dashed dashed;
        margin-top: -1px;
        margin-left: 6px;
        margin-right: -14px;
      }
    }
    .selection-list {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 25px;
      width: 100%;
      background-color: #fff;
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
      z-index: 5;
      li {
        padding: 5px 15px 5px 10px;
        border-left: 1px solid #e3e3e3;
        border-right: 1px solid #e3e3e3;
        cursor: pointer;
        background-color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:hover {
          background-color: #e3e3e3;
        }
      }
    }
  }
</style>
