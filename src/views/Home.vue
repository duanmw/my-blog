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
      list: []
    };
  },
  methods: {
    setContent(content) {
      let firstIndex,
        secondIndex,
        str = "";
      // var ;
      for (let i = 1; i <= 3; i++) {
        firstIndex = content.indexOf("<h" + i + ">");
        if (firstIndex < 0) continue;
        secondIndex = content.indexOf("</h" + i + ">", firstIndex + 4);
        let substr = content.substring(firstIndex + 4, secondIndex);
        str == "" ? (str = substr) : (str = str + " .. " + substr);
        str = str.replace("<br>", "");
        if (str.length >= 15) break;
      }
      if (str.length < 15) {
        firstIndex = content.indexOf("<p>");
        if (firstIndex < 0) return str;
        secondIndex = content.indexOf("</p>", firstIndex + 3);
        let substr = content.substring(firstIndex + 3, secondIndex);
        str == "" ? (str = substr) : (str = str + " ... " + substr);
        str = str.replace("<br>", "");
      }
      console.log(str);
      return str;
      // this.content=str
    }
  },
  created() {
    let that = this;
    axios({
      method: "get",
      url: "http://localhost:8080/MyBlog/getArticle"
    }).then(function(res) {
      console.log(res.data);
      res.data.forEach(item => {
        let obj = {};
        obj.id = item.id;
        obj.title = item.title;
        obj.type = item.type;
        item.tags == "" ? (obj.tags = []) : (obj.tags = item.tags.split(","));
        obj.content = that.setContent(item.content);
        obj.create_time = item.create_time;
        obj.update_time = item.update_time;
        let firstIndex = item.content.indexOf('"data:image');
        if(firstIndex>=0){
          let secondIndex = item.content.indexOf('"', firstIndex + 20);
          let imgstr = item.content.substring(firstIndex+1, secondIndex);
          console.log(imgstr)
          obj.img=imgstr

        }
        // boj.imgtest = substr //testimg
        that.list.push(obj);
      });
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
