<template>
  <div class="wrap">
    <div class="layout-content">
      <InfoCard :data="list"></InfoCard>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import InfoCard from "../components/InfoCard.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    InfoCard,
    Footer
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
  },
  created() {
    axios({
      method: "get",
      url: "/api"
    }).then(function(res) {
      console.log(res.data);
    });
  }
};
</script>

<style scoped lang="less">
.clear {
  clear: both;
}
.layout-content {
  padding: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
</style>
