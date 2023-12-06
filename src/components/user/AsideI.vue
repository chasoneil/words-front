<template>
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="height: 100vh;"
      :collapse="isCollapse"
      :collapse-transition="false"> 
      <el-menu-item index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-document"></i>
        <span slot="title">日语单词</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-setting"></i>
        <span slot="title">英语单词</span>
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