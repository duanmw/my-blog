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
      list: [
        {
          id: 0,
          title: "this is title11 title11title11",
          type: "",
          tags: ["vue", "angular", "react"],
          content: "content akfdmsdlajnvlja"
        }
      ]
    };
  },
  methods: {
    setContent(content) {
      let firstIndex, secondIndex,str = "";
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
        secondIndex = content.indexOf("</p>", firstIndex + 3);
        let substr = content.substring(firstIndex + 3, secondIndex);
        str == "" ? (str = substr) : (str = str + " ... " + substr);
        str = str.replace("<br>", "");
      }
      console.log(str);
      return str
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
        obj.tags = item.tags.split(",");
        obj.content = that.setContent(item.content);    
        that.list.push(obj)
      });
      // that.sentence=res.data
      // that.canChange=true//现在可以改变句子
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
