<template>
  <div class="layout-main">
    <div class="layout-content">
      <InfoCard :data="list"></InfoCard>
      <!-- <div class="card-box">
            <transition-group enter-active-class="animated fadeInUp"  tag="p" appear>
              <Card v-for="i in list" :key="i.id"  :padding="16">
                <p slot="title"><Icon type="md-book"></Icon> {{i.title}}</p>
                <p slot="extra">updated by <Icon type="ios-contact"></Icon> 2018/12/12 12:00</p>
                <div v-if="titleImg" class="img-box"></div>
                <div class="content-box" :class="{ 'have-img': titleImg }">
                  <Row class-name="tag-row">
                    <Col span="24">
                    <span>标签：</span>
                      <Tag v-for="it in i.tag" :key="it" type="border" color="blue">{{it}}</Tag>
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
                        <router-link to="/about" tag="Button">查看全文</router-link>
                    </Col>
                  </Row>
                </div>
                <div class="clear"></div>
              </Card>
            </transition-group>
      </div>-->
    </div>
    <div class="layout-copy">2018-2018 &copy; duanmingwang</div>
  </div>
</template>
<script>
import InfoCard from "../components/InfoCard.vue";
export default {
  name: "Home",
  components: {
    InfoCard
  },
  data() {
    return {
      titleImg: true,
      list: [
        {
          id: 1,
          title: "this is title11 title11title11",
          text: "content akfdmsdlajnvlja",
          tag: ["vue", "angular", "react"]
        },
        {
          id: 2,
          title: "this is title22",
          text: "content akfdmsdlajnvlja",
          tag: ["vue", "angular", "react"]
        },
        {
          id: 3,
          title: "this is title33",
          text: "content akfdmsdlajnvlja",
          tag: ["vue", "angular", "react"]
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.layout {
  // min-width: 900px;
  // border: 1px solid #80a2c9;
  // background: #f5f7f9;
  // position: relative;
}
.clear {
  clear: both;
}
.layout-content {
  // min-height: 200px;
  // min-width: 720px;
  padding: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  // .card-box{
  //   width: 92%;
  //   margin: 0 auto;
  //   .ivu-card{
  //     margin-bottom: 30px;
  //     .ivu-card-head p{
  //       color: #3B404B;
  //       font-size: 18px;
  //     }
  //   }
  //   .img-box{
  //     width: 192px;
  //     height: 108px;
  //     border: 1px dotted #cccccc;
  //     float: left;
  //   }
  //   .content-box{
  //     float: left;
  //     padding-left: 20px;
  //     width: 100% ;
  //     .main-content{
  //       margin: 14px 0;
  //       white-space: nowrap;
  //       overflow: hidden;
  //       text-overflow: ellipsis;  /* 溢出的部分用省略号替代*/
  //     }
  //     .bottom-content{
  //       // line-height: 30px;
  //       text-align: right;
  //       .ivu-col-span-2{
  //         margin-top: 10px;
  //       }
  //       .ivu-col-span-2{
  //         margin-top: 10px;
  //       }
  //     }
  //   }
  //   .have-img{/*如果有图片，减去图片的宽度*/
  //     width: calc(100% - 192px);
  //   }
  // }
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
</style>
