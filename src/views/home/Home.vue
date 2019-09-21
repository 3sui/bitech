<template>
  <div id="home">
    <div class="top">
      <home-video />
      <div class="top-title">
        <h1>BITECH</h1>
        <h2>智慧园区产业运营与管控一体化</h2>
        <h3>解决方案提供商</h3>
      </div>
      <div class="city">
        <city-live/>
      </div>
    </div>
    <div class="home-product">
      <p class="home-product-title1">产品与解决方案</p>
      <p class="home-product-title2">
        秉持“开放、友好、合作、共赢”的原则，整合多方资源，打造智慧园区信息化产业生态链，为园区客户提供全
        <br />方位、一体化的整合式服务。
      </p>
    </div>
    <product-view />
    <div class="home-product">
      <p class="home-product-title1">BiTECH 头条</p>
      <p class="home-product-title2">整合多方资源，打造智慧园区信息化产业生态链</p>
      <div class="home-product-more">
        <a href="http://www.bitech.cn/Article/230_1574/">View more</a>
      </div>
    </div>
    <home-swipe />
  </div>
</template>

<script>
import HomeVideo from "components/content/HomeVideo.vue";
import ProductView from "components/content/ProductView.vue";
import HomeSwipe from "components/content/HomeSwipe.vue";
import CityLive from "components/content/CityLive.vue";


export default {
  name: "home",
  components: {
    ProductView,
    HomeVideo,
    HomeSwipe,
    CityLive
  }
};
</script>

<style scoped>
#home .top-title {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 1170px;
  text-align: center;
  color: #fff;
}
#home .top-title h1 {
  margin: 0;
  font-weight: 500;
  font-size: 86px;
  line-height: 1;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
#home .top-title h2 {
  padding: 40px 0 35px;
  font-weight: 500;
  font-size: 72px;
  line-height: 1;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
#home .top-title h3 {
  font-weight: 500;
  font-size: 62px;
  line-height: 1;
  margin: 0;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
#home .city {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: -10;
}

#home .home-product {
  margin: 60px auto 30px;
  width: 1170px;
  text-align: center;
}
#home .home-product .home-product-title1 {
  font-size: 38px;
  line-height: 1;
  color: #333;
}
#home .home-product .home-product-title2 {
  font-size: 18px;
  line-height: 1.7;
  padding-top: 35px;
  color: #666;
}
#home .home-product .home-product-more {
  text-align: right;
  padding-right: 60px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 100px;
}
</style>
