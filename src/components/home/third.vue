<template>
  <div>

    <!--<mt-header  class="mint-header-title">-->
      <!--<router-link :to="backVc" slot="left">-->
      <!--</router-link>-->
      <!--<router-link :to="backVc" slot="right">-->
        <!--&lt;!&ndash;<div>&ndash;&gt;-->
          <!--<span>下载APP</span>-->
        <!--<span>-->
          <!--<img class="f-headerImg" src="../../../static/thirdshu1.png" alt="">-->
        <!--</span>-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->

      <!--</router-link>-->
    <!--</mt-header>-->
    <div class="headerDiv">
        <img class="f-headerImg" src="../../../static/thirdlps.png" alt="">

        <div class="headerDiv">
          <span class="headerSpan" @click="jumpMarket()">下载APP</span>

          <img class="f-headershu" src="../../../static/thirdshu1.png" alt="">
          <router-link to="/first" slot="left">
            <img class="f-headerMore" src="../../../static/thirdMore.png" alt="">
          </router-link>
        </div>




    </div>

    <div class="f-line"></div>



    <div class="f-body"  v-for="(item0,index) in dataList">

      <!--<div class="f-body-image">-->
        <!--<img class="f-body-image" :src="itemStart.child_list[index].photo" alt="">-->
      <!--</div>-->

      <div v-for="item in item0">

        <div   v-if="item.obj==1" class="obj1" >
            <img class="f-headershu2" src="../../../static/thirdshu2.png" alt="">
            <div style="margin-left: 36px">{{item.detail}}</div>
        </div>
        <div   v-if="item.obj==2" class="obj2" v-html="item.detail">{{item.detail}}</div>
        <img   v-if="item.obj==3" class="obj3" :src="item.detail" />
        <mt-swipe :auto="4000000" v-if="item.obj==4" class="obj4">
          <mt-swipe-item v-for="imgItem in item.detail_list"><img class="obj3" :src="imgItem" alt=""></mt-swipe-item>
        </mt-swipe>
        <div   v-if="item.obj==5" class="obj5" >{{item.detail}}</div>
      </div>

    </div>

    <div class="appBtn">
      <div class="box_relative" @click="jumpMarket()">
        APP内打开
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
        backVc:'/#/',
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
          resFirst.sort(function (a, b) {
            if (a.weight < b.weight) {
              return -1;
            } else if (a.weight == b.weight) {
              return 0;
            } else {
              return 1;
            }
          });


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







      },
      jumpMarket(){

        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

        if (isiOS) {
          var ua = window.navigator.userAgent.toLowerCase();
          //微信
          if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            window.location = 'https://itunes.apple.com/cn/app/id1490358357';
          } else {//非微信浏览器
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
              var loadDateTime = new Date();
              window.setTimeout(function () {
                var timeOutDateTime = new Date();
                if (timeOutDateTime - loadDateTime < 5000) {
                  window.location = "https://itunes.apple.com/cn/app/id1490358357";//ios下载地址
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
  .appBtn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    position:fixed;
    left: 30px;
    bottom: 50px;
    width: 100%;
    height:72px;
  }
  .box_relative {


    width:220px;
    height:72px;
    background:rgba(16,35,58,1);
    box-shadow:0px 7px 15px 3px rgba(9,15,44,0.1);
    border-radius:36px;
    text-align: center;
    font-size:24px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(255,255,255,1);
    line-height:72px;
  }
  .headerSpan{
    width:128px;
    height:34px;
    font-size:32px;
    font-weight:400;
    color:rgba(7,30,54,1);
    font-family:PingFang SC;
    font-weight:300;
    margin-right: 18px;
    line-height:34px;
    margin-top: 36px;
  }
  .headerDiv{
    height: 105px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }
  .f-headershu{
       width: 44px;
       height: 44px;
       background-size: 100% 100%;
       margin-top: 31px;
       margin-right: 12px;

     }
  .f-headershu2{
    width: auto;
    height:80%;
  }
  .f-headerMore{
    width: 44px;
    height: 44px;
    background-size: 100% 100%;
    margin-top: 31px;
    margin-right: 35px;
  }
  .f-headerImg{
    margin-left: 5%;
    width: 183px;
    height: 54px;
    background-size: 100% 100%;
    line-height: 105px;
    margin-top: 27px;
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



  .f-line{
    height:1px;
    background:rgba(238,238,238,1) ;
    margin: 0;padding: 0;
  }
  .f-body{
    margin-left: 5%;
    width: 90%;
    height: 100%;
  }

  .obj1{
    height: 100%;
    text-align: left;
    margin-top: 40px;
    font-size:38px;
    font-family:PingFang SC;
    font-weight:bold;
    color:rgba(34,34,34,1);

    display: flex;
    flex-direction: row;
    justify-content: start;
    text-align: center;
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
