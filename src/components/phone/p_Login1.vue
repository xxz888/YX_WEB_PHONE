<template>
<div class="">
  <mt-header title="" class="mint-header-title">
    <router-link to="/p_Login" slot="left">
      <mt-button style="width: 50%;height: 100%">
        <img class="f-headerImg" src="../../../static/firstback.png" alt="">
      </mt-button>
    </router-link>
  </mt-header>


  <div class="bodyStyle">
    <div class="tag1">请输入手机号</div>
    <input class="inputStyle" type="text" placeholder="请输入您的手机号码">
    <div class="f-line"></div>
    <div class="nextDiv" @click="nextAction">下一步</div>
    <div class="bottomDiv">未注册的手机号码验证后自动登录</div>

  </div>

</div>
</template>

<script>
  export default {
    name: 'p_Login1',
    methods:{
      nextAction(){
        this.$router.push('p_Login2');
      }
    }
  }
</script>

<style scoped>

  .bodyStyle{
    margin-left: 10%;
    width: 80%;
  }
  .bottomDiv{
    margin-top: 40px ;
    font-size:24px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:34px;
    text-align: center;
  }
  .nextDiv{
    margin-top: 151px;
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
  .inputStyle{
    margin-top: 90px;

    width:252px;
    height:40px;
    font-size:28px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(177,177,177,1);
    line-height:40px;
  }
  .tag1{
  margin-top: 30px;
    width:288px;
    height:66px;
    font-size:48px;
    font-family:PingFangSC;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:66px;
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

  .f-line{
    margin-top: 30px;

    height:1px;
    background:rgba(195,195,195,1) ;
    /*border:1px solid rgba(195,195,195,1);*/
  }
</style>
