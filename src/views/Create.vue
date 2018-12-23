<template>
  <div class="wrap">
    <div class="create">
      <router-link to="/" tag="Button">
        <i class="fas fa-home fa-xs"></i> Home
      </router-link>
      <h2>This is an create page</h2>
      <Input placeholder="输入搜索" prefix="ios-search" clearable></Input>
      <br>
      <br>
      <transition enter-active-class="animated faldeIn" appear></transition>
      <quill-editor
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
      <!-- <editor></editor> -->
    </div>
    <Footer></Footer>
  </div>
</template>
        

<script>
import Footer from "../components/Footer.vue";
// import editor from "../components/editor.vue";
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    Footer,
    // editor
  },
  data() {
    return {
      content: `<p class="ql-align-justify">qweqas</p><p class="ql-align-justify">	123</p><p class="ql-align-justify ql-indent-1">qw</p><p class="ql-align-justify ql-indent-1"><br></p>`,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline"], //加粗，斜体，下划线
            [{ header: [1, 2, 3, 4, 5, false] }], //几级标题
            ["blockquote", "code-block"], //引用，代码块
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ['link',"image", "video"] //链接，上传图片、上传视频
          ]
        },
        theme: "snow"
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      //失去焦点事件
    },
    onEditorFocus(editor) {
      //获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      //编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.content);
    }
  }
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
