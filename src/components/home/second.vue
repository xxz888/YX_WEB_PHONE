<template>
  <div>
    <!-- 标题栏 -->
    <div class="f-header">
      <router-link to="/first" slot="left">
        <img class="f-headerImg" src="../../../static/firstback.png" alt="">
      </router-link>

      <div class="f-title">{{title}}</div>
    </div>


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
        this.title = res[id].name;
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
    background: url('../../../static/firstback.png') center center no-repeat;
    background-size: 100% 100%;
    margin-top: 37px;
    margin-left:19px;
  }
  .f-rightImg{
    background-size: 100% 100%;
    margin-top: 37px;
    margin-left:19px;

    width:22px;
    height:22px;
    background:rgba(0,0,0,1);
    border-radius:2px;
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
