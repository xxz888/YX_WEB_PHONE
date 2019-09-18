<template>
  <div class="">
    <mt-header title="" class="mint-header-title">
      <router-link to="/p_Login1" slot="left">
        <mt-button style="width: 50%;height: 100%">
          <img class="f-headerImg" src="../../../static/firstback.png" alt="">
        </mt-button>
      </router-link>
    </mt-header>


    <div class="bodyStyle">
      <div class="tag1">请输入短信验证码</div>
      <div class="tag2">已向您的手机 4369 发送验证码&nbsp
        <span class="tag3">重新发送(60)</span>
      </div>

      <div class="input-captcha-20190115">
        <div class="input-box">
          <div class="input-content">
            <input v-model.trim.number="input0" ref="input0" @keydown.8="deleteValue('input0','input0')" @keyup="changeValue($event,'input0','input1')" type="number" >
            <input v-model.trim.number="input1" ref="input1" @keydown.8="deleteValue('input1','input0')" @keyup="changeValue($event,'input1','input2')" type="number" >
            <input v-model.trim.number="input2" ref="input2" @keydown.8="deleteValue('input2','input1')" @keyup="changeValue($event,'input2','input3')" type="number" >
            <input v-model.trim.number="input3" ref="input3" @keydown.8="deleteValue('input3','input2')" @keyup="changeValue($event,'input3','input4')" type="number" >
            <input v-model.trim.number="input4" ref="input4" @keydown.8="deleteValue('input4','input3')" @keyup="changeValue($event,'input4','input5')" type="number" >
            <input v-model.trim.number="input5" ref="input5" @keydown.8="deleteValue('input5','input4')" @keyup="changeValue($event,'input5','input5')" type="number" >
          </div>
        </div>
      </div>

      <div class="nextDiv" @click="nextAction">下一步</div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'p_Login2',
    data () {
      return {
        simpleInput0: '',
        simpleInput1: '',
        input0: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: ''
      }
    },
    methods:{
      nextAction(){
        // this.$router.push('p_Login2');
      },
      deleteValue (inputValue, previousItem) { // 键盘按下时$event，当前input，上一个input
        console.log(this[inputValue], this[previousItem])
        if (this[inputValue].length > 0) { // 当前有值，清空之
          this[inputValue] = ''
        } else { // 当前没有值，光标跳转到上一个input，并清空该input值
          this.$nextTick(() => {
            this.$refs[previousItem].focus()
            this[previousItem] = ''
            this[inputValue] = ''
          })
        }
      },
      changeValue (e, inputValue, nextItem) { // 键盘抬起时$event，当前input，下一个input
        console.log(e.keyCode, this[inputValue], this[nextItem])
        if (e.keyCode !== 8) {
          this.$nextTick(() => {
            this.$refs[nextItem].focus() // 截取当前值最后一位，跳到下一个input
            this[inputValue] = (this[inputValue]).toString().slice(-1)
          })
        }
      }
    }
  }
</script>

<style  scoped>
  .input-captcha-20190115 {
    min-height: 200px
  }
  .input-box {
    margin-top: 70px;
    min-height: 100px;
    width: 100%;
    display: inline-block;
    /*padding: 20px;*/
    box-sizing: border-box;


    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .input-content {
    /*padding: 20px;*/
  }

  input {
    width: 60px;
    height: 60px;
    text-align: center;
    border: 1px solid silver;
    display: inline-block;
    font-size: 30px;
    border-radius:5px;

  }

  .bodyStyle{
    margin-left: 10%;
    width: 80%;
  }

  .nextDiv{
    height:90px;
    background:rgba(153,153,153,1);
    border-radius:45px;
    font-size:32px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:90px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .tag1{
    margin-top: 30px;
    height:66px;
    font-size:48px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:66px;
  }
  .tag2{
    margin-top: 15px;
    height:17px;
    font-size:15px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:17px;
  }
  .tag3{
    margin-top: 15px;
    height:17px;
    font-size:20px;
    font-family:PingFangSC;
    font-weight:400;
    line-height:17px;

    color:rgba(10,36,54,1);
  }
  .mint-header-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #000;
    font-size: 28px;
    height: 105px;
    background-color: white;

    font-family:PingFang SC;
    font-weight:400;
    color:rgba(34,34,34,1);
    line-height:105px;
  }

  .f-headerImg{
    margin-left: 5%;
    margin-top: 50px;
    width: 44px;
    height: 44px;
    background-size: 100% 100%;
    margin-left: 0;
  }

</style>
