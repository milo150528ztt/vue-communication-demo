// SonB的父组件
<template>
    <div>
        
        <!-- 3.绑定events 获取子组件值 titleChanged 与子组件自定义事件保持一致-->
        <sonb v-on:titleChanged="updateTitle"></sonb>
        <hr/>
        <hr/>
        <h2>{{ title }}</h2>
        <div class="txtDiv">
            <p>1.import 子组件</p>
            <p>2.定义 子组件 sonb</p>
            <p>3.使用sonb v-on:titleChanged (titleChanged 与子组件自定义事件保持一致) 的方式绑定events 获取子组件值titleChanged</p>
        </div>
    </div>
</template>

<script>
// 1.引入子组件
import SonB from "@/views/two/SonB"
export default {
    name: 'ParentB',
    components: {
        //  2.定义子组件
        "sonb" : SonB
    },
    
    data() {
        return {
            title: '父组件中-获取子组件的值',
        }
    },
    methods: {
        // 声明函数
        updateTitle(e) {
            this.title = e
        }
    }
}
</script>
<style scoped>
   .txtDiv {
       border: 1px solid yellowgreen
   }
</style>


