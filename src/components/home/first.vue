<template>
  <div>
    <div class="f-header">
      <router-link to="/" slot="left">
        <img class="f-headerImg" src="../../../static/firstback.png" alt="">
      </router-link>

     <div class="f-title">目录</div>
    </div>


    <div class="f-line">

    </div>

    <div class="f-cellAll">
        <div v-for="(item,index) in dataArray" @click="jumpSecond(index)" class="cellDiv" >
          <div class="cellStyle">{{item.name}}</div>
          <img src="../../../static/firstright.png" class="rightStyle" alt="">
        </div>


      <div  @click="jumpAboutUs" class="cellDiv" >
        <div class="cellStyle">关于我们</div>
        <img src="../../../static/firstright.png" class="rightStyle" alt="">
      </div>

    </div>
  </div>

</template>
import { CellSwipe } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe);
<script>
  export default {
    name: 'first',
    data () {
      return {
        dataArray:[]

      }
    },
   created:function(){
     this.getData();
   },
    methods:{
      jumpAboutUs(){
        this.$router.push('aboutUs/')
      },
      jumpSecond(index){
        this.$router.push('second/'+index)
      },
      //请求
      //请求
      getData() {
        var self = this;
        var res = JSON.parse(localStorage.getItem("cacheData"));
        self.dataArray = res;
      },
    }
  }
</script>

<style scoped>
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
  .cellStyle{
    margin-left: 35px;
    width: 900px;
    height:114px;
    font-size:30px;
    font-family:PingFang SC;
    font-weight:300;
    color:rgba(34,34,34,1);
    line-height: 114px;
  }

.f-cellAll{
  margin-top: 36px;

}
.rightStyle{
  width: 44px;
  height: 44px;
  line-height: 44px;
  /*margin-left: 487px;*/
  margin-right: 44px;
  margin-top: 35px;
}
  .cellDiv{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    /*text-align: center;*/
  }
</style>
