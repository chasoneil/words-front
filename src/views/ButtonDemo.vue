<template>
    <div>
        <h3>展示按钮相关功能</h3>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>

        <p></p>

        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete" disabled></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>

        <p></p>
        <el-row>
            <el-button type="primary" icon="el-icon-search" @click="load()" :loading="flag">搜索</el-button>
        </el-row>

        <p></p>

        <el-row>
            <el-button type="primary" size="medium">主要按钮</el-button>
            <el-button type="primary" size="small">主要按钮</el-button>
            <el-button type="primary" size="mini">主要按钮</el-button>
        </el-row>

    </div>
</template>

<script>

export default {
    name: "Test",
    methods : {
        load () {
            // do methods 
            this.flag = true;
            setTimeout(() => {
                this.flag = false;
            }, 3000)
        }
    },
    // 返回的数据放在这里
    data(){
        return {
            flag : false
        }
    }
}

</script>

<style scoped>

</style>
