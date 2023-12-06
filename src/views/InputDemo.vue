<template>
    <div>
        <el-row>
            <el-col :span="4">普通的输入框: </el-col>
            <el-col :span="4"> <el-input placeholder="请输入内容" v-model="input" clearable></el-input></el-col>
            <el-col :span="4" @click="getInput()" v-model="input1">
                <el-button type="primary">点击提交</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
      return {
        input: '',
        input1: ''
      }
    },
    methods : {
        // 获取输入框中的内容
        getInput () {
            console.log("输入框中的内容是:" + this.input1)
        }
    }
}
</script>