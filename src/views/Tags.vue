 <template>
  <div class="tags">
    <h1>All tags page</h1>
    <Input suffix="ios-search" placeholder="输入搜索" style="width:300px"></Input>
    <br>
    <Select
      suffix="ios-search"
      placeholder="输入搜索"
      style="width:300px"
      v-model="model13"
      clearable
      filterable
      remote
      :remote-method="remoteMethod1"
      :loading="loading1"
    >
      <Option
        v-for="(option, index) in options1"
        :value="option.value"
        :key="index"
      >{{option.label}}</Option>
    </Select>
    <transition name="onetag">
      <Tag v-if="model13" color="blue" style="margin-left:20px">{{model13}}</Tag>
    </transition>
  </div>
</template>
<script>
export default {
  name:'Tags',
  data() {
    return {
      model13: "",
      loading1: false,
      options1: [],
      list: ["Alabama", "Alaska", "Arizona", "Arkansas"]
    };
  },
  methods: {
    remoteMethod1(query) {
      if (query !== "") {
        this.loading1 = true;
        setTimeout(() => {
          this.loading1 = false;
          const list = this.list.map(item => {
            return {
              value: item,
              label: item
            };
          });
          this.options1 = list.filter(
            item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          );
        }, 500);
      } else this.options1 = [];
    }
  }
};
</script>

 <style lang="less" scoped>
.about {
  text-align: center;
}
.onetag-enter-active,
.onetag-leave-active {
  transition: all 0.4s;
}
.onetag-enter {
  opacity: 0;
  transform: translate(-300px);
}
.onetag-leave-to {
  opacity: 0;
  transform: translate(50px);
}
</style>