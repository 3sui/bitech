<!-- 页面顶端组件 -->
<template>
  <div class="page-top" ref="bgc">
    <h1>{{msg1}}</h1>
    <h2>{{msg2}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    bgcImage: {
      type: String,
      default: ''
    },
    msg1: {
      type: String,
      default: ""
    },
    msg2: {
      type: String,
      default: ""
    },
  },
  data() {
    return {};
  },
  mounted(){
     this.setBgcImg()
  },
  components: {},
  methods:{
    setBgcImg(){
      let bgc = this.$refs.bgc
      bgc.style.backgroundImage = 'url(' + require('../../assets/img/' + this.bgcImage) + ')'
      
    }
  },

  computed: {}
};
</script>
<style scoped>
.page-top {
  width: 100%;
  height: 474px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
  color: #fff;
  padding: 200px;
}
.page-top h1 {
  font-size: 62px;
  font-weight: 500;
  margin: 10px;
}
.page-top h2 {
  font-size: 30px;
  font-weight: 500;
}
</style>