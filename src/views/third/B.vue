// B组件
<template>
    <div>
        <h3>B组件：{{ age }}</h3>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'B',
    components: {

    },
    
    data() {
        return {
            age: '18岁'
        }
    },
    methods: {

    }
}
</script>
<style scoped>
   
</style>


