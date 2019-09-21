<!-- video 组件 -->
<template>
  <div class="video">
    <video autoplay loop muted>
      <source src="~@/assets/img/home/7059115.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
  }
};
</script>
<style scoped>
.video {
  position: absolute;
  right: 0;
  left: 0;
  top: 0px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  width: auto;
  background-image: url("~@/assets/img/home/top_bg01.png");
  z-index: -11;
}
.video video {
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  width: 100%;
  height: auto;
  width: auto;
}
.video source {
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
</style>