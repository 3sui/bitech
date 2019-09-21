<template>
  <div class="go-top">
    <div class="go-top-content">
      <div title="在线咨询">
        <i class="el-icon-service"></i>
      </div>
      <div class="tel">
        <i class="el-icon-refresh"></i>
        <span>
        <p>咨询热线: 400-026-9898</p>
        <p>13701889747</p>
      </span>
      </div>
      <div class="icon-code">
        <i class="el-icon-s-order"></i>
        <img src="~@/assets/img/icon-code.jpg" alt />
      </div>
      <div @click="goTop" ref="btn" title="回到顶部" class="back">
        <i class="el-icon-upload2"></i>
      </div>
    </div>
  </div>
</template>

<script>
// let timer = null
export default {
  data() {
    return {
      isTop: true,
      timer: null
    };
  },
  mounted() {
    this.needScroll();
  },
  methods: {
    needScroll() {
      let clientHeight = document.documentElement.clientHeight;
      let obtn = this.$refs.btn;
      // window.onscroll = function() {
      //   let osTop =
      //     document.documentElement.scrollTop || document.body.scrollTop;
      //   if (osTop >= clientHeight) {
      //     obtn.style.display = "block";
      //   } else {
      //     obtn.style.display = "none";
      //   }
      //   if (!this.isTop) {
      //     clearInterval(this.timer);
      //   }
      //   this.isTop = false;
      // };
    },
    goTop() {
      let self = this;
      self.timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        self.isTop = true;
        if (osTop === 0) {
          clearInterval(self.timer);
        }
      }, 30);
    }
  }
};
</script>

<style scoped>
.go-top {
  width: 100%;
}
.go-top .go-top-content {
  position: fixed;
  right: 10px;
  bottom: 50%;
  transform: translateY(92.5px);
  width: 65px;
  height: 185px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.go-top .go-top-content div {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: #75bf4e;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  text-align: center;
  line-height: 35px;
  font-size: 25px;
  color: #fff;
}
.go-top .go-top-content div:hover {
  background-color: #009dff;
}
.go-top .go-top-content span {
  visibility: hidden;
  position: absolute;
  top: 35px;
  right: 60px;
  width: 200px;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  background-color: #009dff;
  text-align: right;
  line-height: 20px;
  transition: all 0.3s;
}
.go-top .go-top-content .tel:hover span,
.go-top .go-top-content .icon-code:hover img{
  visibility: visible;
  right: 55px;
}
.go-top .go-top-content img {
  visibility: hidden;
  position: absolute;
  top: 70px;
  right: 60px;
  width: 100px;
  transition: all 0.3s;
}
</style>
