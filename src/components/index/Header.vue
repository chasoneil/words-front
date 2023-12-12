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
            user : JSON.parse(sessionStorage.getItem('curUser'))        // 将缓存的用户信息保存
        }
    },
    methods : {
        toUser () {
            this.$router.push('/')                  // 跳转到个人中心
        },
        logout () {
            this.$confirm ('确定要退出登录?', '提示', {
                confirmButtonText : '确认',
                type : 'warning',
                center : true
            }).then(() => {
                this.$message({
                    type : 'success',
                    message : '退出登录成功'
                })
                this.$router.push('/') // 退出跳转  执行清理缓存数据
                sessionStorage.clear()
            }).catch(() => {
                this.$message({
                    type : 'info',
                    message : '取消退出'
                })
            })          
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