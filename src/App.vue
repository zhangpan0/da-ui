<template>
  <div id="app">
      <div class="item-list">
        <da-button plain>按钮</da-button>
        <da-button plain type="primary">primary按钮</da-button>
        <da-button plain type="success">success按钮</da-button>
        <da-button plain type="info">info按钮</da-button>
        <da-button plain :circle="true" type="danger" icon="iconhuifu2" :disabled="true" @click="getInfo">danger按钮</da-button>
        <da-button plain :round="true" type="warning" @click="getInfo">warning按钮</da-button>
      </div>
      <div class="item-list input-box">
        <da-input v-model="form.username" :clearable="true" placeholder="请输入"></da-input>
        <da-input v-model="form.password" type="password" :showPassword="true" placeholder="请输入"></da-input>
      </div>

      <da-dialog :visible.sync="visible">
        <span slot="title">溫馨提示</span>
        <div>
          这是内容的
        </div>
        <div slot="footer">
          <da-button plain @click="getInfo">取消</da-button>
          <da-button plain type="primary" @click="getInfo">確定</da-button>
        </div>
      </da-dialog>

      <div class="item-list">
        <da-switch name="switch" activeColor="#0099CC" inactiveColor="#99CCFF" v-model="form.active"></da-switch>
      </div>

      <div class="item-list">
         <da-radio name="radio" label="radio1" v-model="form.sex"></da-radio>
        <da-radio name="radio2" label="radio2" v-model="form.sex"></da-radio>

        <da-radio-group name="radiogroup" v-model="form.sex2">
          <da-radio label="IPO" ></da-radio>
          <da-radio label="业绩会" ></da-radio>
          <da-radio label="媒体会" ></da-radio>
        </da-radio-group>
      </div>

      <div class="test-div">circle</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible:false,
      form:{
        username:"",
        password:"",
        active:false,
        sex:1,
        sex2:1
      }
    }
  },
  methods:{
      getInfo () {
        console.log('childClick');
        this.visible = !this.visible;
      },
      handelInput (val) {
        console.log(val);
        
      }
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
  .input-box {
    max-width: 300px;
  }
  .test-div {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    color: #fff;
    background-color: skyblue;
  }
}
</style>
