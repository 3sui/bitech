<!-- 城市生活组件 -->
<template>
  <div id="city-live">
    <img class="a" ref="a" src="~@/assets/img/home/city/item01.gif" alt />
    <img class="b" ref="b" src="~@/assets/img/home/city/item02.gif" alt />
    <img class="c" ref="c" src="~@/assets/img/home/city/item03.gif" alt />
    <img class="d" ref="d" src="~@/assets/img/home/city/item04.gif" alt />
    <img class="e" ref="e" src="~@/assets/img/home/city/item05.gif" alt />
    <img class="f" ref="f" src="~@/assets/img/home/city/item06.gif" alt />
    <img class="g" ref="g" src="~@/assets/img/home/city/item07.gif" alt />
    <img class="h" ref="h" src="~@/assets/img/home/city/item10.gif" alt />
    <img class="i" ref="i" src="~@/assets/img/home/city/item11.gif" alt />
    <img class="j" ref="j" src="~@/assets/img/home/city/taxi_1L.gif" alt />
    <img class="k" ref="k" src="~@/assets/img/home/city/taxi_2L.gif" alt />
    <img class="l" ref="l" src="~@/assets/img/home/city/plane.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.peopleLive();
  },

  methods: {
    peopleLive() {
      let aLeft = -300;
      let bLeft = 3000;
      let cLeft = -2550;
      let dLeft = 500;
      let eLeft = -1900;
      let fLeft = 480;
      let gLeft = -3000;
      let hLeft = 2500;
      let iLeft = -440;
      let jLeft = 30;
      let kLeft = 577;
      let lLeft = -500;
      let lbottom = -500;

      this.timer = setInterval(() => {
        if (aLeft > 3000) {
          aLeft = 0;
        } else {
          aLeft = aLeft + 3;
          this.$refs.a.style.left = aLeft + "px";
        }

        if (bLeft < -3000) {
          bLeft = 3000;
        } else {
          bLeft = bLeft - 2;
          this.$refs.b.style.left = bLeft + "px";
        }

        if (cLeft < -3000) {
          cLeft = 3000;
        } else {
          cLeft = cLeft - 8;
          this.$refs.c.style.left = cLeft + "px";
        }

        if (dLeft < -3000) {
          dLeft = 3000;
        } else {
          dLeft = dLeft - 2;
          this.$refs.d.style.left = dLeft + "px";
        }
        if (eLeft < -3000) {
          eLeft = 3000;
        } else {
          eLeft = eLeft - 1;
          this.$refs.e.style.left = eLeft + "px";
        }
        if (fLeft < -3000) {
          fLeft = 3000;
        } else {
          fLeft = fLeft - 5;
          this.$refs.f.style.left = fLeft + "px";
        }
        if (gLeft > 3000) {
          gLeft = 0;
        } else {
          gLeft = gLeft + 2;
          this.$refs.g.style.left = gLeft + "px";
        }
        if (hLeft > 3000) {
          hLeft = 0;
        } else {
          hLeft = hLeft + 6;
          this.$refs.h.style.left = hLeft + "px";
        }
        if (iLeft < -3000) {
          iLeft = 3000;
        } else {
          iLeft = iLeft - 3;
          this.$refs.i.style.left = iLeft + "px";
        }
        if (jLeft < -3000) {
          jLeft = 3000;
        } else {
          jLeft = jLeft - 10;
          this.$refs.j.style.left = jLeft + "px";
        }
        if (kLeft < -3000) {
          kLeft = 3000;
        } else {
          kLeft = kLeft - 9;
          this.$refs.k.style.left = kLeft + "px";
        }
        if (lLeft > 5000) {
          lLeft = -500;
          lbottom = -500;
        } else {
          lLeft = lLeft + 10;
          lbottom = lbottom + 6;
          this.$refs.l.style.left = lLeft + "px";
          this.$refs.l.style.bottom = lbottom + "px";
        }

        // console.log(left);
      }, 50);
      this.$once("hook:beforeDestroy", () => {
        clearInterval(this.timer);
      });
    }
  }
};
</script>
<style scoped>
#city-live {
  width: 100%;
  height: 100%;
}
#city-live img {
  position: absolute;
  bottom: 0;
  height: 60px;
}

#city-live img.c {
  height: 80px;
}

#city-live img.h {
  height: 40px;
}
</style>