 <template>
  <div class="tags">
    <h1>All Tags</h1>
    <!-- <button v-on:click="shuffle">Shuffle</button> -->
    <br>
    <transition-group name="list-complete" tag="p" appear>
      <!-- <transition-group enter-active-class="animated bounceInDown" name="list-complete" tag="p" appear> -->
      <Tag
        v-for="i in list"
        :key="i"
        :color="i==model13?'success':getRandomColor()"
        @click.native="setValue(i)"
        class="list-complete-item"
      >{{i}}</Tag>
    </transition-group>
    <transition name="onetag">
      <div v-if="model13">
        <span>标签：</span>
        <Tag closable color="success" @on-close="handleClose2" style="margin-left:20px">{{model13}}</Tag>
      </div>
    </transition>
    <InfoCard v-if="model13" :data="cardlist"></InfoCard>
  </div>
</template>
<script>
import _ from "lodash/lodash"; // 引入lodash.js
import InfoCard from "../components/InfoCard.vue";
export default {
  name: "Tags",
  components: {
    InfoCard
  },
  data() {
    return {
      model13: "",
      loading1: false,
      list: ["Alabama", "Alas", "Arizona", "Arkansasf", "bizona", "bcansas"],
      cardlist: [
        {
          id: 1,
          title: "this is title11 title11title11",
          text: "content akfdmsdlajnvlja",
          tag: ["vue", "angular", "react"]
        },
        {
          id: 2,
          title: "this is title22",
          text: "content akfdmsdlajnvlja",
          tag: ["vue", "angular", "react"]
        }
      ]
    };
  },
  methods: {
    handleClose2(event, name) {
      this.model13 = "";
    },
    setValue(val) {
      console.log("click--", val);
      if (val === this.model13) {
        this.model13 = "";
        //。。。清空查询数据
      } else {
        this.model13 = val;
        //。。。查询数据
      }
      // console.log("model13--", this.model13);
      if (this.model13) {
        this.list.splice(this.list.indexOf(val), 1);
        this.list.unshift(val);
      }
    },
    // getRandomColor() {
    //   return this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
    //   // return this.colorArr[1]
    // },
    shuffle() {
      this.list = _.shuffle(this.list);
    }
  },
  mounted() {
    this.shuffle();
  }
};
</script>

 <style lang="less" scoped>
.tags {
  min-width: 720px;
  padding: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  h1 {
    text-align: center;
  }
  > p {
    width: 50%;
    margin: 0 auto;
    // border: 1px dotted rgb(143, 143, 212);
    border-radius: 10px;
    text-align: center;
    .list-complete-item {
      transition: all 1s;
      margin: 10px;
    }
  }
  .list-complete-enter {
    opacity: 0.5;
  }
  .onetag-enter-active,
  .onetag-leave-active {
    transition: all 0.4s;
  }
  .onetag-enter {
    opacity: 0;
    transform: translate(200px, -50px);
  }
  .onetag-leave-to {
    opacity: 0;
    transform: translate(100px);
  }
}
</style>