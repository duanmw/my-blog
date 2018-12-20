<template>
  <div id="app">
    <router-view></router-view>
    <transition :duration="500" enter-active-class="animated fadeInUp" mode="out-in" appear>
      <Row :gutter="24" class-name="layout">
        <Col
        :xs="{ span: 4}"
          :sm="{ span: 4}"
          :md="{ span: 4, offset: 2 }"
          :lg="{ span: 4, offset: 3 }"
          class-name="layout-left"
        >
          <router-view name="navmenu"></router-view>
        </Col>
        <Col :xs="{ span: 19}" :sm="{ span: 16, offset: 0}" :md="{ span: 16, offset: 0 }" :lg="{ span: 15, offset: 0}">
          <router-view name="main"></router-view>
        </Col>
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
  }
};
</script>

<style scoped lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.layout {
  min-width: 920px;
  // border: 1px solid #d60e2f;
  background: #f5f7f9;
  position: relative; 
  .layout-left {
    // color: red;
    // width: 100%;
    // min-width: 190px;
    text-align: center;
  }
}

</style>
