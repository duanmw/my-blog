<template>
  <Card v-for="i in list" :key="i.id" :padding="16">
    <p slot="title">
      <Icon type="md-book"></Icon>
      {{i.title}}
    </p>
    <p slot="extra">updated by
      <Icon type="ios-contact"></Icon>2018/12/12 12:00
    </p>
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
          <router-link to="/about" tag="Button">查看全文</router-link>
        </Col>
      </Row>
    </div>
    <div class="clear"></div>
  </Card>
</template>
<script>
export default {
  name: "InfoCard",
  props: {
    data: Object
  }
};
</script>
<style lang="less" scoped>
</style>

