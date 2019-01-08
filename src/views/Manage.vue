<template>
  <div class="wrap">
    <div class="manage">
      <Row class-name="title-row">
        <Col span="3">
          <router-link to="/" tag="Button">
            <i class="fas fa-home fa-xs"></i> Home
          </router-link>
        </Col>
        <Col span="18">
          <h2>管理文章</h2>
        </Col>
      </Row>
      <Input
        placeholder="输入搜索"
        prefix="ios-search"
        v-model="searchStr"
        @on-change="changeInput"
        clearable
      ></Input>
      <br>
      <br>
      <transition enter-active-class="animated faldeIn" appear>
        <Table :data="tableData" :columns="tableColumns1" disabled-hover stripe>
          <template slot-scope="{ row }" slot="tags">
            <span v-if="row.tags.length==0">&nbsp;无</span>
            <span v-else>
              <Tag v-for="i in row.tags" :key="i" type="border" color="default">{{ i }}</Tag>
            </span>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <router-link :to="'/Create?id='+row.id" tag="div" class="edit-btn">
              <Button type="primary" size="small" >
                <i class="fas fa-edit fa-xs"></i>编辑
              </Button>
            </router-link>
            <Button icon="md-trash" type="error" size="small" @click="remove(row.title,row.id)">删除</Button>
          </template>
        </Table>
      </transition>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page
            :total="totalNum"
            show-total
            :current="1"
            :page-size="pageSize"
            @on-change="changePage"
          ></Page>
        </div>
      </div>
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
      searchStr: "",
      tableData: [],
      tableDataAll: [[]],
      totalNum: 0, //总条数
      pageSize: 8, //每页条数
      tableColumns1: [
        {
          title: "标题",
          key: "title",
          // slot: 'name',
          // className: 'title-col',
          minWidth: 100,
          ellipsis: true,
          tooltip: true,
          sortable: true
        },
        { title: "标签", key: "tags", slot: "tags", minWidth: 100 },
        {
          title: "Updated Time",
          key: "last_time",
          sortable: true
        },
        {
          title: "Action",
          key: "action",
          slot: "action",
          className: "btn-col",
          // minWidth: 0,
          width:200
        }
      ]
    };
  },
  methods: {
    edit(id) {

    },
    remove(title, id) {
      this.$Modal.confirm({
        title: "确认删除",
        content:
          "<p class='confirm-tip'>删除不可撤销，是否确认文章：" +
          title +
          "</p>",
        width: 360,
        onOk: () => {
          this.$Spin.show(this.renderLoading);
          let that = this;
          this.axios
            .get("http://localhost:8080/MyBlog/deleteArticle?id=" + id)
            .then(function(res) {
              that.$Spin.hide();
              that.getData();
              // that.tableData = that.tableDataAll[0]
              if (res.status == "200") {
                that.$Message.success(res.data.msg);
              } else {
                that.$Message.error(res.data.msg);
              }
            });
        },
        onCancel: () => {
          this.$Message.info("取消删除");
        }
      });
    },
    changePage(page) {
      this.tableData = this.tableDataAll[page - 1]; //页码从1开始，变索引要减1
    },
    getData() {
      this.$Spin.show(this.renderLoading);
      let that = this;
      this.axios
        .get("http://localhost:8080/MyBlog/getArticle")
        .then(function(res) {
          that.totalNum = res.data.length;
            if (that.totalNum == 0) {//无数据清空变量
            that.tableDataAll = [[]]
            that.tableData = []
            that.$Spin.hide()
            return
          }
          let pageNum = Math.ceil(that.totalNum / that.pageSize);
          for (let i = 0; i < pageNum; i++) {
            that.tableDataAll[i] = []; //初始化！
          }
          res.data.forEach((item, index) => {
            let obj = {};
            obj.id = item.id;
            obj.title = item.title;
            // obj.type = item.type
            item.tags == ""
              ? (obj.tags = [])
              : (obj.tags = item.tags.split(","));
            obj.last_time = item.create_time;
            if (item.update_time) {
              obj.last_time = item.update_time;
            }
            let i = Math.floor(index / that.pageSize);//分页处理
            that.tableDataAll[i].push(obj);
          });
          that.tableData = that.tableDataAll[0];
          that.$Spin.hide();
        });
    },
    changeInput() {
      if (this.searchStr == "") {
        this.pageSize=8
        this.getData();
      }
      if (this.searchStr.trim().length > 0) {
        this.search();
      }
    },
    search() {
      let str = this.searchStr.trim().toLowerCase();
      let resultArr = [];
      this.tableDataAll.forEach(element => {
        let result = element.filter(item => {
          return (
            item.title.toLowerCase().indexOf(str) >= 0 ||
            item.tags.includes(str)
          );
        });
        resultArr = resultArr.concat(result);
      });
      // console.log(resultArr)
      this.tableData = resultArr;
      this.totalNum = this.pageSize = resultArr.length;//搜索结果不采用分页
    }
  },
  created() {
    this.getData();
  }
};
</script> 

<style lang="less" scoped>
.manage {
  width: 94%;
  padding: 20px;
  margin: 0 auto;
  background-color: #ffffff;
  .fa-home {
    // color: #767b86;
    margin-right: 4px;
  }
  .title-row {
    margin-bottom: 18px;
    h2 {
      text-align: center;
    }
  }
  .btn-col {
    .edit-btn {
      display: inline-block;
      margin: 1px 8px 2px 0;
      .fas {
        margin-right: 5px;
      }
    }
    .ivu-btn-error {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
    }
    .ivu-btn-error:hover {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
}
</style>
