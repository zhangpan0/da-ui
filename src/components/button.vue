<!--  -->
<template>
  <div class="m-wrap">
    <button class="da-button" 
        :class="[`da-button-${type}`,{'is-plain':plain,'is-round':round,'is-circle':circle,'is-disabled':disabled}]" :disabled="disabled" @click="handleClick">
        <i v-if="icon" :class="`da-icon-${icon}`"></i>
        <!-- 如果不傳入文本插槽，不顯示 -->
        <span v-if="$slots.default"><slot></slot></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "DaButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain:{
        type:Boolean,
        default:false
    },
    round:{
        type:Boolean,
        default:false
    },
    circle:{
        type:Boolean,
        default:false
    },
    icon:{
        type:String,
        default:''
    },
    disabled:{
        type:Boolean,
        default:false
    }
  },
  data() {
    return {};
  },
  methods: {
      handleClick (e) {
          this.$emit('click',e)
      }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  components: {},
};
</script>

<style lang='scss' scoped>
.m-wrap {
  display: inline-block;
  .da-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .da-button.is-round {
      border-radius: 15px;
      padding: 12px 20px;
  }
  .da-button.is-circle {
      border-radius: 15%;
      padding: 12px;
  }
  // 朴素按钮样式
  .da-button.is-plain {
    &:hover,
    &:focus {
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }
  .da-button-primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    &:hover,
    &:focus {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
  .da-button-success.is-plain {
    color: #67c23a;
    background: #c2e7b0;
    &:hover,
    &:focus {
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .da-button-info.is-plain {
    color: #909399;
    background: #d3d4d6;
    &:hover,
    &:focus {
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .da-button-warning.is-plain {
    color: #e6a23c;
    background: #f5dab1;
    &:hover,
    &:focus {
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .da-button-danger.is-plain {
    color: #f56c6c;
    background: #fbc4c4;
    &:hover,
    &:focus {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
  .da-button [class*=da-icon-]+span{
    margin-left: 5px;
  }
  .da-button.is-disabled{
   cursor: no-drop;
  }
}
</style>