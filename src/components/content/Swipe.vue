<template>
  <el-carousel :interval="5000" arrow="never" height="372px" width="565px">
    <el-carousel-item v-for="(item,index) in swipeImg" :key="index" :label="index+1">
      <img :src="require('../../assets/img/about/' + item.url)" alt />
      <div class="swipe-info">{{item.msg}}</div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    swipeImg: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.el-carousel__indicators--labels{
  left: 450px;
}
.el-carousel__indicators--labels .el-carousel__indicator{
  padding: 10px 0;
}
.el-carousel__indicators--labels .el-carousel__button{
  padding: 2px 5px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
}
.el-carousel__indicator.is-active button {
  background-color: #c11912;
}
.el-carousel__indicator--horizontal {
  padding: 12px 0;
}
.el-carousel__item img {
  max-height: 100%;
  width: auto;
  text-align: center;
  overflow: hidden;
}
.el-carousel__item .swipe-info {
  position: absolute;
  bottom: 0;
  padding-left: 10px;
  width: 100%;
  height: 40px;
  text-align: start;
  line-height: 40px;
  background-color: rgba(0, 0, 0, .7);
  color: #fff;
  font-size: 16px;
}

/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>