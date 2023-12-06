
<template>
    <div class="app-container">
        <li style="width: 10%; text-align: right;" class="header-button"> 
            <el-button>刷新</el-button>
            <el-button>导入</el-button>
        </li>


    </div>



    
</template>
    
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
export default {
    data() {
        return {
          tableData: [],
          currentClassNumber : 0
        }
      },

    created() {
        this.init();
    },

    methods : {
        init() {
            this.axios({
                url: 'http://localhost:8081/jp/list',
                method: 'get',
                // headers: {'token' : token}
            }).then((response) => {
                if (response.data.code === 0) {
                    this.tableData = response.data.data;
                    console.log(this.tableData[0].classNumber);
                    this.currentClassNumber = this.tableData[0].classNumber;
                } else {
                    this.$message({
                        type : 'error',
                        message : '获取单词列表失败:' + response.data.message
                    })
                }
            })
        }
    }
};
</script>