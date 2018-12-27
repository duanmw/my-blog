<template>
  <div class="wrap">
    <transition enter-active-class="animated faldeIn" appear>
      <div class="article">
        <router-link to="/" tag="Button">
          <i class="fas fa-home fa-xs"></i> &nbsp;Home
        </router-link>
        <div class="title">{{obj.title}}</div>
        <div class="tag-row">
          <span>标签：</span>
          <Tag v-for="it in obj.tags" :key="it" :color="getRandomColor()">{{it}}</Tag>
          <span class="v-line"></span>
          <span class="datetime" v-if="obj.update_time!=''">updated by
            <Icon type="ios-contact"></Icon>
            {{obj.update_time}}
          </span>
          <span class="datetime" v-else>created by
            <Icon type="ios-contact"></Icon>
            {{obj.create_time}}
          </span>
        </div>
        <div class="line"></div>
        <div class="ql-container ql-snow">
          <div class="ql-editor">
            <div v-html="obj.content"></div>
          </div>
        </div>

        <!-- <quill-editor v-model="obj.content" :options="{ theme: 'bubble'}"></quill-editor> -->
      </div>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
// import Footer from '../components/Editer.vue'
export default {
  components: {
    Footer
    // Editor
  },
  data() {
    return {
      obj: {
        title: "",
        type: "",
        tags: [],
        content: "",
        create_time: "",
        update_time: ""
      }
    };
  },
  methods: {},
  created() {
    let that = this;
    console.log(this.$route.query.title);
    this.axios
      .get(
        "http://localhost:8080/MyBlog/showArticle?title=" +
          decodeURI(this.$route.query.title)
      )
      .then(function(res) {
        console.log("datas:", res.data);

        for (let key in res.data) {
          if (res.data.hasOwnProperty(key)) {
            that.obj[key] = res.data[key];
          }
        }
        if (that.obj.tags == "") {
          that.obj.tags = [];
        } else {
          that.obj.tags = that.obj.tags.split(",");
        }
      });
  }
};
</script>

<style lang="less" scoped>
.ql-container.ql-snow{
  border: none;
  padding: 0 10px;
}
.article {
  width: 93%;
  min-height: 550px;
  padding: 20px 30px;
  margin: 0 auto;
  background-color: #ffffff;
  // border: 1px solid #ccc;
  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin: 16px;
  }
  .tag-row {
    font-size: 14px;
    text-align: center;
    margin-bottom: 16px;
    .v-line {
      display: inline-block;
      height: 10px;
      margin: 0 20px;
      border-right: 1px solid #bbbbbb;
    }
    // .datetime {
    //   display: inline-block;
    //   margin-left: 30px;
    // }
  }
  .line {
    width: 98%;
    padding: 10px;
    border-top: 1px solid #dddddd;
  }
}
</style>
