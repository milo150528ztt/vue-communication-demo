// 父组件A
<template>
    <div>
        <p>第一种：父组件A通过props的方式向子组件A传递：</p>
        <p>父组件ParentA页面</p>
        <div class="txt-div">
            <p>1.父组件中先import子组件</p>
            <p>2.父组件component中定义子组件</p>
            <p>3.父组件html中引用子组件，用v-bind:listA="list1" (自定义名称listA便于子组件调用，子组件中的props属性添加listA,list1为父组件中的data属性中值)</p>
        </div>
        <!-- 3.引用子标签：父组件向子组件传值 -->
        <hr/>
        <p>父组件中引用的子组件：</p>
        <!-- <son-a v-bind:listA="list1"></son-a> -->
        <sona v-bind:listA="list1"></sona>
    </div>
</template>

<script>
// 1.引入子组件
import SonA from "@/views/SonA"
export default {
    name: '',
    components: {
        // 2.定义子组件
    //    SonA 
       "sona" : SonA 
    },
    props: {},
    data() {
        return {
            // 定义传到SonA的值
            list1:['Lily','Tom','Jerry']
        }
    }
}
</script>
<style scoped>
.txt-div {
    /* text-align: left; */
    border: 1px solid green
}
</style>


