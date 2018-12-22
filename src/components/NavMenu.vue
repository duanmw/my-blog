<template>
  <div class="layout-menu-left">
    <div class="layout-logo-left">
       <transition :duration="400" enter-active-class="animated faldeIn" 
       leave-active-class="animated shake" tag="div" mode="out-in" appear>
        <div key="sentence" :title="sentence.note" class="sentence" v-if="showSentence">{{sentence.note}}</div>
        <div key="title" v-else class="title" @click="change">Duan's Notes</div>
       </transition>
      <p :title="sentence.content" @click="showSentence=!showSentence">{{sentence.content}}</p>
      </div>
    <Menu :active-name="activeItem" theme="light" width="auto" :open-names="['2']">
      <MenuItem name="home" to="/">
        <Icon type="md-planet" /><span class="m-item">首页</span>
      </MenuItem>
      
      <Submenu name="2">
        <template slot="title">
          <Icon type="md-filing" /></Icon><span class="m-item2">分类</span>
        </template>
        <MenuItem name="technology" to="/technology"><Icon type="logo-github" /><span class="m-item2">技术</span></MenuItem>
        <MenuItem name="movies" to="/movies"><Icon type="md-film" /><span class="m-item2">影视</span></MenuItem>
      </Submenu>
    
      <MenuItem name="tags" to="/tags">
        <Icon type="md-pricetag" /><span class="m-item">标签</span>
      </MenuItem>
      <MenuItem name="manage" to="/manage">
        <Icon type="md-settings" /><span class="m-item">管理</span>
      </MenuItem>
      <MenuItem name="create" to="/create">
        <Icon type="md-document" /><span class="m-item">创作</span>
      </MenuItem>
      
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    activeItem:String
  },
  data(){
    return{
      showSentence:false,
      sentence: {},
      // activeItem:"home"
    }
  },
  methods:{
    change(){
      let that=this
      console.log()
      let randomDate=this.getDateStr(-Math.floor(Math.random()*100+1))
      axios({
        method: "get",
        url: "/api?date="+randomDate
      }).then(function(res) {
        console.log(res.data);
        that.sentence=res.data
      });
    },
    getDateStr(addDayCount=0) { 
     var dd = new Date(); 
     dd.setDate(dd.getDate()+addDayCount);//获取AddDayCount天后的日期 
     var y = dd.getFullYear(); 
     var m = dd.getMonth()+1;//获取当前月份
     var d = dd.getDate(); 
     return y+"-"+m+"-"+d; 
 } 
  },
  
  created() {
    let that=this
    axios({
      method: "get",
      url: "/api"
    }).then(function(res) {
      // console.log(res.data);
      that.sentence=res.data
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.layout-menu-left {
    width: 100%;
    // min-width: 170px;
    text-align: center;
    >.ivu-menu{
      border-left: 1px solid #DCDEE2;
      border-bottom: 1px solid #DCDEE2;
      padding-bottom:14px;
    }
    .layout-logo-left {
      width: 100%;
      // height: 80px;
      // line-height: 80px;
      color: #ffffff;
      border: 1px solid #17233D;
      background: #17233D;
      // border-radius: 4px;
      margin: 0 auto;
      .sentence{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .title{
        height: 40px;
        font-size: 26px;
        font-family: 'Milonga', cursive;
        cursor: pointer;
      }
      p{
        font-family: 'Armata', sans-serif;
        color:#DCDEE2;
        font-size: 14px;
        margin-top: 10px;
        cursor: pointer;
      }
    }
    .ivu-menu-item{
      font-size: 15px;
    }
    .m-item{
      font-size: 15px;
      vertical-align: middle;
      padding-left: 4px;
      margin-right: 22px; 
    }
    .m-item2{
      font-size: 15px;
      vertical-align: middle;
      padding-left: 2px;
    }
  }
</style>
