<template>
  <div>

    <mt-header :title="itemStart.name" class="mint-header-title">
      <router-link :to="backVc" slot="left">
        <mt-button style="width: 50%;height: 100%">
          <img class="f-headerImg" src="../../../static/firstback.png" alt="">
        </mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>



    <div class="f-body"  v-for="(item0,index) in dataList">

      <!--<div class="f-body-image">-->
        <!--<img class="f-body-image" :src="itemStart.child_list[index].photo" alt="">-->
      <!--</div>-->

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
        backVc:'/second/' + this.$route.params.secondid,
        itemStart:{}
      }
    },
    created:function(){
      this.getData();
    },
    methods:{
      getData(){
        var self = this;
        var res = JSON.parse(localStorage.getItem("cacheData_second"));
        //根据id找对应的item
        for (var i = 0; i < res.length; i++) {
          if (this.$route.params.id == res[i].id) {
            this.itemStart = res[i];
          }
        }

        this.$axios.get('http://thegdlife.com:8001/pub/option/0/'+this.$route.params.id+'/').then((res) => {
            self.dataList = res.data;
          })
      }
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


  .f-body{
    margin-left: 5%;
    width: 90%;
    height: 100%;
  }
  .obj1{
    text-align: left;
    margin-top: 40px;

    font-size:40px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(34,34,34,1);
    line-height:36px;
  }
  .obj2{
    text-align: left;
    margin-top: 40px;
    font-size:28px;
    font-family:PingFang SC;
    font-weight:300;
    color:rgba(51,51,51,1);
  }
  .obj3{
    text-align: left;
    margin-top: 40px;

    width: 100%;
    height: auto;
  }
  .obj4{
    margin-top: 40px;

    width: 100%;

    height: 1000px;
  }
  .obj5{
    text-align: left;
    margin-top: 40px;

    font-size:32px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,1);

  }

</style>
