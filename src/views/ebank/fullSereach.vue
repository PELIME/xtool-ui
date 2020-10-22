<template>
  <div class="main">
    <div class="sereach-form">
      <md-field title="查找">
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
export default {
  name: "EbankFullSearch",
  data() {
    return {
      searchType: '姓名',
      searchValue:'',
      searchTypes: {
        name: "SearchType",
        label: "搜索条件",
        options: [
          {
            label: "姓名",
            value: "1"
          },
          {
            label: "身份证号码",
            value: "2"
          },
          {
            label: "客户号",
            value: "3"
          },
          {
            label: "电话号码",
            value: "4"
          }
        ]
      },
      searchTypePockerShow: false,
      actionBar:[
        {
          text:'重制',
          onClick:this.actionReset
        },
        {
          text:'搜索',
          onClick:this.actionSearch
        },
      ]
    }
  },
  computed:{
    searchTypeStr(){
      return this.searchType.map(item => item.label);
    }
  },
  methods:{
    handleChange(data) {
      this.searchType=data.options[0].label;
    },
    actionReset(){

    },
    actionSearch(){

    }
  }
};
</script>
<style>
.md-field-item.is-solid .md-field-item-title {
  width: auto;
}
</style>