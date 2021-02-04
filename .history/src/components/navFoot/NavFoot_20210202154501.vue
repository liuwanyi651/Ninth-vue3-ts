<template>
  <div class="end">
    <div class="enda">
      <div class="enda-1">
        <div>
          <h5 class="heand">闲云旅游旅游网</h5>
          <div class="heid">上亿旅行者共同打造的"旅行神器"</div>
          <div class="heid">
            <span class="num">60,000</span>
            多个全球旅游目的地
          </div>
          <div class="heid">
            <span class="num">600,000</span>
            个细分目的地新玩法
          </div>
          <div class="heid">
            <span class="num">760,000,000</span>
            次攻略下载
          </div>
          <div class="heid">
            <span class="num">38,000</span>
            家旅游产品供应商
          </div>
        </div>

        <div>
          <h5 class="heand">关于我们</h5>
          <div class="heid">隐私政策 商标声明</div>
          <div class="heid">服务协议 游记协议</div>
          <div class="heid">商城平台服务协议</div>
          <div class="heid">网络信息侵权通知指引</div>
          <div class="heid">闲云旅游旅游网服务监督员</div>
          <div class="heid">网站地图加入闲云旅游</div>
        </div>
        <div>
          <h5 class="heand">旅行服务</h5>
          <div class="heid">旅游攻略 酒店预订</div>
          <div class="heid">旅游特价 国际租车</div>
          <div class="heid">旅游问答 旅游保险</div>
          <div class="heid">旅游指南 订火车票</div>
          <div class="heid">旅游资讯 APP下载</div>
        </div>

        <div>
          <div><img class="img" src="@/assets/erweima.png" /></div>
          <div class="imgname">关注我们</div>
        </div>
      </div>
      <div class="enda-2">京ICP备08001421号 京公网安备110108007702 Copyright &copy; 2016-2019 博学谷 All Rights Reserved</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss'>
.end {
  width: 100%;
  background: #333;
  color: #ccc;
}
.enda {
  padding-top: 30px;
  margin: 0 auto;
  width: 1000px;
}
.enda-1 {
  display: flex;
  justify-content: space-between;
}
.heand {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 10px;
}
.heid {
  line-height: 1.8;
  font-size: 12px;
}
.num {
  color: orange;
}
.img {
  width: 140px;
  height: 140px;
}
.imgname {
  text-align: center;
  font-size: 12px;
}
//
.enda-2 {
  border-top: 1px solid #666;
  margin-top: 25px;
  padding: 50px 0;
  text-align: center;
  font-size: 12px;
}
</style>