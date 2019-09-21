<!-- 典型案例组件 -->
<template>
  <div id="case">
    <page-top msg1="典型案例" msg2="Typical case" bgcImage="banner3.jpg" />
    <div class="case-choose">
      <a
        :href="'#' + item.id"
        v-for="(item, index) in title"
        :key="item.id"
        @click="tabClick(index)"
        :class="{active: current === index}"
      >{{item.name}}</a>
    </div>
    <div id="zjgk" class="bgcfb">
      <div class="case-content">
        <h3>张江高科</h3>
        <div class="block"></div>
        <h6>面向2万家企业、30万白领的产城社区服务模型构建</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >张江高科作为国内自主创新的主要承载地，科技企业多、高端人才多、服务资源多，但在政策、人才、资金、环境、资源等方面统筹协调与管理问题上，都还不够完善。此外，根据张江高科当前的发展情况，园区在推动区域经济的发展和产业结构升级方面、搭建网络化的平台结构来帮助创新主体协同合作等方面都还在不断推进及完善，需要通过更加有效的方式，搭建全域统筹的服务平台，帮助培育园区的创新环境，激发园区内各创新主体，从而不断提高张江高科的核心竞争力。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、实现2万家企业、30万白领的全方位、全天候服务运营</p>
          <p class="case-normal">2、以人为颗粒度的服务重组——产城社区模型首发</p>
          <p class="case-normal">3、线上线下对接、台前台后融合的一体化平台架构实现</p>
          <p class="case-normal">4、集群式业务与总部OA相融合的精细化集中运营管控实现</p>
          <p class="case-normal">5、实现区域人才公寓资源的全面统筹</p>
          <p class="case-normal">6、为各人才公寓运营主体提供标准化内部管理信息化系统，建立数据自动更新机制</p>
        </div>
        <img src="~@/assets/img/case/case1.png" alt />
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >张江高科信息化体系的构建历经多个阶段，从开始的跨部门协同，到精细化运营机制的建立，再到服务的全域覆盖，伴随着信息化的不断深化，其组织架构与运营思路也在潜移默化的进行着改变，逐步由资产驱动向服务驱动转化。在营商环境的构建层面，也由一开始的以“企业”为核心，升级为以“人”为核心，通过构建交友中心、生活中心、创新中心、金融中心以及政务中心为一体的张江O2O服务平台，进一步强调产城融合的重要性，全面集成人才、企业、园区、机构、政府的服务要素，实现国际级创新环境和服务环境的打造。</p>
        </div>
      </div>
    </div>
    <div id="shlg">
      <div class="case-content">
        <h3>上海临港松江科技城</h3>
        <div class="block"></div>
        <h6>实现建、引、跟、落、管、服全流程闭环</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >上海临港松江科技城的前身为上海漕河泾松江园区，作为上海率先由市政府认定的“区区合作，品牌联动”示范基地，是临港集团与松江区政府共同创建的科技产业园区，以产业园区发展为主导带动区域经济，成绩引人瞩目。随着上海临港松江科技城的高速发展，园区体量和规模不断增加，管理半径逐步放大，统筹的难度也越发凸显。传统的线下管理模式已不能满足其管理需求，需要寻求一种更加高效的方式，固化运营管理标准与流程规范，建立线上协作机制，实现业务流程的管控，让一切业务数据化，一切考核指标化。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、实现招商线索、招商业务、招商代办的全流程管理</p>
          <p class="case-normal">2、实现自有楼宇和多业主楼宇的全面管理</p>
          <p class="case-normal">3、实现项目工程项目的监控与管理，掌控项目施工进度与施工质量</p>
          <p class="case-normal">4、建立企业经营的全方位视图，实现企业的多维统计与分析</p>
          <p class="case-normal">5、实现内部多业务条线的协同与管控</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>
            项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >经过多年的合作共建，目前临港松江科技城已经基本完成了建、引、跟、落、管、服的信息化服务体系，实现1,200,000㎡物业的数字化管理，近5000家企业的线上服务，随着信息化平台建设的不断深化，上海临港松江科技城的管理与服务也在不断的升维，以发展战略为核心框架，以软件作为战略执行的有效载体，帮助园区实现数字化转型，在增强运营专业性的同时进一步提升了园区品牌吸引力，形成了以服务促营商，以营商促招商的良性循环。</p>
        </div>
        <img src="~@/assets/img/case/case2.png" alt />
      </div>
    </div>
    <div id="hrzd" class="bgcfb">
      <div class="case-content">
        <h3>华润置地</h3>
        <div class="block"></div>
        <h6>AIOT打造超级前台、服务全面应用化，5A级办公体验</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >华润置地华东大区隶属于全球500强企业华润集团旗下地产业务旗舰华润置地（HK1109），业务覆盖上海、浙江、江苏14个城市，华润置地华东大区一直秉承华润置地的“高品质战略”，以“品质给城市更多改变”为品牌理念，在设计上提出“精细设计准则”、在工程上提出“毫厘工程标准”、在销售和物业服务上提出“情感悉心服务”。随着科技时代的不断进步，华润置地华东大区也逐步意识到“互联网”将成为高端地产的标配，是提升科技体验和用户感知的重要载体，如何通过轻量化应用实现人、企、物、空间、资源的全面链接，并通过互联网运营的思路拉新、促活、留存，是新时代面临的新课题。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、服务应用化的APP集成平台Smart OE.</p>
          <p class="case-normal">2、门禁、会议室、食堂等智能硬件和IBMS的全面联通</p>
          <p class="case-normal">3、线下资源线上共享，线下服务线上自助</p>
          <p class="case-normal">4、小程序快速接单机制，接入外部服务人员，形成服务闭环</p>
        </div>
        <img src="~@/assets/img/case/case3.png" alt />
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >Smart OE.的定位是华润置地华东大区官方唯一的服务平台，基于BiPark搭建，支持跨地域、跨基地部署，实现以软件定义硬件，将所有服务应用化，其灵活性和可扩展性非常高，可以支持在不同经营模式下的自定义服务构成，伴随着平台推广和服务资源的不断扩充，Smart OE.也将不断进化，其服务应用也会越来越丰富。Smart OE.侧重2C的服务，强调用户体验，通过平台消费运营场景提高客户粘性，公测仅两个月，注册用户数已达到10000+，每月新增用户数1700+，认证用户占比＞96%，活跃用户占比＞80%，其应用效果远超预期，真正实现了“互联网+园区/地产”。</p>
        </div>
      </div>
    </div>
    <div id="hxkj">
      <div class="case-content">
        <h3>华鑫科技园</h3>
        <div class="block"></div>
        <h6>构建生产性和生活性服务全面集成的产城融合平台</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >华鑫置业（集团）有限公司致力于通过智慧产业社区的开发与运营进行城市更新的实践，提升区域功能和城市品质。华鑫科技园位于上海市徐汇区，建筑体量超过40万平，随着企业的不断集聚，员工人数越来越多，如何盘活服务资源，提升园区服务的触达率，构建跨部门联动的服务体系，实现可持续运营，成为了华鑫科技园最值得思考的问题。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、构建线上线下一体化的园区O2O服务平台“一见倾鑫”</p>
          <p class="case-normal">2、提供“企业端”、“个人端”、“商户端”三类应用</p>
          <p class="case-normal">3、以区域氛围打造为目标的全生态服务统筹、组织与运营</p>
          <p class="case-normal">4、软硬件无缝链接，提供轻量化、移动化的便捷服务体验</p>
          <p class="case-normal">5、多主体、多服务模式的可配置设定，实现自动结算</p>
        </div>
        <img src="~@/assets/img/case/case4.png" alt />
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >“一见倾鑫”平台的构建，其难点在于服务主体的多元化，包括园区服务公司（平台运营方），园区物业公司，园区资产营销公司、引入的第三方服务供应商和线下商户等，其服务模式也多种多样，有一次性付费，也有后付费的形式，产品有实物类、也有服务类，服务对象有企业，也有个人，其结算体系也相当复杂。因此，构建一个集成式、可配置的底层框架就非常关键，BiPark平台正好满足了异构应用的接入和流程的可配置性。平台上线至今，已拥有近15000注册用户，每天打卡 “一见倾鑫”APP，已经成为入驻企业和员工的日常习惯，订会议室、交停车费、查班车、预约访客、订下午茶……平台将移动互联网的便利性极大地发挥，让华鑫置业，所创不止所建！</p>
        </div>
      </div>
    </div>
    <div id="bdkj" class="bgcfb">
      <div class="case-content">
        <h3>北大科技园</h3>
        <div class="block"></div>
        <h6>积分换服务，基于全线大数据的互动式服务运营模式</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >北大科技园始创于1992年，是北京大学为响应国家“科教兴国”战略、“985工程”战略，促进北京大学科研成果产业化而建立的，是国家科技部、教育部首批认定的国家级大学科技园之一。北大科技园以“发展原创科技，建设精品园区”为宗旨，下设11家园区，致力于将高校的科技创新资源转化为现实生产力。为了进一步强化北大元素和品牌影响力，建立北大特有的服务孵化体系，在更广的层面输出智力资源，服务更多的初创型科技企业，并实现跨地域、多基地的统一化管理，北大科技园亟需通过线上平台实现运营模式的转型。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、搭建具有北大特色的互动式创新服务资源共享平台，输出智力资源</p>
          <p class="case-normal">2、通过积分换服务，增强用户参与度，提升资源利用率，实现滚动式服务运营</p>
          <p class="case-normal">3、“创启未来”、“企业百家行”、“北大创业孵化营”等品牌活动线上跨域宣传，赛况直播</p>
          <p class="case-normal">4、通过软件平台固化统一的园区管理规范，实现所有分园标准化运营</p>
          <p class="case-normal">5、基于十大业务主题，构建相互关联的数据仓库，实现科学决策</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >北大科技园智慧园区项目是一个体系化工程，整个项目可归纳为四个阶段，即夯实基础业务阶段、创新孵化服务阶段、大数据分析阶段和品牌运营输出阶段，而如今已覆盖了北大科技园的11个分园基地。直到现在北大科技园智慧园区项目还在不断深化的过程中，这个创新过程会伴随运营战略的发展不断进化，不断为科技园的创新创业助力发展。</p>
        </div>
        <img src="~@/assets/img/case/case5.png" alt />
      </div>
    </div>
    <div id="shjd">
      <div class="case-content">
        <h3>上海交大科技园</h3>
        <div class="block"></div>
        <h6>十三园品牌化运作，构建集团式集中运营管控体系</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >上海交通大学国家大学科技园作为国家科技部、教育部联合命名的首批国家大学科技园之一，构筑以科技企业为主体，产学研相结合创新体系，是国家创新体系重要组成部分，是区域经济发展和技术进步的重要创新源泉之一，是一流大学实现社会功能和产学研结合的重要平台。上海交大科技园目前管理的孵化器、科技园达13家，多个成熟基地独立运营，地域分散，缺少一个融合、共享运营数据的平台，总园对各基地运营情况无法及时获取准确信息，需要解决基地数据掌握难、查询难、统计分析难的问题。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、实现一园多基地跨地域的集中管控，加强总园对分园的绩效考评</p>
          <p class="case-normal">2、实现企业数据的整合与挖掘，建立企业信用评估体系</p>
          <p class="case-normal">3、实现园区线下资源的线上化，为建立O2O服务平台奠定基础</p>
          <p class="case-normal">4、实现创新项目的在线对接、线上路演</p>
        </div>
        <img src="~@/assets/img/case/case6.png" alt />
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >上海交大科技园的信息化平台启动较早，自2013年开始建设，首先在一家园区试点，除了孵化运营管控平台和园区基础服务平台，还融入了企业门户、活动报名、火炬统计上报、区政府季度上报、企业信用评估等个性化业务功能。在园区信息化平台稳健实施的基础上，逐步向分园区进行推广应用，实现平台集团化管理，并进一步实现了分园区在线绩效考评管理。</p>
        </div>
      </div>
    </div>
    <div id="zjyg" class="bgcfb">
      <div class="case-content">
        <h3>张江药谷</h3>
        <div class="block"></div>
        <h6>搭建O2O生物医药公共技术服务平台，盘活行业特色资源</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >国家上海生物医药科技产业基地（被誉为“张江药谷”）始建于1994年，是上海市生物医药研发创新与产业化核心区，经过十余年的发展，张江药谷已形成了完善的生物医药创新体系和产业集群，是国内生物医药领域研发机构最集中、创新实力最强、新药创制成果最突出的基地之一，因此，张江药谷的发展目标应该超越国内层面直接定位于国际竞争。早在2005年，园区领导就提出：“园区的信息化规划与建设必须紧扣张江药谷的总体战略及发展目标，总体规划分布实施，在更高的起点上帮助园区构建卓越的现代高技术产业园区的管理与服务创新体系，打造国家级生物医药园区的典范。”</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、通过线上服务平台对基地现有的新药开发和产业经营资源进行充分整合和优化</p>
          <p class="case-normal">2、结合线下生物医药公共技术服务平台，探索O2O服务模式，扩大服务半径</p>
          <p class="case-normal">3、构建生物医药行业共性平台，实现组团服务，降低小微企业的成本投入</p>
          <p class="case-normal">4、构建卓越的生物医药园区运行管理标准，并依托精细化运营平台得以执行</p>
        </div>
        <img src="~@/assets/img/case/case7.png" alt />
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >张江药谷园区信息化管理及服务平台项目紧扣园区的总体发展定位和目标，采用总体规划、分布实施的稳健策略，成熟一个上线一个，在八年的时间里，逐步建成了门类齐全的管理系统及服务平台，涵盖园区运营和服务的方方面面。通过各项业务系统的建设及上线运营，显著优化以客户为中心的业务流程，提升内部工作效率，实现管理与服务的科学、透明、高效，保持与客户（企业）的及时沟通，确保服务响应的及时、有效。</p>
        </div>
      </div>
    </div>
    <div id="lkjj">
      <div class="case-content">
        <h3>临空经济园区</h3>
        <div class="block"></div>
        <h6>集成区域服务入口，构建具有航空特色的服务总站</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >上海虹桥临空经济园区位于长宁区西侧，毗邻世界最大的虹桥综合交通枢纽，规划总面积为5.14 平方公里。园区坚持高起点的“园林式、高科技、总部型”的发展目标，历时二十年，已经成为上海发展现代服务业黄金走廊的西部核心，成为连接整个泛长三角地区、长江流域地区一个最具活力和辐射力的现代服务业集聚区。作为一家成熟的园区，原始积累已经完成，下一步最迫切的是要实现创新突破，提升品牌价值，而最直接和最有效的方式便是数字化转型，颠覆传统的运营观念，拥抱互联网。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、提供集成式门户，全面整合园区、政府、机构、商户等服务入口</p>
          <p class="case-normal">2、搭建园企互动平台、实现园区基础服务的线上化、自助化</p>
          <p class="case-normal">3、建设具有航空特色的政策服务平台，实现一网式申请受理审批</p>
          <p class="case-normal">4、接入第三方优质服务资源，打通服务资源的汇集和配送渠道</p>
          <p class="case-normal">5、实现招商、项目落地、服务跟踪、资产管理各业务条线线上化</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >平台建设分为提升服务和优化管理两大部分，在服务侧，建设原则是构建区域“服务总站”，在功能层面重点建设航空政策服务、影院服务（自运营）、临空学坊（培训基地）、园区班车等特色化服务板块；在管理侧，首先是基于统一的架构规划，实现各条线业务流、信息流、数据流的归集，在此基础上，着重建设招商与服务运营平台。目前平台已完成两期建设，构建了品牌统一、资源统筹共享、覆盖广泛的一体化、开放式的产业服务平台网络体系和园区运营管理体系。</p>
        </div>
        <img src="~@/assets/img/case/case8.png" alt />
      </div>
    </div>
    <div id="ypkc" class="bgcfb">
      <div class="case-content">
        <h3>杨浦科创</h3>
        <div class="block"></div>
        <h6>互联网+“杨浦模式”，360°客户画像助力精准服务</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >上海杨浦科技创业中心成立于1997年，目前已成为国内孵化众创的标杆引领者，开创了中国孵化器发展之“杨浦模式”。目前杨创旗下已设有10家科技园区、9家职能子公司，百万平米科技园区，数千余家企业资源，已形成较完整的集团化管理体系。对于杨浦科创来说，提升园区企业服务能级、实时掌握企业诉求、了解孵化企业成长轨迹、合理协调园区服务资源等是工作中的重点。园区管理层希望通过信息化系统固化各项企业服务流程、建立“联络员”与企业绑定的服务机制。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、孵化器精准化运营管理典范，实现企业全生命周期跟踪服务与管理</p>
          <p class="case-normal">2、建立企业走访标准表单，将需求描述格式化，实现企业诉求的深入分析</p>
          <p class="case-normal">3、实现物业经租多种付费模式、多种优惠方式、多种房源配搭等复杂计费管理</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >本项目自2012年上线以来，系统管理的孵化企业近4000家、企业科技成果（专利、软件著作权、商标等累计超过1800项）、帮助企业申报科技项目达400个等等。本系统的顺利上线使用，更加深化了杨浦科创对孵化业务精细化的管理和服务绩效管控机制，为“杨浦模式”卓越孵化器品牌的打造提供了切实的技术保障。</p>
        </div>
        <img src="~@/assets/img/case/case9.png" alt />
      </div>
    </div>
    <div id="mdjt">
      <div class="case-content">
        <h3>牡丹集团</h3>
        <div class="block"></div>
        <h6>“软件定义一切”，实现技术+平台+生态的战略转型</h6>
        <div class="case-info">
          <p class="case-blue">
            <span></span>业务挑战与需求特征
          </p>
          <p
            class="case-normal"
          >牡丹集团自1990年成立以来，历经了三次重大转型升级。数字经济新时代，在国家高质量发展现代经济体系及创新的驱动下，牡丹集团再次进行战略调整，以“打造智慧园区，建设数字牡丹”为转型方向，逐步成为集工业互联网为基础的数字技术研发、科技产业孵化、园区综合运营于一体的现代生产性服务业企业。探索通过互联网、大数据、人工智能等新技术，构建智慧型科技园区、打造智能制造服务平台。</p>
        </div>
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目建设内容
          </p>
          <p class="case-normal">1、基于移动互联网开发轻量便捷的智慧园区集成式服务应用，强化积分持续运营</p>
          <p class="case-normal">2、通过AIOT技术对接各类智能化设备，实现一体化支付、智能化体验、全链路服务</p>
          <p class="case-normal">3、建立多方共享、跨部门协作的精细化运营管控平台，实现价值数据的全面沉淀</p>
          <p class="case-normal">4、搭建园区总体信息化框架，实现服务统一入口、业务统一调度，构建数据中台</p>
        </div>
        <img src="~@/assets/img/case/case10.png" alt />
        <div class="case-info">
          <p class="case-blue">
            <span></span>项目实施及应用情况
          </p>
          <p
            class="case-normal"
          >在牡丹智慧园区项目实施过程中，牡丹园各部门积极配合，遵循牡丹集团战略调整的主要思路，通过线上平台的流程重组，借助技术手段，增强了园区的自运营能力，实现了服务与交易自动化，并构建智能制造平台，全方位实现牡丹集团与生态产业企业、人才的服务交互。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTop from "components/content/PageTop.vue";

export default {
  data() {
    return {
      title: [
        { name: "张江高科", id: "zjgk" },
        { name: "上海临港松江科技城", id: "shlg" },
        { name: "华润置地", id: "hrzd" },
        { name: "华鑫科技园", id: "hxkj" },
        { name: "北大科技园", id: "bdkj" },
        { name: "上海交大科技园", id: "shjd" },
        { name: "张江药谷", id: "zjyg" },
        { name: "临空经济园", id: "lkjj" },
        { name: "杨浦科创", id: "ypkc" },
        { name: "牡丹集团", id: "mdjt" }
      ],
      current: 0
    };
  },

  components: {
    PageTop
  },

  computed: {},
  methods: {
    tabClick(index) {
      this.current = index;
    }
  }
};
</script>
<style scoped>
#case .case-choose {
  margin: 60px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-around;
  width: 1170px;
  height: 110px;
  text-align: center;
}
#case .case-choose a {
  width: 18%;
  height: 41px;
  line-height: 41px;
  font-size: 18px;
  color: #666;
  border: 1px solid #e2e2e2;
  border-radius: 41px;
}
#case .case-choose a:hover,
#case .case-choose a.active {
  background-color: #1976d2;
  color: #fff;
  border-color: #1976d2;
  cursor: pointer;
}
#case .case-content {
  margin: 0 auto;
  width: 1170px;
  padding: 60px 0;
  text-align: center;
}
#case .case-content h3 {
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}
#case .case-content h6 {
  font-size: 20px;
  font-weight: 500;
  padding: 15px 0;
  margin-bottom: 50px;
}
#case .case-content .case-info {
  text-align: start;
  margin-bottom: 30px;
}
#case .case-content .case-blue {
  margin-bottom: 10px;
  color: #1976d2;
  font-weight: bold;
  font-size: 16px;
}
#case .case-content .case-blue > span {
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  background-color: #1976d2;
}
#case .case-content .case-normal {
  font-size: 16px;
  line-height: 2;
  color: #666;
}
#case .case-content img {
  width: 936px;
  margin: 30px 0;
}
</style>