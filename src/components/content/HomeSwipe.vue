<template>
  <div id="swipe">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
        <img :src="require('../../assets/img/about/' + item.url)" alt />
        <div>
          <p class="p1">{{item.msg}}</p>
          <p :title="item.title" class="p2">{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperSlides: [
        {
          url: "swipe1.png",
          msg: "这一天，他们遇见了信息化......",
          title: "故事从这里开始变得有趣了。"
        },
        {
          url: "swipe2.jpg",
          msg: "5G将如何改变AIoT智慧社区的关键场景？（下）",
          title:
            "2019年是5G商用元年的开启年，从下半年开始5G商用深化进程正式拉开帷幕。"
        },
        {
          url: "swipe3.jpg",
          msg: "产业招商杜绝短、快、利！这几个雷区千万不能踩",
          title: "企业投资、搬迁或扩产不是一个简单的决策。"
        },
        {
          url: "swipe4.jpg",
          msg: "5G将如何改变AIoT智慧社区的关键场景？（上）",
          title:
            "2019年是5G商用元年的开启年，从下半年开始5G商用深化进程正式拉开帷幕。"
        },
        {
          url: "swipe5.jpg",
          msg: "产业园区规划的空间布局理念",
          title:
            "空间规划是推动产业园区开发建设的关键环节，虽然众多园区在建设过程中坚持了“规划先行”的指导原则，但这里的“规划”有很多停留在传统的城市规划层面上。"
        },
        {
          url: "swipe6.jpg",
          msg: "大数据如何应用于智慧城市？",
          title:
            "随着数据处理技术的不断进步，人们对于数据应用的意识不断提高，人们生活和各行业运行产生的数据呈现爆发式增长，形成了城市大数据。"
        }
      ]
    };
  }
};
</script>

<style>
#swipe {
  position: relative;
  width: 1170px;
  height: 375px;
  margin: 0 auto 60px;
  padding: 0 60px;
  /* background-color: red; */
}
#swipe .swiper-container {
  height: 100%;
}
#swipe .swiper-slide {
  overflow: hidden;
  background-color: #f0f0f0;
  transition: all 0.3s;
}
#swipe .swiper-slide:hover {
  box-shadow: 0px 3px 18px 0px rgba(0, 0, 0, 0.14);
}
#swipe .swiper-slide img {
  width: auto;
  height: 240px;
  vertical-align: middle;
}
#swipe .swiper-slide .p1 {
  display: block;
  text-align: center;
  font-size: 18px;
  padding: 18px 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000;
}
#swipe .swiper-slide .p2 {
  font-size: 14px;
  color: #999;
  line-height: 2;
  font-family: Simsun;
  padding: 0 15px;
  font-family: Simsun;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
