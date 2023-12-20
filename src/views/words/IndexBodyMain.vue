<template>
    <el-row>
        <el-col :span="24">
            <el-col :span="6">
                <div class="grid-content bg-purple" style="margin: 10px;"></div>
            </el-col>
            <el-col :span="12">
                <el-carousel :interval="8000" type="card" height="200px" @change="handleCarousel">
                    <el-carousel-item :key="japan.value" style="border-radius: 8px;">
                        <img src="../../assets/backgroud/Japan1.jpeg" width="100%" height="100%" @click="handleClick(japan.value)">
                        <h1 class="medium" style="color: #fff;position: absolute; top: 10px; left: 10px;">{{ japan.title }}</h1>
                    </el-carousel-item>
                    <el-carousel-item :key="english.value" style="border-radius: 8px;">
                        <img src="../../assets/backgroud/English1.jpg" width="100%" height="100%;" @click="handleClick(english.value)"> 
                        <h1 class="medium" style="color: #fff;position: absolute; top: 10px; left: 10px;">{{ english.title }}</h1>
                    </el-carousel-item>
                    <el-carousel-item :key="german.value" style="border-radius: 8px;">
                        <img src="../../assets/backgroud/German.jpeg" width="100%" height="100%;" @click="handleClick(german.value)"> 
                        <h1 class="medium" style="color: #fff;position: absolute; top: 10px; left: 10px;">{{ german.title }}</h1>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple" style="margin: 10px;"></div>
            </el-col>
        </el-col>
    </el-row>   
</template>

<style>
    
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
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

<script>
export default {
    data () {
        return {
            japan : {
                title : '背日语单词',
                value : 1
            }, 
            english : {
                title : '背英语单词',
                value : 2
            }, 
            german : {
                title : '背德语单词',
                value : 3
            }        
        }
    },
    methods : {

        // carousel change cause event 
        handleCarousel (index, lastIndex) {
            // do nothing
        },


        handleClick (val) {
            if (val === 1) {
                this.$router.replace('/jp_rem')
            }

            if (val === 2) {
                console.log('click english');
            }

            if (val === 3) {
                console.log('click german');
            }
            
        }
    }
}

</script>