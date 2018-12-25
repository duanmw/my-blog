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
        <Input v-model="title" class="title" :maxlength="20" placeholder="输入标题" autofocus clearable></Input>
        <br>
        <!-- <transition enter-active-class="animated faldeIn" appear></transition> -->
        <Editor @getData="getData"></Editor>
        <div class="save-btn">
          <Button type="primary" @click="saveContent">保存</Button>
        </div>
      </div>
    </transition>
    <Footer></Footer>
  </div>
</template>
        

<script>
import Footer from "../components/Footer.vue";
import Editor from "../components/Editor.vue";

export default {
  components: {
    Footer,
    Editor
  },
  data() {
    return {
      inputVisible: false,
      inputValue: "",
      title: "",
      tags: [],
      content: ""
    };
  },
  methods: {
    returnConfirm() {
      if (this.title || this.content) {
        this.$Modal.confirm({
          title: "放弃保存",
          content: "<p>您还有未保存内容，是否直接返回？</p>",
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
          console.log("savedata:", this.content);
          this.setContent(this.content);
          // axios
          //   .post("/addArticle", {
          //     title: this.title,
          //     tags: this.tags,
          //     content: this.content
          //   })
          //   .then(function(res) {
          //     console.log("adddata",res.data);
          //   });
          //post ...title,tags,content,createtime,updatetime
          //if success
          this.$Message.success("保存成功！");
        }
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
  .my-editor {
    margin-top: 20px;
  }
  .save-btn {
    text-align: center;
  }
}
</style>
