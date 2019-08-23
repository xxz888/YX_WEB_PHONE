<template>
  <div>
    <!-- 标题栏 -->
    <div class="f-header">
      <router-link :to="backVc" slot="left">
        <img class="f-headerImg" src="../../../static/firstback.png" alt="">
      </router-link>
    </div>

    <div class="f-body"  v-for="item0 in dataList">
      <div v-for="item in item0">
        <div   v-if="item.obj==1" class="obj1" >{{item.detail}}</div>
        <div   v-if="item.obj==2" class="obj2" >{{item.detail}}</div>
        <img   v-if="item.obj==3" class="obj3" :src="item.detail" />
        <mt-swipe :auto="4000000" v-if="item.obj==4" class="obj4">
          <mt-swipe-item v-for="imgItem in item.detail_list"><img class="obj3" :src="imgItem" alt=""></mt-swipe-item>
        </mt-swipe>
        <div   v-if="item.obj==5" class="obj5" >{{item.detail}}</div>
      </div>

    </div>
  </div>

</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui';

  export default {
    component:[Swipe,SwipeItem],
    name: 'third',
    data(){
      return {
        title:"",
        dataList:[],
        backVc:'/second/' + this.$route.params.secondid
      }
    },
    created:function(){
      this.getData();
    },
    methods:{
      getData(){
          var self = this;
          this.$axios.get('http://thegdlife.com:8001/pub/option/0/'+this.$route.params.id+'/').then((res) => {
            self.dataList = res.data;
          })
      }
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
  .f-body{
    margin-left: 5%;
    width: 90%;
    height: 100%;
  }
  .obj1{
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;

    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(34,34,34,1);
    line-height:36px;
  }
  .obj2{
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;

    font-size:30px;
    font-family:PingFang SC;
    font-weight:300;
    color:rgba(34,34,34,1);
    line-height:36px;
  }
  .obj3{
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;

    width: 100%;
    height: auto;
  }
  .obj4{
    width: 100%;

    height: 1000px;
  }
  .obj5{
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;

    font-size:28px;
    font-family:PingFangSC-Light,  sans-serif;
    font-weight:300;
    color:rgba(34,34,34,1);
    line-height:36px;
  }
</style>
