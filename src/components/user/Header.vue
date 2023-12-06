<template>
    <div style="display: flex; line-height: 60px;">
        <div style="font-size: 25px;line-height: 60px;">
            <i :class="icon" @click="collapse"></i>
        </div>
        <div style="flex: 1;text-align: center;font-size: 30px;">
            <span>欢迎使用</span>
        </div>
        <el-dropdown>
            <span>{{ user.name }}</span>
            <i class="el-icon-arrow-down" style="margin-left: 5px;"></i>
            <el-dropdown-menu slot="dropdown">
                <!-- need native -->
                <el-dropdown-item @click.native="toUser">个人中心</el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>    
    </div> 
</template>

<style>
    .el-dropdown {
        margin-right: 15px;
    }
</style>

<script>
export default {
    name : "Header",
    data () {
        return {
            user : JSON.parse(sessionStorage.getItem('curUser'))
        }
    },
    methods : {
        toUser () {
            console.log("to User");
        },
        logout () {
            // 退出跳转  执行清理缓存数据
            this.$router.push('/')
            sessionStorage.clear()
        },
        collapse () {
            // 自定义了一个事件 传递给父组件 index
            this.$emit('doCollapse')
        }
    },
    props : {
        icon: String
    }
    
}
</script>