<template>
  <div class="main">
    <div class="xtool-ebanck-search-header" v-bind:style="theme.header">
      <div class="back">
        &lt; 返回
      </div>
      <div class="title">
        手机银行客户信息查询
      </div>
      
    </div>
    <div class="sereach-form">
      <md-field>
        <md-field-item
          title="条件:"
          arrow="arrow-right"
          @click="searchTypePockerShow = !searchTypePockerShow"
          placeholder="请选择搜索条件"
          :content="searchType"
        />
        <md-input-item
          ref="input0"
          title="内容:"
          solid
          :maxlength="5"
          v-model="searchValue"
        ></md-input-item>
      </md-field>
      <md-landscape v-model="showNoMask" full-screen>
        <div class="xtool-ebank-card-box">
          <ebank-card v-for="item in ebanks" :key="item.idnum" 
          :name="item.name"
          :idnum="item.idnum"
          :id="item.id"
          :phone="item.phone"
          :updateTime="item.updateTime"
          :lastLoginTime="item.lastLoginTime"
          :lastSpendTime="item.lastSpendTime"
          :manageWorker="item.manageWorker"
          ></ebank-card>
        </div>
      </md-landscape>
      <md-action-bar :actions="actionBar"></md-action-bar>
      <md-tab-picker
        title="请选择"
        describe="请选择搜索条件"
        large-radius
        :data="searchTypes"
        v-model="searchTypePockerShow"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script>
import card from "../../components/EbankUserCard";
import th from "../../api/theme.js"
export default {
  name: "EbankFullSearch",
  components: {
    "ebank-card": card,
  },
  beforeMount(){
    this.theme=th.getTheme();
  },
  data() {
    return {
      theme:{},
      searchType: "姓名",
      searchValue: "",
      searchTypes: {
        name: "SearchType",
        label: "搜索条件",
        options: [
          {
            label: "姓名",
            value: "1",
          },
          {
            label: "身份证号码",
            value: "2",
          },
          {
            label: "客户号",
            value: "3",
          },
          {
            label: "电话号码",
            value: "4",
          },
        ],
      },
      searchTypePockerShow: false,
      actionBar: [
        {
          text: "重制",
          onClick: this.actionReset,
        },
        {
          text: "搜索",
          onClick: this.actionSearch,
        },
      ],
      showNoMask: false,
      ebanks: [
        {
          name: '陶光斌',
          idnum: '510623196505292614',
          id: '	22060000533317',
          phone: '	15883428074',
          updateTime: '2020-10-14',
          lastLoginTime: '2020-10-2',
          lastSpendTime: '2020-10-2',
          manageWorker: '188815',
        },
        {
          name: '陶光斌',
          idnum: '510623196505292614',
          id: '	22060000533317',
          phone: '	15883428074',
          updateTime: '2020-10-14',
          lastLoginTime: '2020-10-2',
          lastSpendTime: '2020-10-2',
          manageWorker: '188815',
        },
      ],
    };
  },
  computed: {
    searchTypeStr() {
      return this.searchType.map((item) => item.label);
    },
  },
  methods: {
    handleChange(data) {
      this.searchType = data.options[0].label;
    },
    actionReset() {
      this.searchValue = "";
    },
    actionSearch() {
      this.showNoMask = true;
    },
  },
};
</script>
<style>
.md-field-item.is-solid .md-field-item-title {
  width: auto !important;
}
</style>
<style scoped>
.xtool-ebanck-search-header{
  height: 48px;
}
.xtool-ebanck-search-header .title{
  font-size: 18px;
  padding-top: 12px;
}
.xtool-ebanck-search-header .back{
  font-size: 15px;
  text-align: center;
  margin-left: 10px;
  float: left;
  position: absolute;
  margin-top: 16px;
}
</style>