<template>
    
    <div>
        <p>
            <el-link>base link</el-link>
        </p>
        <p>
            <el-link href="https://www.baidu.com">baidu</el-link>
        </p>  
        
        <p>
            <el-link href="https://www.baidu.com" target="_blank">超链接新页面</el-link>
        </p> 
        <p>
            <el-link href="https://www.baidu.com" disabled>超链接不可用</el-link>
        </p> 
        <!-- 去掉超链接下划线 -->
        <p>
            <el-link :underline="underLine" target="_blank">超链接无下划线</el-link>
        </p> 

        <p>
            <el-link icon="el-icon-s-tools">图标</el-link>
        </p>
    </div>

</template>

<script>
export default {

    data () {
        return {
            underLine : false
        }
    }

}
</script>
