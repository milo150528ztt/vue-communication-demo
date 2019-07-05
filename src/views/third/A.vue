// 兄弟A组件
<template>
    <div>
        <h3>A组件：{{ name }}</h3>
        <button @click="asendc">A组件将数据发送给C组件</button>
        <hr/>
    </div>
</template>

<script>

export default {
    
    name: 'A',
    components: {

    },
    
    data() {
        return {
            name: 'LiLy'
        }
    },
    methods: {
        asendc() {
            // 定义一个空的VUE实例
            // var Event = new Vue()
            Event.$emit("data-a",this.name)

        }
    }
}
</script>
<style scoped>
   
</style>


