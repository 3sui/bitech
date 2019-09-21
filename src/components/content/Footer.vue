<!-- footer 组件 -->
<template>
  <div id="footer">
    <div class="footer-content">
      <div class="footer-content-info">
        <span>友情链接:</span>
        <ul>
          <li>
            <a href="http://www.zhangjiang.net/">张江高科</a>
          </li>
          <li>
            <a href="http://www.ypsti.com/">杨浦科创</a>
          </li>
          <li>
            <a href="https://chuangke.aliyun.com/">阿里巴巴创新中心</a>
          </li>
          <li>
            <a href="http://www.huawei.com/cn/">华为</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://www.caohejing.com.cn/">上海临港松江科技城</a>
          </li>
          <li>
            <a href="http://www.520turtle.com/">海龟科技</a>
          </li>
          <li>
            <a href="https://www.antgroup.com/">蚂蚁金服</a>
          </li>
          <li>
            <a href="http://www.taiji.com.cn/index.htm">太极计算机</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://www.pkusp.com.cn/">北大科技园</a>
          </li>
          <li>
            <a href="http://www.sh-italent.cn/">上海国际人才网</a>
          </li>
          <li>
            <a href="https://www.microsoft.com/zh-cn">微软中国</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://www.tuspark.com/">清华科技园</a>
          </li>
          <li>
            <a href="http://www.alibabagroup.com/">阿里巴巴集团</a>
          </li>
          <li>
            <a href="http://www.10010.com/sh/">中国联通</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://www.sjtusp.com/">交大科技园</a>
          </li>
          <li>
            <a href="https://www.aliyun.com/">阿里云</a>
          </li>
          <li>
            <a href="http://www.189.cn/sh/">中国电信</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-button">
      <div class="footer-button-content">
        <img src="../../assets/img/logo2.png" alt />
        <div class="footer-button-content-word">
          <p>TEL：400-026-9898</p>
          <p>EMAIL：Huanghe@Bitech.cn Add：800 NaXian Road ,Shanghai,P.RChina</p>
          <p>
            COPYRIGHT © Bitech.cn Shanghai Bitech Software Co., Ltd ALL RIGHTS RESERVED，备案号：
            <a href="http://www.beian.miit.gov.cn/">沪ICP备15022387号-1</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {}
};
</script>
<style scoped>
#footer {
  position: relative;
  width: 100%;
  height: 324px;
  background-color: #333638;
  color: #fff;
}
#footer .footer-content {
  margin: 0 auto;
  width: 1170px;
  padding-top: 40px;
}
#footer .footer-content-info {
  display: flex;
}
#footer .footer-content-info span {
  font-size: 18px;
}
#footer .footer-content-info ul {
  list-style: none;
  margin-left: 50px;
}
#footer .footer-content-info ul a {
  color: #fff;
  font-size: 14px;
  line-height: 30px;
}
#footer .footer-content-info ul a:hover {
  text-decoration: underline;
}
#footer .footer-button {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: #2d2e31;
}
#footer .footer-button .footer-button-content {
  display: flex;
  align-items: center;
  width: 1170px;
  height: 100%;
  margin: 0 auto;
}
#footer .footer-button .footer-button-content img {
  height: 30px;
}
#footer .footer-button .footer-button-content-word {
  margin-left: 30px;
  padding-left: 30px;
  border-left: 1px solid var(--color-high-text);
  line-height: 20px;
  font-size: 12px;
}
#footer .footer-button .footer-button-content-word a {
  color: #337ab7;
}
#footer .footer-button .footer-button-content-word a:hover {
  text-decoration: underline;
  color: #23527c;
}
</style>