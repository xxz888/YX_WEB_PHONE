<template>
  <div>

    <mt-header :title="itemStart.name" class="mint-header-title">
      <router-link :to="backVc" slot="left">
        <mt-button style="width: 50%;height: 100%">
          <img class="f-headerImg" src="../../../static/firstback.png" alt="">
        </mt-button>
      </router-link>
    </mt-header>



    <div class="f-body"  v-for="(item0,index) in dataList">

      <!--<div class="f-body-image">-->
        <!--<img class="f-body-image" :src="itemStart.child_list[index].photo" alt="">-->
      <!--</div>-->

      <div v-for="item in item0">
        <div   v-if="item.obj==1" class="obj1" >{{item.detail}}</div>
        <div   v-if="item.obj==2" class="obj2" v-html="item.detail">{{item.detail}}</div>
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
    //需要watch监听$route to为新传入的id 更改当前orderId再执行方法即可刷新页面
    watch:{
      '$route' (to, from) {
        this.getData()
      }
    },
    created:function(){
      this.getData();
    },
    methods:{
      getData(){
        var self = this;


        // var res = JSON.parse(localStorage.getItem("cacheData_second"));


        this.$axios.get('http://lpszn.com/api/pub/all_option/').then((res) => {


          var resFirst = res.data[0]["child_list"];

          //根据id找对应的item
          var dic = resFirst[self.$route.params.secondid];
          for (let i = 0; i < dic['child_list'].length; i++) {
            if (self.$route.params.id == dic['child_list'][i]['id']){
              self.itemStart = dic['child_list'][i];
            }
          }
          self.$axios.get('http://lpszn.com/api/pub/option/0/'+self.$route.params.id+'/').then((res) => {
            self.dataList = res.data;
            var obj6String = '';

            for (let i = 0; i < self.dataList.length; i++) {
              for (let j = 0; j < self.dataList[i].length; j++) {
                var dici = self.dataList[i][j];
                if (dici['obj'] == 6){
                  obj6String = dici['detail'];
                }
              }
            }

            if (obj6String != ''){
              var obj6Array = obj6String.split(';');
              for (let j = 0; j < obj6Array.length; j++) {
                var obj6Arr1 = obj6Array[j].split(',');

                var nameString = obj6Arr1[0];
                var id1 = obj6Arr1[2].split('-')[0];

                var id2 = obj6Arr1[2].split('-')[1];
                var id3 = obj6Arr1[2].split('-')[2];


                var secondid = '';
                //根据id找对应的item
                for (let i = 0; i < resFirst.length; i++) {
                  if (id2 == resFirst[i]['id']){
                    secondid = i;
                  }
                }

                var backVC111 = self.backVc;
                //根据id得到
                for (let k = 0; k < self.dataList.length; k++) {
                  for (let i = 0; i < self.dataList[k].length; i++) {
                    var dici = self.dataList[k][i];

                    if ((dici['detail']).indexOf(nameString) != -1 && dici['obj'] == 2) {
                      self.dataList[k][i]['detail'] = self.dataList[k][i]['detail'].replace(nameString,`<a style="text-decoration:none;"  href="#/third/${id3}/${secondid}">${nameString}</a>`)
                    }
                  }

                }
              }
            }

          })
        });







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
