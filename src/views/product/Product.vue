<!-- 产品与解决方案 -->
<template>
  <div id="product">
    <page-top msg1="产品与解决方案" msg2="Products and Solutions" bgcImage="banner4.jpg" />
    <product-view/>
    <div class="product-info">
      <div class="product-info-content">
        <h3>01.招商地图</h3>
        <div class="block"></div>
        <p>通过全景地图的形式，面向企业、人才、公众进行园区品牌推广，可直观地查看园区产业定位、功能规划、优惠政策、交通优势、区位优势、产业和生活服务配套、重点项目和龙头企业等信息。招商地图作为园区的电子名片，能够提升园区的品牌形象，吸引优质企业和优秀人才的入驻，起到招商引流的作用。</p>
        <img src="~@/assets/img/product/product1.png" alt />
      </div>
    </div>
    <div class="product-info bgcfb">
      <div class="product-info-content">
        <h3>02.数据大屏</h3>
        <div class="block"></div>
        <p>
          数据大屏是园区宣传推介的有效载体，通过与业务系统数据的紧密融合，能够将产业、空间、企业、人才、服务资源、物联网等抽象数据可视化，提供实时动态的图表展示，体现发展变迁和趋势预判，突出园区产业集聚、服务效能、资源整合等方面的优势。
          <br />
可放置在展厅、楼宇大厅、会客室等区域，在招商推介、人员来访、考察交流等场景进行直观宣讲。
        </p>
        <img src="~@/assets/img/product/product2.png" alt />
      </div>
    </div>
    <div class="product-info">
      <div class="product-info-content">
        <h3>03.商机扫描</h3>
        <div class="block"></div>
        <p>基于大数据服务能力，为园区的招商人员提供商机引进的辅助工具，通过产业图谱的构建，按行业、产业上下游属性扫描优质企业，提供企业排行榜、商机推荐、企业基本信息披露等实用功能，使招商人员能快速找到潜在客户并对商机进行精准把控。</p>
        <img src="~@/assets/img/product/product3.png" alt />
      </div>
    </div>
    <div class="product-info bgcfb">
      <div class="product-info-content">
        <h3>04.房态快查</h3>
        <div class="block"></div>
        <p>与“资产管理“模块紧密衔接，为园区的招商人员提供便捷的房源实时动态查询和预订工具，通过直观图的形式提供房源锁定/可租状态、计费面积、参考价格、入驻企业等信息，实现动态租控，即将到期提前告知，使招商人员能够及时响应客户需求，并支持在线预订/锁定意向房源，避免资源重复占用，效减少空置率。</p>
        <img src="~@/assets/img/product/product4.png" alt />
      </div>
    </div>
    <div class="product-info">
      <div class="product-info-content">
        <h3>05.项目跟踪</h3>
        <div class="block"></div>
        <p>基于“招商漏斗”实现从招商线索发掘、商机集中报备、商机优先级排序到洽谈跟踪、进而签约落地全过程中的客户需求、意向房源、洽谈进度等信息管理，支持在线查看项目跟进记录，实现轻松复盘，为招商人员岗位变动的平滑交接提供保障，避免因项目周期过长而导致的信息流失，并体现客观的招商绩效。</p>
        <img src="~@/assets/img/product/product5.png" alt />
      </div>
    </div>
    <div class="product-info bgcfb">
      <div class="product-info-content">
        <h3>06.项目落地</h3>
        <div class="block"></div>
        <p>为招商代办服务人员提供材料生成和节点管理工具，以入驻企业需求为核心，实现代办全流程实时提醒，确保待办业务处理高效、准时、无一遗漏。提供标准化企业章程生成功能，导出即可使用，缩短工作周期，减少人力投入，办理结束后的企业数据导入企业库，可作为企业库的数据来源之一。</p>
        <img src="~@/assets/img/product/product6.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import PageTop from "components/content/PageTop.vue";
import ProductView from 'components/content/ProductView.vue'

export default {
  data() {
    return {
      
    };
  },

  components: {
    PageTop,
    ProductView
  },

  computed: {},
  methods: {
  }
};
</script>
<style scoped>

#product .product-info-content {
  margin: 0 auto;
  width: 1170px;
  padding: 60px 0;
  text-align: center;
}

#product .product-info-content h3 {
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}
#product .product-info-content p {
  padding-top: 30px;
  font-size: 16px;
  color: #666;
  line-height: 2;
}
#product .product-info-content img {
  width: 936px;
  margin: 30px 0;
}
</style>