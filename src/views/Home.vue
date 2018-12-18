<template>
  <div class="layout">
    <Row :gutter="24">
      <!-- <Col span="4" offset="2" class="layout-menu-left"> -->
      <Col :sm="{ span: 4, offset: 0 }" :md="{ span: 4, offset: 2 }" :lg="{ span: 4, offset: 3 }" class="layout-menu-left">
          <div class="layout-logo-left">DUAN'S NOTES</div>
        <Menu active-name="1" theme="light" width="auto" :open-names="['2']">
          <MenuItem name="1">
            <Icon type="md-planet" /><span class="m-item">首页</span>
          </MenuItem>
         
          <Submenu name="2">
            <template slot="title">
              <Icon type="md-filing" /></Icon><span class="m-item2">分类</span>
            </template>
            <MenuItem name="2-1"><Icon type="logo-github" /><span class="m-item2">技术</span></MenuItem>
            <MenuItem name="2-2"><Icon type="md-film" /><span class="m-item2">影视</span></MenuItem>
          </Submenu>
        
          <MenuItem name="3">
            <Icon type="md-pricetag" /><span class="m-item">标签</span>
          </MenuItem>
          <MenuItem name="4">
            <Icon type="md-settings" /><span class="m-item">管理</span>
          </MenuItem>
          <MenuItem name="5">
            <Icon type="md-document" /><span class="m-item">创作</span>
          </MenuItem>
          
        </Menu>
      </Col>
      <Col :sm="{ span: 18}" :md="{ span: 16 }" :lg="{ span: 15}">
        <div class="layout-content">
          <div class="card-box">
            <Card v-for="i in list" :key="i.id"  :padding="16">
              <p slot="title"><Icon type="md-book"></Icon> {{i.title}}</p>
              <p slot="extra">updated by <Icon type="ios-contact"></Icon> 2018/12/12 12:00</p>
              <div v-if="titleImg" class="img-box"></div>
              <div class="content-box" :class="{ 'have-img': titleImg }">
                <Row class-name="tag-row">
                  <Col span="24">
                  <span>标签：</span>
                    <Tag v-for="it in i.tag" :key="it" color="blue">{{it}}</Tag>
                    <Tag type="border" color="#FFA2D3">Custom Color</Tag>
                  </Col>
                </Row>
                <Row class-name="main-content">
                  <Col span="24">
                  <p>{{i.text}}</p>
                  </Col>
                </Row>
                <Row class-name="bottom-content">
                  <Col span="2">
                    <Icon type="md-eye"></Icon>1
                  </Col>
                  <Col span="2">
                    <Icon type="ios-chatbubbles"></Icon>2
                  </Col>
                  <Col span="8" offset="12">
                    <Button>
                      <router-link to="/about" tag="p">查看全文</router-link>
                    </Button>
                  </Col>
                </Row>
              </div>
              <div class="clear"></div>
            </Card>
          </div>
        </div>
        <div class="layout-copy">2018-2018 &copy; duanmingwang</div>
      </Col>
    </Row>
  </div>
</template>
<script>

export default {
  data(){
    return{
      titleImg:true,
      list:[
        {
        id:1,
        title:"this is title11 title11title11",
        text:"content akfdmsdlajnvlja",
        tag:['vue','angular','react']
      },
      {
        id:2,
        title:"this is title22",
        text:"content akfdmsdlajnvlja",
        tag:['vue','angular','react']
      },
      {
        id:3,
        title:"this is title33",
        text:"content akfdmsdlajnvlja",
        tag:['vue','angular','react']
      },
      ]
    }
  }
};
</script>

<style scoped lang="less">
.layout {
  min-width: 900px;
  border: 1px solid #80a2c9;
  background: #f5f7f9;
  position: relative;
  .layout-menu-left {
    // width: 90%;
    text-align: center;
    min-width: 200px;
    >.ivu-menu{
      border-left: 1px solid #DCDEE2;
      border-bottom: 1px solid #DCDEE2;
    }
    .layout-logo-left {
      width: 100%;
      height: 80px;
      line-height: 80px;
      color: #e3e4e3;
      border: 1px solid #3c3939;
      background: #3c3939;
      // border-radius: 4px;
      margin: 0 auto;
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
  
}

.layout-content {
  min-height: 200px;
  // min-width: 720px;
  padding:15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  .card-box{
    width: 92%;
    margin: 0 auto;
    .ivu-card{
      margin-bottom: 30px;
      .ivu-card-head p{
        color: #3B404B;
        font-size: 18px;
      }
    }
    .img-box{
      width: 192px;
      height: 108px;
      border: 1px dotted #cccccc;
      float: left;
    }
    .content-box{
      float: left;
      padding-left: 20px;
      width: 100% ;
      .main-content{
        margin: 14px 0;
        white-space: nowrap; 
        overflow: hidden; 
        text-overflow: ellipsis;  /* 溢出的部分用省略号替代*/
      }
      .bottom-content{
        // line-height: 30px;
        text-align: right;
        .ivu-col-span-2{
          margin-top: 10px;
        }
        .ivu-col-span-2{
          margin-top: 10px;
        }
      }
    }
    .have-img{/*如果有图片，减去图片的宽度*/
      width: calc(100% - 192px);
    }
  }
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
