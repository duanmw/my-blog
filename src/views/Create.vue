<template>
  <div class="wrap">
    <transition enter-active-class="animated faldeIn" appear>
      <div class="create">
        <Row>
          <Col span="3">
            <Button @click="returnConfirm">
              <i class="fas fa-home fa-xs"></i> &nbsp;Home
            </Button>
          </Col>
          <Col span="18" class-name="tags-row">
            <!-- <div class="tags-row"> -->
            <Tag v-for="i in tags" :key="i" :name="i" closable @on-close="handleClose">{{i}}</Tag>
            <Input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @on-keyup.enter="handleInputConfirm"
              @on-blur="handleInputConfirm"
            ></Input>
            <Button v-else class="btn-new-tag" size="small" @click="showInput">+ 添加标签</Button>
            <!-- </div> -->
          </Col>
        </Row>
        <Input v-model="title" class="title" :maxlength="30" placeholder="输入标题" clearable>
          <Select v-model="type" slot="prepend" style="width:80px">
            <Option value="tec">技术</Option>
            <Option value="mov">影视</Option>
          </Select>
        </Input>
        <!-- <transition enter-active-class="animated faldeIn" appear></transition> -->
        <Editor @getData="getData" :contentData="content"></Editor>
        <div class="save-btn">
          <div v-if="updateArticle">
            <Button type="primary" @click="updateContent">保存更新</Button>
          </div>
          <div v-else>
            <Button type="primary" @click="saveContent">保存</Button>
          </div>
        </div>
      </div>
    </transition>
    <Footer></Footer>
  </div>
</template>
        

<script>
import Footer from "../components/Footer.vue";
import Editor from "../components/Editor.vue";
import qs from "qs";

export default {
  components: {
    Footer,
    Editor
  },
  data() {
    return {
      inputVisible: false,
      inputValue: "",
      id: "",
      type: "tec",
      title: "",
      tags: [],
      content: "",
      updateArticle: false
    };
  },
  methods: {
    returnConfirm() {
      if (this.title || this.content) {
        this.$Modal.confirm({
          title: "放弃保存",
          content: "<p>当前页还存在内容，是否不保存直接返回？</p>",
          width: 360,
          onOk: () => {
            this.$router.push({ path: "/" });
          },
          onCancel: () => {
            this.$Message.info("点击了取消");
          }
        });
      } else {
        this.$router.push({ path: "/" });
      }
    },
    getData(data) {
      this.content = data;
    },
    saveContent() {
      if (this.title.trim() == "") {
        this.$Message.warning("标题不能为空！");
      } else {
        if (this.content.trim() == "") {
          this.$Message.warning("内容为空！");
        } else {
          this.$Spin.show(this.renderLoading);
          // console.log("savedata:", this.content);
          // this.setContent(this.content);
          var data = qs.stringify({
            title: this.title,
            type: this.type,
            tags: this.tags.join(","),
            content: this.content,
            create_time: this.formatDate()
          });
          let that = this;
          axios({
            method: "post",
            // url: '/api/addArticle',
            url: "http://localhost:8080/MyBlog/addArticle",
            data: data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
            .then(function(res) {
              that.$Spin.hide();
              if (res.status == "200") {
                that.$Message.success(res.data.msg);
                setTimeout(function() {
                  that.$Modal.confirm({
                    title: "前往查看",
                    content: "<p>文章保存成功，是否立即前往查看？</p>",
                    width: 340,
                    onOk: () => {
                      that.$router.push({
                        path: "/article?title=" + that.title
                      });
                    },
                    onCancel: () => {
                      // that.$Message.info('点击了取消')
                    }
                  });
                }, 700);
              } else that.$Message.error(res.data.msg);
            })
            .catch(function(res) {
              console.log(res);
              that.$Message.warnning("遇到问题");
            });
        }
      }
    },
    updateContent() {
      if (this.title.trim() == "") {
        this.$Message.warning("标题不能为空！");
      } else {
        if (this.content.trim() == "") {
          this.$Message.warning("内容为空！");
        } else {
          this.$Spin.show(this.renderLoading);
          // console.log("savedata:", this.content);
          // this.setContent(this.content);
          var data = qs.stringify({
            id: this.id,
            title: this.title,
            type: this.type,
            tags: this.tags.join(","),
            content: this.content,
            update_time: this.formatDate()
          });
          let that = this;
          axios({
            method: "post",
            // url: '/api/addArticle',
            url: "http://localhost:8080/MyBlog/updateArticle",
            data: data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
            .then(function(res) {
              that.$Spin.hide();
              if (res.status == "200") {
                that.$Message.success(res.data.msg);
                setTimeout(function() {
                  that.$Modal.confirm({
                    title: "前往查看",
                    content: "<p>更新文章成功，是否立即前往查看？</p>",
                    width: 340,
                    onOk: () => {
                      that.$router.push({
                        path: "/article?title=" + that.title
                      });
                    },
                    onCancel: () => {
                      // that.$Message.info('点击了取消')
                    }
                  });
                }, 700);
              } else that.$Message.error(res.data.msg);
            })
            .catch(function(res) {
              console.log(res);
              that.$Message.warnning("遇到问题");
            });
        }
      }
    },
    formatDate(pattern = "") {
      var dt = new Date();
      var y = dt.getFullYear();
      var m = (dt.getMonth() + 1).toString().padStart(2, "0");
      var d = dt
        .getDate()
        .toString()
        .padStart(2, "0");
      if (pattern.toLowerCase() === "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
      } else {
        var hh = dt
          .getHours()
          .toString()
          .padStart(2, "0");
        var mm = dt
          .getMinutes()
          .toString()
          .padStart(2, "0");
        var ss = dt
          .getSeconds()
          .toString()
          .padStart(2, "0");
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
      }
    },
    handleClose(event, name) {
      let index = this.tags.indexOf(name);
      this.tags.splice(index, 1);
    },
    showInput() {
      if (this.tags.length < 5) {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      } else {
        this.$Message.warning("标签最多只能有5个");
      }
    },
    handleInputConfirm() {
      let inputValue = this.inputValue.trim();
      if (inputValue && this.tags.indexOf(inputValue) < 0) {
        this.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  created() {
    let that = this;
    if (this.$route.query.id) {
      this.axios
        .get(
          "http://localhost:8080/MyBlog/getOneById?id=" + this.$route.query.id
        )
        .then(function(res) {
          that.updateArticle = true;
          console.log("datas:", res.data);
          that.id = res.data.id;
          that.content = res.data.content;
          that.type = res.data.type;
          that.title = res.data.title;
          that.content = res.data.content;
          if (res.data.tags == "") {
            that.tags = [];
          } else {
            that.tags = res.data.tags.split(",");
          }
          // for (let key in res.data) {
          //   if (res.data.hasOwnProperty(key)) {
          //     that.obj[key] = res.data[key];
          //   }
          // }
          // if (that.obj.tags == "") {
          //   that.obj.tags = [];
          // } else {
          //   that.obj.tags = that.obj.tags.split(",");
          // }
        });
    }
  }
};
</script> 

<style lang="less" scoped>
.create {
  width: 93%;
  padding: 20px 30px;
  margin: 0 auto;
  background-color: #ffffff;
  .tags-row {
    text-align: center;
    padding-top: 7px;
    .ivu-tag {
      margin-right: 8px;
    }
    .input-new-tag {
      width: 74px;
      margin: 1px;
    }
    .btn-new-tag {
      margin: 1px;
    }
  }
  .title {
    margin-top: 20px;
  }
  // .my-editor {
  //   margin-top: 22px;
  // }
  .save-btn {
    text-align: center;
  }
}
</style>
