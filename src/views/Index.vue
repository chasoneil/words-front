<template>
    <div style="width: 100%; height: 100vh; background-color: #eae9f3;">
        <div>
            <Header></Header>
        </div>                
        <div class="body-content">
            <router-view/>     
        </div>     
    </div>
</template>

<style>
.body-content {
    margin-top: 10px;
}
</style>

<script>

import Header from './words/IndexHeader.vue'

export default {
    components : {
        Header
    },

    data () {
        return {
            
        }
    },
}
</script>
