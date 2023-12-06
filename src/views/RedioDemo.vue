<template>
    <!-- v-model 做绑定表示是一组 当然一组中间只能选择一个 -->
    <div>
        <el-radio v-model="radio" label="1">选项1</el-radio>
        <el-radio v-model="radio" label="2">选项2</el-radio>
        <el-radio v-model="radio" label="3" @change="change()">切换</el-radio>
    </div>
 

</template>

<script>
export default {
    data () {
        return {
            radio : '2'  // 配置选中  属性是 label的值
        }
    },
    methods : {
        change () {
            console.log("当前选中的radio值" + this.radio);
        }
    }
}
</script>
