// ParentA的子组件A
<template>
    <div class="hello">
        <p>父组件ParentA通过props向下传递数据给子组件SonA. 备注：组件中的数据只有三种形式：data、props、computed</p>
        <div class="txt-div">
            <p>子组件中定义props{}属性,在props中定义listA</p>
        </div>
        <!-- 遍历从父组件ParentA传递的值 显示到子组件SonA中  -->
        <ui>
            <li v-for="(user,index) in listA" :key="index">{{ user }}</li>
        </ui>
    </div>
</template>

<script>
export default {
    name: 'SonA',
    components: {

    },
    props: {
        listA: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    .hello {
        text-align: center
    }
    .txt-div {
    /* text-align: left; */
    border: 1px solid pink
}
</style>


