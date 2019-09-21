<!-- 合作伙伴组件 -->
<template>
  <div id="coop-Partner">
    <!-- <div class="coop-Partner-header">
      <h1>合作伙伴</h1>
      <h2>Our client</h2>
    </div> -->
    <page-top bgcImage="合作伙伴.jpg" msg1="合作伙伴" msg2="our client"></page-top>
    <div class="coop-Partner-info">
      <h3>Bitech-智慧园区信息化领导品牌</h3>
      <div class="block"></div>
      <div class="coop-Partner-info-word">
        <p>Bitech专注智慧园区信息化领域多年，拥有专业的管理咨询与研发团队，通过融合一流园区先进管理理念与信息化实践经验，帮助园区客户快速构建现代化智慧运营体系。</p>
        <p>随着业务规模的逐步扩大和市场需求的日益旺盛，Bitech希望同更多合作伙伴达成战略共识，秉持“开放、友好、合作、共赢”的原则，整合多方资源，打造智慧园区信息化产业生态链，为园区客户提供全方位、一体化的整合式服务。</p>
        <p>让我们群策群力，共谋发展！Bitech真诚期待您的加入！</p>
      </div>
      <el-button
        class="coop-Partner-info-word-bottom"
        type="text"
        @click="dialogFormVisible = true"
      >加入我们</el-button>

      <el-dialog
        :visible.sync="dialogFormVisible"
        width="496px"
        :center="true"
        :lock-scroll="false"
        custom-class="join-us"
        title="加入我们"
      >
        <el-form :model="form">
          <el-form-item :label-width="formLabelWidth">
            <img src="../../assets/img/joinus/img_row3.png" alt />
            <input type="text" placeholder="请输入您的姓名" v-model="form.name" name="name"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth">
            <img src="../../assets/img/joinus/img_row1.png" alt />
            <input type="text" placeholder="请输入您的单位名称" v-model="form.company" name="company"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth">
            <img src="../../assets/img/joinus/img_row2.png" alt />
            <input type="tel" placeholder="请输入11位手机号" name="phone" v-model="form.phone"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth">
            <img src="../../assets/img/joinus/img_row4.png" alt />
            <input type="text" placeholder="请输入您的地址" name="address" v-model="form.address"/>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import PageTop from 'components/content/PageTop.vue'
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
        address: "",
        company: "",
        delivery: false,
      },
      formLabelWidth: "100px"
    };
  },
  components: {
    PageTop
  },

  methods: {}
};
</script>
<style scoped>
#coop-Partner .coop-Partner-info {
  margin: 0 auto;
  width: 1170px;
  padding: 50px;
  text-align: center;
}
#coop-Partner .coop-Partner-info h3 {
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
}

#coop-Partner .coop-Partner-info-word p {
  margin: 20px 0 0 0;
  text-align: left;
  line-height: 30px;
  font-size: 16px;
}
#coop-Partner .coop-Partner-info .coop-Partner-info-word-bottom {
  margin-top: 30px;
  width: 200px;
  height: 50px;
  background-color: #1976d2;
  border: none;
  border-radius: 0;
  color: #fff;
}
</style>

<style>
.join-us {
  border-radius: 20px;
  padding: 30px;
}
.el-dialog__title {
  text-align: center;
  font-size: 30px;
  color: #565656;
}
.el-form-item__content {
  margin: 0 !important;
  display: flex;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  overflow: hidden;
}
.el-form-item__content img {
  border-right: 1px solid #e3e3e3;
}
.el-form-item {
  margin-bottom: 15px;
}
.el-form-item__content input {
  width: 100%;
  border: 0;
  margin-left: 15px;
  outline: none;
}
.el-button {
  width: 100%;
  height: 50px;
  background-color: #1976d2;
  font-size: 20px;
}
</style>