<template>
    <div class="backDiv">

      <div class="imglpsStyle" style="margin-top: 40%">
        <img  src="../../../static/phonelanpishu.png" alt="">
      </div>

      <div class=" textStyle2" >男士品质生活指南</div>

        <div class="thirdDiv">

        <div class="btnStyle" style="margin-top: 80px">
            <div class="iosDiv" @click="jumpLogin1">手机号登录</div>
        </div>

        <div class="btnStyle">
          <div class="androidDiv"  style="margin-top: 30px" @click="jumpMarket(1)">游客</div>
        </div>


        <div class="bottom1" style="margin-top: 80px">——&nbsp&nbsp&nbsp社交账号登录&nbsp&nbsp&nbsp——</div>

        <div class="bottom2" style="margin-top: 60px">
          <img class="img1" src="../../../static/homeandroid.png" alt="">
          <img class="img1" style="margin-left: 170px" src="../../../static/homeandroid.png" alt="">
        </div>

        <div class="bottom2" style="margin-top: 80px">
          <p class="bottomp1">登陆注册代表同意 </p>
          <p class="bottomp2">&nbsp用户协议、隐私政策 </p>
        </div>
      </div>


    </div>
</template>

<script>
  export default {
    name: 'p_Login',
    methods:{
      jumpLogin1(){
        this.$router.push('p_Login1');
      }
    }
  }
</script>

<style scoped>

  .bottomp1{
    height:34px;
    font-size:24px;
    font-family:PingFangSC;
    font-weight:400;
    color:rgba(153,153,153,1);
    line-height:34px;
  }

  .bottomp2{

    height:34px;
    font-size:24px;
    font-family:PingFangSC;
    font-weight:400;
    color:#fff;
    line-height:34px;
  }
  .img1{
    width:38px;
    height:38px;
  }
  .bottom2{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }

.bottom1{
  height: 34px;
  font-size:22px;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(216,216,216,1);
  line-height:34px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
.backDiv{
  width: 100%;
  height: 100%;
  background:rgba(10,36,54,1);
  border:1px solid rgba(151,151,151,1);
  position: fixed;


}
.imglpsStyle{
  margin-top: 280px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.textStyle2{
  margin-top: 25px;
  text-align: center;
  color: #fff;
  font-size:100px;
  line-height:48px;
  font-family: FangSong;
  height:17px;
  font-size:25px;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:17px;
  letter-spacing:11px;
}
.thirdDiv{


  width: 100%;
  position: absolute;
  bottom: 20px;

  display: flex;
  flex-direction: column;
  justify-content:center;
}
  .btnStyle{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
.iosDiv{
  background:#fff;

  width:85%;
  height:80px;
  border-radius:45px;
  font-size:28px;
  font-family:PingFangSC;
  font-weight:400;
  color:rgba(10,36,54,1);
  line-height:80px;


  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
.androidDiv{
  width:85%;
  height:80px;
  border-radius:45px;
  font-size:28px;
  font-family:PingFangSC;
  font-weight:400;
  color:#fff;
  line-height:80px;
  border:2px solid rgba(255,255,255,1);


  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
</style>
