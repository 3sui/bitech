<!-- 导航栏组件 -->
<template>
  <div id="nav-bar">
    <div class="nav-bar-content">
      <div class="nav-bar-content-logo">
        <h1>Bitech</h1>
        <router-link to="/" @click.native="current=0"><img src="../../assets/img/logo_new.png" alt /></router-link>
      </div>
      <div class="nav-bar-content-button">
        <router-link 
        @click.native="navBarClick(index)"
        :class="{active: index === current}"
        v-for='(item, index) in title' 
        :to="item.href" 
        :key="index">{{item.msg}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: [
        {href: '/', msg: '首页'},
        {href: '/product', msg: '产品与解决方案'},
        {href: '/case', msg: '典型案例'},
        {href: '/cooppartner', msg: '合作伙伴'},
        {href: '/about', msg: '关于我们'},
      ],
      current: 0
    };
  },
  computed: {
  },
  methods: {
    navBarClick(index){
      this.current = index

    }
  },
  created(){
    switch (this.$route.path) {
      case '/':
        this.current = 0
        break;
    
      case '/product':
        this.current = 1
        break;
      case '/case':
        this.current = 2
        break;
      case '/cooppartner':
        this.current = 3
        break;
      case '/about':
        this.current = 4
        break;
    }
  }
};
</script>
<style scoped>
#nav-bar {
  position: absolute;
  top: 0;
  width: 100%;
  color: #fff;
  /* background-color: red; */
}
.nav-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1170px;
  height: 88.5px;
  /* background-color: blue; */
  z-index: 999;
}
.nav-bar-content-logo {
  position: relative;
}
.nav-bar-content-logo h1 {
  position: absolute;
  left: -99999px;
}
.nav-bar-content-logo img {
  vertical-align: middle;
}
#nav-bar .nav-bar-content-button a{
  padding: 43px 40px 15px;
  font-size: 16px;
  color: #fff;
}
#nav-bar .nav-bar-content-button a:hover {
  color: var(--color-high-text)
}
#nav-bar .nav-bar-content-button .active {
  color: var(--color-high-text)
}
</style>