<!-- remember japan words index page -->
<template>
    <div class="app-container">
        <el-row>
            <el-col :span="8">
                <div class="content dic-content bg-purple">
                    <div class="index-title-1"><h2>词典选择</h2></div>
                    <!-- content -->
                    <div>
                        <el-row>
                            <el-col :span="12">
                                <div class="dic-select dic-select-left"></div>
                            </el-col>
                            <el-col :span="12">
                                <div class="dic-select dic-select-right"></div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="content class-content bg-purple">
                    <div class="index-title-1"><h2>章节选择</h2></div>
                </div>
            </el-col>
        </el-row>
    </div>    
</template>
    
<style>
.content {
    background: #d7dcdf;
    min-height: 70vh;
    border-radius: 5px;
    margin: 15px;
}
.dic-content {
    margin-left: 35px;
}
.class-content {
    margin-right: 35px;
}

.index-title-1 {
    margin-left: 15px;
    padding-top: 1px;
}
.dic-select {
    min-height: 100px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.dic-select-left {
    margin-left: 35px;
    margin-right: 15px;
}
.dic-select-right {
    margin-left: 15px;
    margin-right: 35px;
}
</style>

<script>
export default {
    data() {
        return {
          
        }
      },

    created() {
        this.init();
    },

    methods : {
        init() {
            // do init jp class
        }
    }
};
</script>