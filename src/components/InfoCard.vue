<template>
  <div class="card-box">
    <transition-group enter-active-class="animated fadeInUp" tag="p" appear>
      <Card v-for="i in data" :key="i.id" :padding="16">
        <p slot="title">
          <Icon type="md-book"></Icon>
          {{i.title}}
        </p>
        <p v-if="i.update_time!=''" slot="extra">updated by
          <Icon type="ios-contact"></Icon>
          {{i.update_time}}
        </p>
        <p v-else slot="extra">created by
          <Icon type="ios-contact"></Icon>
          {{i.create_time}}
        </p>
        <div v-if="titleImg" class="img-box" :style="'background-image:url('+i.img+')'"></div>
        <div class="content-box" :class="{ 'have-img': titleImg }">
          <Row class-name="tag-row">
            <Col span="24">
              <span>标签：</span>
              <!-- <Tag v-for="it in i.tags" :key="it" color="blue">{{it}}</Tag> -->
              <Tag
                v-if="i.tags.length>0"
                v-for="it in i.tags"
                :key="it"
                :color="getRandomColor()"
              >{{it}}</Tag>
              <Tag v-if="i.tags.length<=0" type="border">无</Tag>
            </Col>
          </Row>
          <Row class-name="main-content">
            <Col span="24">
              <p>{{i.content}}</p>
            </Col>
          </Row>
          <Row class-name="bottom-content">
            <Col span="2">
              <i class="fas fa-eye fa-sm"></i>
              1
            </Col>
            <Col span="2">
              <i class="fas fa-comment-dots fa-sm"></i> 0
              <!-- <fa icon="comment-dots" size="sm"/> -->
            </Col>
            <Col span="8" offset="12">
              <router-link :to="'/article?title'+i.title" tag="Button">查看全文</router-link>
            </Col>
          </Row>
        </div>
        <div class="clear"></div>
      </Card>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: "InfoCard",
  props: {
    data: Array
  },
  data() {
    return {
      titleImg: true
    };
  }
};
</script>
<style lang="less" scoped>
.card-box {
  width: 92%;
  margin: 0 auto;
  .ivu-card {
    margin-bottom: 30px;
    .ivu-card-head p {
      color: #3b404b;
      font-size: 18px;
    }
  }
  .img-box {
    width: 192px;
    height: 108px;
    border: 1px dotted #cccccc;
    float: left;
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .content-box {
    float: left;
    padding-left: 20px;
    width: 100%;
    .main-content {
      margin: 14px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; /* 溢出的部分用省略号替代*/
    }
    .bottom-content {
      // line-height: 30px;
      text-align: right;
      .ivu-col-span-2 {
        margin-top: 10px;
      }
      .ivu-col-span-2 {
        margin-top: 10px;
      }
    }
  }
  .have-img {
    /*如果有图片，减去图片的宽度*/
    width: calc(100% - 192px);
  }
}
</style>

