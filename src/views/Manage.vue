<template>
  <div class="wrap">
    <div class="manage">
      <router-link to="/" tag="Button">Return</router-link>
      <h2>This is an manage page</h2>
      <Input placeholder="输入搜索" prefix="ios-search" clearable></Input>
      <Table :data="tableData1" :columns="tableColumns1" disabled-hover stripe>
        <!-- <template slot-scope="{ row }" slot="name">
      <strong>{{ row.name }}</strong>
        </template>-->
        <template slot-scope="{ row }" slot="tags">
          <Tag v-for="i in row.tags" :key="i" type="border" color="default">{{ i }}</Tag>
        </template>
        <!-- <template slot-scope="{ row }" slot="update">
        {{ row.update | formatDate}}
        </template>-->
        <template slot-scope="{ row, index }" slot="action">
          <router-link to="/article" tag="div" class="edit-btn">
            <Button icon="ios-create-outline" type="success" size="small" @click="edit(index)">编辑</Button>
          </router-link>
          <Button icon="md-trash" type="error" size="small" @click="remove(row,index)">删除</Button>
        </template>
      </Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
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
      tableData1: this.mockTableData1(),
      tableColumns1: [
        {
          title: "标题",
          key: "name",
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
          key: "update",
          sortable: true
          //  slot: 'update',
          // minWidth: 100
          // render: (h, params) => {
          //   return h(
          //     'div',
          //     this.formatDate(this.tableData1[params.index].update)
          //   )
          // }
        },
        {
          title: "Action",
          key: "action",
          slot: "action",
          className: "btn-col"
          // minWidth: 0,
          // width:200
        }
      ]
    };
  },
  methods: {
    edit(item) {},
    remove(item, i) {
      console.log(item, i);
      this.$Modal.confirm({
        title: "确认删除",
        content: "<p>删除不可撤销，是否确认？</p>",
        width: 360,
        onOk: () => {
          this.$Message.info("点击了确定");
        },
        onCancel: () => {
          this.$Message.info("点击了取消");
        }
      });
    },
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          name:
            "BusinessBusinessBusinessBusiness" +
            Math.floor(Math.random() * 100 + 1),
          tags: ["City", "People", "Cost", "Life", "Entertainment"],
          update: new Date()
        });
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      let mi = date.getMinutes();
      let s = date.getSeconds();
      return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
    },
    changePage() {
      // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
      this.tableData1 = this.mockTableData1();
    }
  },
  filters: {
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      let mi = date.getMinutes();
      let s = date.getSeconds();
      return y + "-" + m + "-" + d + " " + h + ":" + mi + ":" + s;
    }
  }
};
</script> 

<style lang="less" scoped>
.manage {
  // width: 98%;
  padding: 20px;
  // margin: 0 auto;
  background-color: #ffffff;
  h2 {
    text-align: center;
  }
  .btn-col {
    .edit-btn {
      display: inline-block;
      margin: 1px 8px 2px 0;
    }
    .ivu-btn-success {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
    }
    .ivu-btn-success:hover {
      background: #409eff;
      border-color: #409eff;
      color: #fff;
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
