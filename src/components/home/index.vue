<template>
  <div class="backDiv">
    <div class="firstDiv">
      <img class="iconStyle" src="../../../static/homeicon.png">
      <img class="moreStyle" src="../../../static/homemore.png" @click="jumpFirst">
    </div>

    <div class="secondDiv">
      <div class="textStyle textStyle1">蓝皮书</div>
      <div class="textStyle textStyle2" >记录分享美好生活</div>
      <div class="textStyle textStyle3">If youlove life,life will love your back</div>
    </div>

    <div class="thirdDiv">

      <div class="iosDiv" @click="jumpMarket(0)">
        <img class="iosImg" src="../../../static/homeapple.png" alt="">
        <div class="iosSpan">App Store</div>
      </div>


    </div>

    <div class="forthDiv">

      <div class="androidDiv"  @click="jumpMarket(1)">
        <img class="androidImg" src="../../../static/homeandroid.png" alt="">
        <div class="iosSpan">Android</div>
      </div>

    </div>

  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {

      }
    },
    created:function(){
      this.getData();
    },
    methods:{
      getData() {
        var self = this;
        this.$axios.get('http://lpszn.com/api/pub/all_option/').then((res) => {
          localStorage.setItem("cacheData",JSON.stringify(res.data[0]["child_list"]));
        })
      },
      jumpFirst(){
        this.$router.push('first')
      },
      jumpMarket(){

        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isiOS) {
          var ua = window.navigator.userAgent.toLowerCase();
          //微信
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            window.location = 'https://itunes.apple.com/cn/app/id1454467501';
          } else {//非微信浏览器
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
              var loadDateTime = new Date();
              window.setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                  window.location = "https://itunes.apple.com/cn/app/id1454467501";//ios下载地址
                } else {
                  window.close();
                }
              }, 2000);
              window.location = "schema://";
            } else if (navigator.userAgent.match(/android/i)) {
              var state = null;
              try {
                window.location = 'weixin://';
                setTimeout(function () {
                  window.location = "https://m.wandoujia.com/apps/com.jiuju.thegoodlife"; //android下载地址
                }, 500);
              } catch (e) {
              }
            }
          }
        } else {
          window.location = 'weixin://';
          setTimeout(function () {
            window.location = "https://m.wandoujia.com/apps/com.jiuju.thegoodlife"; //android下载地址
          }, 500);
        }
        ;
      },


    }
  }
</script>



<style scoped>
  .backDiv {
        border-style:none;
    border-width:0;

    /*justify-content: center;*/
    /*align-items: center;*/
    background: url('../../../static/homebj.png') center center no-repeat;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
  }
  .iconStyle{
    width:163px;
    height:50px;
    background-size: 100% 100%;
    margin:34px;


  }
  .moreStyle{
    width:44px;
    height:44px;
    background-size: 100% 100%;
    margin:34px;

  }
  .firstDiv{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

  }
  .secondDiv{
    margin-top:221px;
    width: 100%;
    height: auto;

  }
  .textStyle{
    text-align: center;
    color: #fff;
  }
  .textStyle1{
    height:auto;
    font-size:65px;
    font-weight:700;
  }
  .textStyle2{
    margin-top: 44px;
    width:100%;
    height:45px;
    font-size:48px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:4px;
  }
  .textStyle3{
    margin-top: 24px;
    height:auto;
    font-size:20px;
    font-family:Arial;
    font-weight:normal;
    color:rgba(255,255,255,1);
  }
  .thirdDiv{
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
  }
  .forthDiv{
    margin-top: 22px;
    display: flex;
    display: -webkit-flex;
    align-items:center;
    justify-content:center;
  }
  .iosDiv{
    margin-top: 222px;
    width:440px;
    height:88px;
    background:rgba(37,57,73,1);
    border-radius:44px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .androidDiv{
    width:440px;
    height:88px;
    background:rgba(37,57,73,1);
    border-radius:44px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .iosImg{
    margin-top: 20px;
    background-size: 100% 100%;
    width: 38px;
    height: 38px;
  }
  .androidImg{
    margin-top: 20px;
    background-size: 100% 100%;
    width: 38px;
    height: 38px;
  }
  .iosSpan{
    margin-top: 28px;
    margin-left: 22px;
    width:100px;
    font-size:20px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .androidDiv{

  }
</style>
