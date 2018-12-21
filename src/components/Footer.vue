<template>
  <div class="copyright">2018 - {{date}} &copy; duanmingwang</div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
      date:""
    }
  },
  props: {
   
  },
  created(){
    let date=new Date()
     this.date = date.getFullYear()+"."+(date.getMonth() + 1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.copyright{
  text-align: center;
  padding: 20px 0;
  color: #9ea7b4;
}
</style>
