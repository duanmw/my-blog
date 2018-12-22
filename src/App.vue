<template>
  <div id="app">
    <transition  enter-active-class="animated fadeInUp" appear>
      <Row class-name="layout">
        <Col
          :xs="{ span: 4}"
          :sm="{ span: 4}"
          :md="{ span: 5, offset: 1 }"
          :lg="{ span: 4, offset: 2 }"
          class-name="layout-left"
        >
        <!-- <keep-alive> -->
          <router-view name="navmenu" :activeItem="activeItem"></router-view>
        <!-- </keep-alive> -->
        </Col>
        <!-- <Col :xs="{ span: 19}" :sm="{ span: 16, offset: 0}" :md="{ span: 16, offset: 0 }" :lg="{ span: 15, offset: 0}"> -->
        <Col
          :xs="{ span: 18, offset: 5}"
          :sm="{ span: 18, offset: 5}"
          :md="{ span: 17, offset: 6 }"
          :lg="{ span: 16, offset: 6}"
          class-name="layout-right"
        >
          <router-view name="main"></router-view>
        </Col>
        <Col span="24"><router-view></router-view></Col>
      </Row>
    </transition>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data(){
    return{
      activeItem:"home"
    }
  },
  watch:{
    $route(to,from){
      console.log(to.path);
      switch (to.path) {
        case "/":
          this.activeItem="home"
          break;
        case "/tags":
          this.activeItem="tags"
          break;
        case "/technology":
          this.activeItem="technology"
          break;
        case "/movies":
          this.activeItem="movies"
          break;
        default:
          this.activeItem="home"
          break;
      }
    }
  },
};
</script>

<style scoped lang="less">
#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
}
.layout {
  // width:100%;
  min-height: 100%;
  box-sizing: border-box;
  min-width: 900px;
  background: #f5f7f9;
  .layout-left {
    // z-index: 1;
    min-width: 180px;
    height: 100%;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0px;
    text-align: center;
  }
  .layout-right {
    // min-height:100%;
    // background-color: #ffffff;
    padding-left: 20px;
  }
}
</style>
