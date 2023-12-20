<template>
    <el-row>
        <el-col :span="24">
            <el-col :span="24">
                <div class="grid-content bg-back">
                    <div class="title-picture-container" style="">
                        <img src="../../assets/logo/title.jpg" width="100%" height="100%" style="border-radius: 8px;">
                    </div>
                    <div style="padding-top: 15px;margin-left: 120px;">
                        <h1 style="color: #4193d6;">Words Remember</h1>
                    </div>
                </div>
            </el-col>
            <!-- <el-col :span="12"><div class="grid-content bg-back"></div></el-col> -->
        </el-col>
    </el-row>
</template>

<style>
    
    .title-picture-container {
        height: 70%; 
        width: 8vh; 
        float: left;
        margin: 16px;
        border-radius: 8px;
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .bg-back {
        background: #eae9f3;
    }
    .grid-content {
        border-radius: 4px;
        height: 12vh;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>