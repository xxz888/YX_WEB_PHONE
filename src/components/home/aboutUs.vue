<template>
  <div>
    <div class="f-header">
      <router-link to="/" slot="left">
        <img class="f-headerImg" src="../../../static/firstback.png" alt="">
      </router-link>
      <div class="f-title">关于我们</div>
    </div>
    <div class="f-line"></div>

    <div class="bjStyle" >
          <div class="div1">About Us</div>
          <div class="div2">蓝皮书</div>
    </div>

    <div class="div3">蓝皮书早期主要指英国议会的一种出版物。因封皮是蓝色，故名。开始发行于1681年，自1836年才公开出售。其名称是《英国议会文书》，是英国政府提交议会两院的一种外交资料和文件。后用于代指部分官方文件，通常代表的是学者的观点或者研究团队的学术观点。</div>
    <!--<div class="div3" style="margin-top: 180px">蓝皮书早期主要指英国议会的一种出版物。因封皮是蓝色，故名。开始发行于1681年，自1836年才公开出售。其名称是《英国议会文书》，是英国政府提交议会两院的一种外交资料和文件。后用于代指部分官方文件，通常代表的是学者的观点或者研究团队的学术观点。</div>-->

    <div class="btnBottom">
      <p class="divBottom"> 蓝皮书内打开</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'aboutUs'
  }
</script>

<style scoped>
  .btnBottom{
    text-align: center;
    margin-top: 130px;
    margin-left: 30%;
    width: 40%;
    /*width:220px;*/
    height:72px;
    background:rgba(76,74,169,1);
    box-shadow:0px 7px 15px 3px rgba(9,15,44,0.21);
    border-radius:36px;
    line-height:72px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
.divBottom{
  margin-top: 20px;
  height:36px;
  font-size:22px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:36px;
}

  .div1{
    height: 50px;

    font-size:36px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:4px;
  }
  .div2{
    margin-top: 70px;
    height: 20px;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:300;
    color:rgba(255,255,255,1);
    line-height:4px;
  }
  .div3{
    margin-left: 5%;
    margin-top: 30px;
    width:90%;
    height:203px;
    font-size:24px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    line-height:46px;
  }
  .midDiv{
    text-align: center;
  }
  .bjStyle{
    width: 640px;height: 350px;
    background: url('../../../static/homebj1.jpg');
    background-size: 100% 100%;
    /*position: fixed;*/
    width: 100%;
    text-align: center;


    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .f-header{
    width: 100%;
    height: 105px;
    margin: 0;
    padding: 0;
    background: white;

    display: flex;
    flex-direction: row;
    /*flex-wrap: nowrap;*/
    /*justify-content: space-between;*/
  }
  .f-headerImg{
    width: 44px;
    height: 44px;
    background-size: 100% 100%;
    margin-top: 37px;
    margin-left:19px;
  }

  .f-line{
    height:1px;
    background:rgba(195,195,195,1) ;
    margin: 0;padding: 0;
    /*border:1px solid rgba(195,195,195,1);*/
  }
  .f-title{

    margin-left: 235px;
    height:105px;
    font-size:28px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(34,34,34,1);
    line-height:105px;
  }
</style>
