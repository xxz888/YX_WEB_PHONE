<!-- 折叠列表 组件 -->
<template>
  <nav :class="$style.accWrapper">
    <div :class="$style.accTitle" @click="toggleList">
      <span>{{ title.name }}</span>
      <img
        src="../../../static/firstright.png"
        alt="chevron"
        :class="[{ [$style.open_menu]: isDisplay, [$style.close_menu]: !isDisplay }, $style.accChevron]"
      />
    </div>
    <ul :class="[{ [$style.maxHeight]: isDisplay }, $style.accList]">
      <li :class="$style.accListItem" v-for="(item,index) in list" @click="jumpThird(item.father_id)">
        <span >{{ item.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Accordion',

    data () {
      return {
        isDisplay: false
      }
    },
    props: {
      title: {
        type: Object,
        default(){
          return {}
        }
      },
      list: {
        type: Array,
        required: true
      },
      secondIndex:{
        type:String,
      }
    },
    methods: {
      toggleList () {
        this.isDisplay = !this.isDisplay
      },
      jumpThird(id){
        this.$router.push({ path: '/third/' + id + '/' + this.secondIndex})

        // this.$router.push('third/'+JSON.stringify(item))
      }
    }
  }
</script>

<style lang="scss" module>
  .accWrapper {
    margin-top: 48px;

    display:flex;
    flex-direction: column;
  }
  .accTitle {
    display: flex;
    justify-content: space-between;
    /*align-items: baseline;*/
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    background: #fff;
    text-indent: 1em;
    cursor: pointer;

    font-family:PingFang SC;
    font-weight:300;
    color:rgba(34,34,34,1);
  }
  .accChevron {
    width: 20px;
    margin-right: 15px;
  }
  .accList{
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s ease-out;
  }
  .accList.maxHeight {
    max-height: 500px;
    transition: max-height .5s ease-in;
  }
  .accListItem {
    /*background-image: url(../../images/firstright.png);*/
    /*background-repeat: no-repeat;*/
    /*background-size: 44px 44px;*/
    /*background-position: 95% 50%;*/
    display: flex;
    // justify-content: space-between;
    align-items: baseline;
    height: 75px;
    line-height: 75px;
    font-size: 28px;
    text-indent: 1em;
    cursor: pointer;
    margin-left: 50px;

    font-family:PingFang SC;
    font-weight:300;
    color:rgba(34,34,34,1);
  }
  /* chevron animation  */
  @keyframes open-menu {
    to {
      transform: rotate(90deg);
    }
  }
  @keyframes close-menu {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  .open_menu {
    animation: open-menu 0.4s ease-out forwards;
    width: 44px;height: 44px;
    line-height: 44px;
    margin-top: 20px;

  }
  .close_menu {
    animation: close-menu 0.4s ease-out forwards;
    width: 44px;height: 44px;
    line-height: 44px;
    margin-top: 20px;

  }
</style>
