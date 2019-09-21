<!-- 产品与解决方案 -->
<template>
  <div id="product">
    <page-top msg1="产品与解决方案" msg2="Products and Solutions" bgcImage="banner4.jpg" />
    <product-view/>
    <product-info/>
  </div>
</template>

<script>
import PageTop from "components/content/PageTop.vue";
import ProductView from 'components/content/ProductView.vue'
import ProductInfo from 'components/content/ProductInfo.vue'


export default {
  data() {
    return {
      
    };
  },

  components: {
    PageTop,
    ProductView,
    ProductInfo
  },

  computed: {},
  methods: {
  }
};
</script>
<style scoped>

</style>