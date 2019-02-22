<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item, index) in selections" :key="index" @click="chosenSelection(index)" :title="item.label" :class="{active:index === nowIndex}">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'chooser',
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
        nowIndex: 0
      }
    },
    methods: {
      chosenSelection(index) {
        this.nowIndex = index;
        this.$emit('on-change', this.nowIndex);
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
