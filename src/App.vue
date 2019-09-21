<template>
  <div id="app">
    <nav-bar />
    <keep-alive exclude="home">
      <router-view />
    </keep-alive>
    <Footer />
    <back-top :toBottom="300" />
  </div>
</template>

<script>
import NavBar from "components/content/NavBar.vue";
import Footer from "components/content/Footer.vue";
import BackTop from "components/content/BackTop.vue";

export default {
  components: {
    NavBar,
    Footer,
    BackTop
  },
  methods: {
    setTitle() {
      document.title = this.$route.meta.title
    }
  },
  mounted(){
    this.setTitle()
  }
};
</script>

<style>
</style>
