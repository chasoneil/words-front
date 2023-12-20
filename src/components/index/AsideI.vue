<template>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height: 100vh;"
      :collapse="isCollapse"
      :collapse-transition="false"
      router> 
      <el-menu-item index="index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="japan">
        <i class="el-icon-document"></i>
        <span slot="title">日语单词管理</span>
      </el-menu-item>
      <el-menu-item index="english">
        <i class="el-icon-setting"></i>
        <span slot="title">英语单词管理</span>
      </el-menu-item>
      <el-menu-item index="user">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
</template>

<style>
</style>


<script>
export default {
    data () {
        return {
            
        }
    },
    // 用于接收父组件的值?
    props: {
        isCollapse : Boolean
    }
  
}
</script>