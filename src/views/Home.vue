<template>
  <div class="layout">
    <Row type="flex" :gutter="16">
      <Col span="5" offset="2" class="layout-menu-left">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <div class="layout-logo-left">DUAN'S NOTES</div>
          <MenuItem name="1">
            <Icon type="md-planet" /><span class="m-item">首页</span>
          </MenuItem>
         
          <Submenu name="2">
            <template slot="title">
              <Icon type="md-filing" /></Icon>分类
              <!-- <Icon type="ios-analytics"></Icon>分类 -->
            </template>
            <MenuItem name="3-1"><Icon type="logo-github" />技术</MenuItem>
            <MenuItem name="3-2"><Icon type="ios-film" />影视</MenuItem>
          </Submenu>
          <MenuItem name="3">
            <Icon type="md-pricetag" /><span class="m-item">标签</span>
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-stopwatch" /><span class="m-item">管理</span>
          </MenuItem>
          <MenuItem name="5">
            <Icon type="md-document" /><span class="m-item">创作</span>
          </MenuItem>
          
        </Menu>
      </Col>
      <Col span="16">
        <div class="layout-header"></div>
        
        <div class="layout-content">
          <div class="layout-content-main">Content</div>
        </div>
        <div class="layout-copy">2018-2016 &copy; duanmingwang</div>
      </Col>
    </Row>
  </div>
</template>
<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  /* background: #464c5b; */
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 40px;
  line-height: 40px;
  color: #e3e4e3;
  background: #3c3939;
  border-radius: 4px;
  margin: 15px auto;
}
.m-item{
  /* padding-left: 10px;
  margin-right: 30px; */
}
</style>
