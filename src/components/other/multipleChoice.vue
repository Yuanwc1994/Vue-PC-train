<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" :key="index" @click="toggleSelection(index)" :title="item.label" :class="{active: checkActive(index)}">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    name: 'chooser',
    props: {
      selections: {
        type: Array,
        default: () => {
          return [{
            label: 'test',
            value: 0
          }, {
            label: 'test',
            value: 0
          }, {
            label: 'test',
            value: 0
          }, {
            label: 'test',
            value: 0
          }]
        }
      }
    },
    data() {
      return {
        nowIndexs: [0]
      }
    },
    methods: {
      toggleSelection(index) {
        if (this.nowIndexs.indexOf(index) === -1) {
          this.nowIndexs.push(index);
        } else {
          this.nowIndexs = _.remove(this.nowIndexs, (idx) => {
            return idx !== index;
          })
        }
        this.$emit('on-change', this.nowIndexs);
      },
      checkActive(index) {
        return this.nowIndexs.indexOf(index) !== -1;
      }

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
    .chooser-list {
      li {
        display: inline-block;
        height: 25px;
        line-height: 25px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #e3e3e3;
        border-radius: 3px;
        padding: 0 10px;
        margin-right: 5px;
        &.active {
          background-color: #4fc08d;
          border-color: #4fc08d;
          color: #fff;
        }
      }
    }
  }

</style>
