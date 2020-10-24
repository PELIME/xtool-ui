<template>
    <div class="xtool-card-wrapper">
        <div>数据更新日期：<span>{{updateTime}}</span></div>
        <div>姓名：<span>{{name}}</span></div>
        <div>身份证号码：<span>{{idnum}}</span></div>
        <div>客户号：<span>{{id}}</span></div>
        <div>电话号码：<span>{{phone}}</span></div>
        <div>最后登录时间：<span>{{lastLoginTime}}</span></div>
        <div>最后动账时间：<span>{{lastSpendTime}}</span></div>
        <div>管户人员：<span>{{manageWorker}}</span></div>
    </div>
</template>
<script>
export default {
    name:'XtoolCardWrapper',
    props:{
        name:String,
        idnum:String,
        id:String,
        phone:String,
        updateTime:String,
        lastLoginTime:String,
        lastSpendTime:String,
        manageWorker:String
        }
}
</script>
<style>
.xtool-card-wrapper{
    width: 80%;
    margin: 5px auto;
    background: #dedede;
    border-radius: 10px;
}
.xtool-card-wrapper div{
    text-align: left;
    font-size: 20px;
}
.xtool-card-wrapper div span{
    font-weight: 700;
}
</style>