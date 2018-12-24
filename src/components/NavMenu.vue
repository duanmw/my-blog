<template>
  <div class="layout-menu-left">
    <div class="layout-logo-left">
      <div class="title" @click="change" onselectstart="return false;">Duan's Notes</div>  
        <Tooltip placement="bottom" max-width="170">
         <p class="p-content">{{sentence.content}}</p>
          <div slot="content"> 
            <p style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
              <span style="cursor: pointer;padding-right: 6px;">
                <Icon v-if="isPlaying" type="md-pause" @click="stop" />
                <Icon v-else type="md-play" @click="play"/>
              </span>
              <span style="padding-top:3px;">{{sentence.content}}</span>
            </p>
            <div class="line"></div>
            <p>{{sentence.note}}</p>
            <audio id="audio" preload="none" :src="sentence.tts" @ended="playEnd"></audio>
          </div>
        </Tooltip>
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
    activeItem:String//选中项
  },
  data(){
    return{
      canChange:false,
      sentence: {
        content:"Happy every day.",
        note:"今天也要哈哈哈",
        tts:""
      },
      isPlaying:false
    }
  },
  methods:{
    /**
     * 切换“每日一句”
     */
    change(){
      if(this.canChange){
        this.canChange=false
        this.isPlaying=false//只要切换句子就重置播放状态为false
        let that=this
        let randomDate=this.getDateStr(-Math.floor(Math.random()*100+1))
        axios.get("/api?date="+randomDate).then(function(res) {
          that.sentence=res.data
        });
        setTimeout(()=>{this.canChange=true},2000)//点击后2s才可再次切换
      }
    },
    /**
     * 获取AddDayCount天后的格式化日期
     */
    getDateStr(addDayCount=0) { 
      var dd = new Date(); 
      dd.setDate(dd.getDate()+addDayCount);//获取AddDayCount天后的日期 
      var y = dd.getFullYear(); 
      var m = dd.getMonth()+1;//获取当前月份
      var d = dd.getDate(); 
      return y+"-"+m+"-"+d; 
    } ,
    /**
     * 播放音频
     */
    play(){
        let audio =document.querySelector('#audio');
        if(!this.isPlaying){
            audio.play();
            this.isPlaying = true;
        }
    },
    /**
     * 停止音频
     */
    stop(){
        let audio =document.querySelector('#audio');
        if(this.isPlaying){
            audio.pause();
            audio.currentTime = 0;
            this.isPlaying = false;
        }
    },
    playEnd(){
      this.isPlaying = false;
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
      that.canChange=true//现在可以改变句子
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
      color: #ffffff;
      border: 1px solid #393E46;
      background: #393E46;  
      .title{
        height: 40px;
        margin-top: 6px;
        font-size: 26px;
        font-family: 'Milonga', cursive;
        cursor: pointer;
      }
      .p-content{
        font-family: 'Armata', sans-serif;
        color:#DCDEE2;
        font-size: 13px;
        margin-top: 10px;
        padding: 0 6px 4px;
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
