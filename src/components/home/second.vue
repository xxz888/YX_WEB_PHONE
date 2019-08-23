<template>
  <div>

    <mt-header :title="title" class="mint-header-title">
      <router-link to="/first" slot="left">
        <mt-button style="width: 50%;height: 100%">
          <img class="f-headerImg" src="../../../static/firstback.png" alt="">
        </mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="f-line">

    </div>
    <!-- 列表 -->
    <accordion
      v-for="(item,index) in dataList"
      :key="item.id"
      :title="item"
      :list="item.child_list"
      :secondIndex="secondIndex"
    >
    </accordion>
  </div>
</template>



<script>
  import Accordion from './Accordion'

  export default {
    name: 'second',
    components: {
      Accordion,
    },
    data(){
      return {
        title:"",
        dataList:[],
        secondIndex:this.$route.params.id
      }
    },
    created:function(){
      this.getData();

    },
    methods:{
      getData(){
        var res = JSON.parse(localStorage.getItem("cacheData"));
        let id = this.$route.params.id;
        this.dataList = res[id]["child_list"];

        localStorage.setItem("cacheData_second",JSON.stringify(this.dataList));


        this.title = res[id].name;
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

  .f-line{
    height:1px;
    background:rgba(195,195,195,1) ;
    margin: 0;padding: 0;
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
