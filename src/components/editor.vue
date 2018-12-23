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
import VueQuillEditor, { Quill } from "vue-quill-editor";
// import VueQuillEditor from 'vue-quill-editor'
// import Quill from 'quill'
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);

export default {
  data() {
    return {
      name: "register-modules-example",
      content: `<p>testestest</p>
                  <br><pre class="ql-syntax" spellcheck="false">const a = 10;<br>const editorOption = { highlight: text => hljs.highlightAuto(text).value };</pre>
                  <p><strong><em>Or drag/paste an image here.</em></strong></p>`,
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
            ["link", "image", "video"] //链接，上传图片、上传视频
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
        }
      }
    };
  },
  mounted() {
    this.content =
      `<p><strong><em>Click on the Image Below to resize!</em></strong></p><br>` +
      this.content;
  },
  computed: {
    // contentCode() {
    //   // return hljs.highlightAuto(this.content).value
    // },
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
      console.log(this.content);
    }
  }
};
</script>

<style>
/* .quill-editor:not(.bubble) .ql-container,
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 30rem;
  padding-bottom: 1rem;
} */
</style>

<style lang="less" scoped>
.quill-editor {
  width: 96%;
  height: 10rem;
  margin: 0 auto;
  .ql-container .ql-editor {
    // height: 10rem !important;
  }
}

// .quill-editor,
// .quill-code {
//   width: 50%;
//   float: left;
// }
// .quill-code {
//   height: auto;
//   border: none;
//   > .title {
//     border: 1px solid #ccc;
//     border-left: none;
//     height: 3em;
//     line-height: 3em;
//     text-indent: 1rem;
//     font-weight: bold;
//   }
// }
</style>