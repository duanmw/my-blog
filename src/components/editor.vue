<template>
  <div class="my-editor">
    <!-- quill-editor -->
    <quill-editor
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { Quill } from "vue-quill-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

export default {
  props: {
    contentData: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      name: "register-modules-example",
      content: "",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline"], //加粗，斜体，下划线
            [{ header: [1, 2, 3, false] }], //几级标题
            ["blockquote", "code-block"], //引用，代码块
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["link", "image"] //链接，上传图片、
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          },
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: "black",
              border: "none",
              color: "white"
            },
            modules: ["Resize", "DisplaySize", "Toolbar"]
          }
        },
        placeholder: "写点什么..."
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorChange({ editor, html, text }) {
      //编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      // console.log(this.content);
      this.$emit("getData", this.content);
    }
  },
  watch: {
    contentData: function(val) {
      this.content = val;
    }
  },
  mounted() {
    this.content = this.contentData;
  }
};
</script>

<style lang="less" scoped>
.my-editor {
  margin-top: 23px;
  .quill-editor {
    height: 22rem;
    padding-bottom: 3rem;
    margin: 15px auto 5px;
  }
}
</style>