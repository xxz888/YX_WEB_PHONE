<template>
  <div>
    <mt-header title="目录" class="mint-header-title">
      <router-link to="/" slot="left">
        <mt-button style="width: 50%;height: 100%">
          <img class="f-headerImg" src="../../../static/firstback.png" alt="">
        </mt-button>
      </router-link>
    </mt-header>



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
        this.$axios.get('http://lpszn.com/api/pub/all_option/').then((res) => {
          self.dataArray = res.data[0]["child_list"];
          self.dataArray.sort(function (a, b) {
            if (a.weight < b.weight) {
              return -1;
            } else if (a.weight == b.weight) {
              return 0;
            } else {
              return 1;
            }
          });
          console.log(self.dataArray);
        })
      },
    }
  }
</script>

<style scoped>
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
    height:1px;
    background:rgba(195,195,195,1) ;
    margin: 0;padding: 0;
    /*border:1px solid rgba(195,195,195,1);*/
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
