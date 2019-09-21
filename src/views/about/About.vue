<!-- 关于我们组件 -->
<template>
  <div id="about">
    <pageTop msg1="关于我们" msg2="About us" bgcImage="about_us.jpg" />
    <div class="about-info">
      <h3>公司介绍</h3>
      <div class="block"></div>
      <div class="about-info-word">
        <p>自2011年成立，瑞谷拜特始终致力于将先进的移动互联网、云计算、大数据、物联网、人工智能等技术应用融入到以信息化、智慧化为核心的新型园区与产业地产的服务和运营中，通过软件定义硬件，全面构建信息技术高度集成、服务资源全面融合、网络感知敏捷互动、产业服务广泛覆盖、运营数据多维互联的智能化产城社区。目前，瑞谷拜特在上海和北京设有区域总部。</p>
        <p>
          经过多年探索和努力，瑞谷拜特在
          <i>全国30个城市</i>与
          <i>300余家园区</i>达成了长期合作，基于BiPark产品体系，围绕园区招商、资管、服务、运营、协同、决策、智能化等业务层面进行持续实践，为园区在新时期下实现数字化转型提供必要载体。
        </p>
      </div>
      <img src="~@/assets/img/about/公司介绍.png" alt />
    </div>
    <div class="news">
      <div class="news-content">
        <h3>动态资讯</h3>
        <div class="block"></div>
        <div class="news-content-more">
          <a href="http://www.bitech.cn/Article/230_1574/">View more</a>
        </div>
        <div class="news-content-info">
          <div class="swipe">
            <Swipe :swipeImg="swipeImg" />
          </div>
          <div>
            <div class="news-content-info-items">
              <div class="news-content-info-items-list">
                <div class="news-content-info-items-list-data">
                  <p>04</p>
                  <p>2019.09</p>
                </div>
                <div class="news-content-info-items-list-news">
                  <p>
                    <a href>阻碍物联网发展的因素都是哪些？</a>
                  </p>
                  <div>对于制造生产企业来讲，物联网应该可以说是应用比较广泛的一种，那么问题来了，你对于物联网有着多少了解呢？其中阻碍物联网发展的因素都是哪些呢？</div>
                </div>
              </div>
              <div class="news-content-info-items-list">
                <div class="news-content-info-items-list-data">
                  <p>03</p>
                  <p>2019.09</p>
                </div>
                <div class="news-content-info-items-list-news">
                  <p>
                    <a href>阻碍物联网发展的因素都是哪些？</a>
                  </p>
                  <div>对于制造生产企业来讲，物联网应该可以说是应用比较广泛的一种，那么问题来了，你对于物联网有着多少了解呢？其中阻碍物联网发展的因素都是哪些呢？</div>
                </div>
              </div>
              <div class="news-content-info-items-list">
                <div class="news-content-info-items-list-data">
                  <p>02</p>
                  <p>2019.09</p>
                </div>
                <div class="news-content-info-items-list-news">
                  <p>
                    <a href>中国式化工园区遭遇重大挑战，怎么办？看看国外园区经验！</a>
                  </p>
                  <div>近年来我国化工园区遇到了重大挑战，化工园区发展带来的环境、生态问题日益突出。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="recruit">
      <h3>招聘英才</h3>
      <div class="block"></div>
      <div class="recruit-choose">
        <div
          v-for="(value, name, index) in recruit"
          :key="index"
          class="recruit-choose-list"
          :class="{active: current === index}"
          @click="tabClick(index)"
        >{{name}}</div>
      </div>
      <div class="recruit-info">
        <img src="~@/assets/img/about/recruit.png" alt />
        <div class="recruit-info-word">
          <p class="recruit-info-blue">【职位描述】</p>
          <p v-for="(item,index) in info1" :key="item">{{index+1+'.' + item}}</p>
          <p class="recruit-info-blue">【任职要求】</p>
          <p v-for="(item,index) in info2" :key="item">{{index+1+'.' + item}}</p>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact-content">
      <h3>联系我们</h3>
      <div class="block"></div>
      <div class="contact-info">
        <dl>
          <dt><img src="~@/assets/img/about/icon_addss.png">上海总部</dt>
          <dd>电话（Tel）：86-21-20231082</dd>
          <dd>邮箱（Email）：gaok@bitech.cn</dd>
          <dd>地址（Add）：上海市浦东新区纳贤路800号B座9楼</dd>
          <dd>邮编（Zip）：201203</dd>
          <dd>传真（Fax）：86-21-20231081</dd>
        </dl>
        <dl>
          <dt><img src="~@/assets/img/about/icon_addss.png">北京总部</dt>
          <dd>电话（Tel）：86-10-88333546</dd>
          <dd>邮箱（Email）：wangfq@bitech.cn</dd>
          <dd>地址（Add）：北京市海淀区创业路8号楼群英科技园5号楼502</dd>
          <dd>邮编（Zip）：201203</dd>
        </dl>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import PageTop from "components/content/PageTop.vue";
import Swipe from "components/content/Swipe.vue";
export default {
  data() {
    return {
      swipeImg: [
        { url: "swipe1.png", msg: "这一天，他们遇见了信息化......" },
        {
          url: "swipe2.jpg",
          msg: "5G将如何改变AIoT智慧社区的关键场景？（下）"
        },
        {
          url: "swipe3.jpg",
          msg: "产业招商杜绝短、快、利！这几个雷区千万不能踩"
        },
        {
          url: "swipe4.jpg",
          msg: "5G将如何改变AIoT智慧社区的关键场景？（上）"
        },
        { url: "swipe5.jpg", msg: "产业园区规划的空间布局理念" },
        { url: "swipe6.jpg", msg: "大数据如何应用于智慧城市？" }
      ],
      recruit: {
        战略资讯顾问: [
          [
            "开展园区产业运营方面的研究与分析，撰写各类咨询报告；",
            "结合园区的产业发展规划和资源整合能力，拟定园区发展的战略管理信息化解决方案；",
            "负责大型园区信息化顶层设计，拟定可行性研究报告、实施方案、信息化规划方案。"
          ],
          [
            "经营管理类等专业硕士以上学历，名校MBA、DBA优先；",
            "熟悉大型园区战略管理模式；",
            "3年以上相关工作经验；",
            "良好的敬业精神和职业操守，责任心、事业心强，具有高度的团队合作精神；",
            "写作功底扎实、语言表达流畅，逻辑性强，能熟练使用WORD、POWERPOINT等软件；",
            "五官端正，形象气质良好，有一定的培训能力；",
            "能承受高强度的工作压力，能适应长期出差。"
          ]
        ],
        产品数据分析师: [
          [
            "对园区运营管理模式、产业集群、产业链条构建、产业发展趋势有深入见解，能够为园区管理者提供有针对性的产业数据分析解决方案；",
            "擅长数据建模，能够基于园区现有的业务运营策略和业务发展规划制定合理的评价标准，结合数据采集机制对园区战略发展提供咨询建议；"
          ],
          [
            "本科以上学历，985，211高校优先；",
            "统计类、应用数学、计量经济、物联网、电子工程类、信息与通信工程类、工商管理类专业；",
            "8年以上工作经验，两年以上数据分析、数据挖掘、数据可视化工作经验, 对主流数据资产管理产品、商业智能（BI）、数据集市、数据仓库等产品的现状和发展趋势有深入了解；",
            "有扎实的数据分析和挖掘专业知识，具备利用数据分析解决业务问题的能力，能将复杂的业务需求转化为适合的数学模型；",
            "写作功底扎实、语言表达流畅，逻辑性强，能熟练使用WORD、POWERPOINT等软件；",
            "能够创新地解决复杂的数据挖掘分析，对多种数据源进行深度诊断性组合分析、挖掘和建模的设计工作，能够和客户的高级管理层商讨提升业务和管理水平的对策。"
          ]
        ],
        "ASP.NET软件工程师": [
          [
            "负责公司各产品新模块的业务层代码编写工作；",
            "负责软件系统的需求讨论与分析设计；"
          ],
          [
            "本科或以上学历；五年及以上软件开发经验；",
            "精通.NET开发，对B/S架构下的开发模式都有较好的理解和掌握(ASP.NET,C#)，熟悉MVC、NHibernate、MVVM框架者优先；",
            "熟练掌握SQLSERVER数据库编程技术，并掌握数据库设计优化与常用设计技巧 ；",
            "熟练掌握HTML、CSS、JAVASCRIPT、JSON、AJAX等相关WEB基础技术，熟悉Jquery框架；",
            "有优秀的团队协作精神，良好的沟通能力，工作认真、细心、踏实、责任心强，勤奋好学，有强烈的工作责任心，良好的交流与沟通能力,有团队精神；",
            "具有规范化，标准化的代码编写习惯",
            "热衷于产品研发和技术发展；具有强烈的责任意识和开放的心态。"
          ]
        ],
        高级WEB前端开发工程师: [
          [
            "参与PC端、移动端、微信公众号相关开发；",
            "配合后端工程师一起研讨技术实现方案，进行应用及系统整合；",
            "跟踪最新前端技术，持续优化前端代码的性能，以提高前端的用户体验以及性能。"
          ],
          [
            "至少三年以上互联网产品前端开发经验",
            "具备优秀的编码能力，能编写高性能、高可读性、高可维护性的代码；",
            "具备良好的学习能力、沟通能力和团队协作精神，对技术有非常强烈的热情;",
            "精通原生 JavaScript，掌握 jQuery/Zepto、RequestJS/SeaJs等；",
            "熟悉gulp，webpack，node，了解前端工程化，模块化，前后端分离；",
            "有 BackboneJS、KnockoutJS、AngularJS、ReactJS 等前端 MV* 框架实践经验优先考虑；",
            "熟悉基于nodejs相应的JS框架优先考虑；",
            "有项目管理经验优先考虑；",
            "必须提供前端开发案例"
          ]
        ],
        "高级.NET研发工程师": [
          [
            "参与需求评审：能够对项目经理提交过来的需求进行BA分析；",
            "参与结构设计：能够进行基础的数据库设计，参与技术评审；",
            "负责代码实现：根据产品开发计划，按要求完成指定的研发任务；",
            "确保交付质量：完成前后端代码实现后，需要完成单元自测，并在功能上排除常见问题；",
            "技术攻关：技术难关攻克和新技术预研；",
            "问题解决：负责项目前期的技术探索，及时解决项目开发或产品研发中的技术难题；"
          ],
          [
            "统招本科以上学历，计算机相关专业毕业优先，3年以上基于.Net B/S独立开发经验；",
            "能根据需求良好的进行系统模块设计，熟悉使用常用设计模式，熟悉.Net平台的常见软件框架；",
            "精通c#语言、精通.net框架，熟练掌握常用的开发框架（MVC、EntityFrameWork）；",
            "精通原生JavaScript，掌握 jQuery/Zepto、RequestJS/SeaJs等；精通Html、CSS等开发语言；",
            "熟悉BackboneJS、KnockoutJS、AngularJS、ReactJS等JS框架中的一种以上；",
            "熟悉SQL Server，或Oracle数据库编程，熟练使用SQL编写存储过程；",
            "具有较好的业务理解能力和沟通能力",
            "具备文档条理化的能力，较强的规范性文档意识，能独立完成概要设计及详细设计；",
            "有责任心，逻辑调理清晰，学习能力强；",
            "了解企业业务工作流，有ERP、CRM或互联网系统工作经验优先。"
          ]
        ]
      },
      current: 0,
      currentInfo: "战略资讯顾问"
    };
  },

  components: {
    PageTop,
    Swipe
  },

  computed: {
    info1() {
      return this.recruit[this.currentInfo][0];
    },
    info2() {
      return this.recruit[this.currentInfo][1];
    }
  },
  methods: {
    tabClick(index) {
      this.current = index;
      switch (index) {
        case 0:
          this.currentInfo = "战略资讯顾问";
          break;
        case 1:
          this.currentInfo = "产品数据分析师";
          break;
        case 2:
          this.currentInfo = "ASP.NET软件工程师";
          break;
        case 3:
          this.currentInfo = "高级WEB前端开发工程师";
          break;
        case 4:
          this.currentInfo = "高级.NET研发工程师";
          break;
      }
    }
  }
};
</script>
<style scoped>
/* 公司介绍部分 */
#about .about-info,
#about .news-content,
#about .recruit,
#about .contact-content {
  margin: 0 auto;
  width: 1170px;
  padding: 50px;
  text-align: center;
}
#about .about-info h3,
#about .news-content h3,
#about .recruit h3,
#about .contact h3 {
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}
#about .about-info img {
  margin-top: 60px;
}
#about .about-info-word p {
  margin: 20px 0 0 0;
  text-align: left;
  line-height: 30px;
  font-size: 16px;
}
#about .about-info-word p i {
  color: #666;
  font-weight: 700;
  font-style: normal;
}
/* 动态资讯部分 */
#about .news,
#about .contact {
  background-color: #fbfbfb;
}
#about .news .news-content-more {
  text-align: right;
  padding-right: 60px;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 100px;
}
#about .news .swipe {
  width: 600px;
  flex-shrink: 0;
}
#about .news .news-content-info {
  display: flex;
  justify-content: space-between;
}
#about .news .news-content-info-items {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 50px;
  width: 550px;
  height: 350px;
}
#about .news .news-content-info-items-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}
#about .news .news-content-info-items > :nth-last-child(1) {
  border: 0;
}
#about .news .news-content-info-items-list-data {
  margin-right: 50px;
  width: 58px;
  height: 58px;
  background-color: #1976d2;
  flex-shrink: 0;
}
#about .news .news-content-info-items-list-data p {
  color: #fff;
}
#about .news .news-content-info-items-list-data :nth-child(1) {
  font-size: 24px;
  line-height: 40px;
}
#about .news .news-content-info-items-list-data :nth-child(2) {
  font-size: 12px;
}
#about .news .news-content-info-items-list-news {
  text-align: start;
}
#about .news .news-content-info-items-list-news a {
  font-size: 16px;
  color: #333;
}
#about .news .news-content-info-items-list-news div {
  padding: 10px 5px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 20px;
  color: #999;
}
/* 诚聘英才部分 */
#about .recruit .recruit-choose {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}
#about .recruit .recruit-choose-list {
  padding: 0 25px;
  height: 41px;
  line-height: 41px;
  font-size: 18px;
  color: #666;
  border: 1px solid #e2e2e2;
  border-radius: 41px;
}
#about .recruit .recruit-choose-list:hover,
#about .recruit .active {
  background-color: #1976d2;
  color: #fff;
  border-color: #1976d2;
  cursor: pointer;
}
#about .recruit .recruit-info {
  display: flex;
  padding-top: 60px;
}
#about .recruit .recruit-info img {
  width: 360px;
  height: 271px;
}
#about .recruit .recruit-info-word {
  padding-left: 20px;
  width: 600px;
  font-size: 14px;
  color: #999;
  text-align: start;
  line-height: 30px;
}
#about .recruit .recruit-info-blue {
  color: #1976d2;
}
/* 联系我们部分 */
#about .contact-info {
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  margin-bottom: 100px;
  text-align: start;
  font-size: 14px;
  color: #777;
  line-height: 25px;
}
#about .contact-info dt {
  color:#1976d2;
  font-size: 18px;
  padding: 0 0 10px 0;
}
#about .contact-info dt img {
  vertical-align: middle;
  padding-right: 5px;
}
</style>