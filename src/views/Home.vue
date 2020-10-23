<template>
  <div class="home">
    <div class="background-theme"></div>
    <div class="content">
      <md-water-mark
        class="text-container"
        :content="watermark"
        spacing="10vw"
        opacity="0.3"
      >
        <div
          class="md-example-child md-example-child-swiper md-example-child-swiper-0"
        >
          <md-swiper
            @before-change="beforeChange"
            @after-change="afterChange"
            ref="swiper"
            :is-prevent="false"
            :useNative-driver="false"
          >
            <md-swiper-item :key="$index" v-for="(item, $index) in simple">
              <div class="banner-item" :style="{ background: `${item.color}` }">
                {{ item.text }}
              </div>
            </md-swiper-item>
          </md-swiper>
        </div>
        <div class="xtool-menu">
          <div class="xtool-menu-item" v-for="item in menus" :key="item.name">
            <div class="xtool-menu-item-box">
              <div class="xtool-menu-item-icon">
                <i :class="item.icon"></i>
              </div>
              <div class="xtool-menu-item-text">
                {{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </md-water-mark>
    </div>
    <div class="labbar">
      <div
        class="md-example-child md-example-child-tabs md-example-child-tab-bar-4"
      >
        <md-tab-bar
          v-model="nowbar"
          :items="items"
          :has-ink="false"
          @change="barChange"
        >
          <template slot="item" slot-scope="{ item }">
            <div class="custom-item">
              <div class="icon">
                <md-icon :name="item.icon"></md-icon>
              </div>
              <div class="text">
                <span v-text="item.label"></span>
              </div>
            </div>
          </template>
        </md-tab-bar>
      </div>
    </div>
  </div>
</template>

<script>
import "../my-svg/search1.svg";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      nowbar: 1,
      items: [
        { name: 1, label: "首页", icon: "home" },
        { name: 2, label: "联系人", icon: "mobile-phone" },
        { name: 3, label: "资讯", icon: "volumn" },
        { name: 4, label: "我的", icon: "user" },
      ],
      watermark: "肖承祥  188815",
      simple: [
        {
          color: "red",
          text: "幸福存在于每一个真正的工作中",
        },
        {
          color: "blue",
          text: "心境善，事事皆善；心境美，事事皆美",
        },
        {
          color: "#364d79",
          text: "心境善，事事皆善；心境美，事事皆美",
        },
      ],
      menus: [
        {
          name: 1,
          label: "综合查询",
          icon: "xtool-iconguanli",
          url: "/ebank/fullSearch",
        },
        {
          name: 2,
          label: "综合查询1",
          icon: "xtool-iconguanli",
          url: "/ebank/fullSearch",
        },
        {
          name: 3,
          label: "综合查询2",
          icon: "xtool-iconguanli",
          url: "/ebank/fullSearch",
        },
        {
          name: 4,
          label: "综合查询3",
          icon: "xtool-iconguanli",
          url: "/ebank/fullSearch",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    barChange(item, index, prevIndex) {
      this.$toast.info("点击菜单：" + index + "  当前" + prevIndex);
    },
    menuChange(item) {
      console.log(item);
      //this.$router.push(item.url);
    },
    //轮播图片方法
    setValue(id, value) {
      document.querySelector(id) &&
        (document.querySelector(id).innerHTML = value);
    },
    beforeChange(from, to) {
      this.setValue("#valueSwiper0", from);
      this.setValue("#valueSwiper1", to);
    },
    afterChange(from, to) {
      this.setValue("#valueSwiper2", from);
      this.setValue("#valueSwiper3", to);
    },
    fn(index) {
      this.setValue("#valueSwiper4", index);
    },
    goto() {
      this.$refs.swiper.goto(2);
    },
    play() {
      this.$refs.swiper.play();
    },
    stop() {
      this.$refs.swiper.stop();
    },
  },
};
</script>
<style>
.md-example-child-tab-bar-4 .custom-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
}
.md-example-child-tab-bar-4 .custom-item .text {
  font-size: 20px;
}
.labbar {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.md-example-child-swiper-0 {
  height: 250px;
}
.md-example-child-swiper-0 .banner-item {
  color: white;
  float: left;
  width: 100%;
  height: 100%;
  line-height: 250px;
  text-align: center;
  font-size: 28px;
  color: "#FFF";
  box-align: center;
  align-items: center;
  box-pack: center;
  justify-content: center;
  text-decoration-line: none;
}
.background-theme {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f5f4f4;
  z-index: -999;
}
</style>