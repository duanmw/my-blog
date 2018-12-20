<template>
  <div class="layout-menu-left">
    <div class="layout-logo-left">DUAN'S NOTES</div>
    <Menu active-name="1" theme="light" width="auto" :open-names="['2']">
      <MenuItem name="1" to="/">
        <Icon type="md-planet" /><span class="m-item">首页</span>
      </MenuItem>
      
      <Submenu name="2">
        <template slot="title">
          <Icon type="md-filing" /></Icon><span class="m-item2">分类</span>
        </template>
        <MenuItem name="2-1" to="/technology"><Icon type="logo-github" /><span class="m-item2">技术</span></MenuItem>
        <MenuItem name="2-2" to="/movies"><Icon type="md-film" /><span class="m-item2">影视</span></MenuItem>
      </Submenu>
    
      <MenuItem name="3" to="/tags">
        <Icon type="md-pricetag" /><span class="m-item">标签</span>
      </MenuItem>
      <MenuItem name="4" to="/manage">
        <Icon type="md-settings" /><span class="m-item">管理</span>
      </MenuItem>
      <MenuItem name="5" to="/create">
        <Icon type="md-document" /><span class="m-item">创作</span>
      </MenuItem>
      
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    msg: String,
  },
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
</style>
