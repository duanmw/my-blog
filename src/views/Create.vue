<template>
  <div class="wrap">
    <div class="create">
      <router-link to="/" tag="Button"><i class="fas fa-home fa-xs"></i> Home</router-link>
      <h2>This is an create page</h2>
      <Input placeholder="输入搜索" prefix="ios-search" clearable></Input>
      <br>
      <br>
      <transition enter-active-class="animated faldeIn" appear>
       
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>
        

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer
  },
  data() {
    return {
    }
  },
  methods: {
    
  },
  
};
</script> 

<style lang="less" scoped>
.create {
  width: 94%;
  padding: 20px;
  margin: 0 auto;
  background-color: #ffffff;

}
</style>
