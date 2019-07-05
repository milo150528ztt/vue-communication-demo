// C组件
<template>
    <div>
        <h3>C组件：{{ name }} , {{ age }}</h3>
    </div>
</template>

<script>

export default {
    name: 'C',
    components: {

    },
    
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {

    }
}
</script>
<style scoped>
   
</style>


