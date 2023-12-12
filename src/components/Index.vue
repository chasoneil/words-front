<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="auto" style="background-color: rgb(238, 241, 246); height: 100%">
            <!-- 将这个值传递给子组件 -->
            <AsideI :isCollapse="isCollapse"></AsideI>
        </el-aside>
        
        <el-container style="height: 100%;">
            <el-header style="text-align: right; font-size: 12px; border-bottom: #b9c3cf 1px solid">
                <Header @doCollapse="doCollapse" :icon="icon"></Header>
            </el-header>
            <el-main>
                <!-- <User></User> -->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
  </template>

<style>
  .el-header {
    background-color: azure;
    color: #333;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
import AsideI from './index/AsideI.vue'
import Header from './index/Header.vue'

export default {

    components : {
        AsideI,
        Header
    },

    data () {
        return {
            isCollapse : false,
            icon:'el-icon-s-fold'
        }
    },

    methods: {
        doCollapse () {
            this.isCollapse = !this.isCollapse
            if (this.isCollapse) {
                this.icon = 'el-icon-s-unfold'
            } else {
                this.icon = 'el-icon-s-fold'
            }
        }
    }

}
</script>
