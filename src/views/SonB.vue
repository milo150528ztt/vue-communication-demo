// ParentB的子组件
<template>
    <div>
        <div class="txtDiv">
            <p>1.子组件中点击事件 @click </p>
            <p>2. 在子组件中 $emit 向父组件传值 titleChanged在父组件中会用到</p>
        </div>
       
        <h2 @click="changeTitle">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'SonB',
    components: {

    },
    
    data() {
        return {
            title: '子组件中-自定义的标题，可点击',
        }
    },
    methods: {
        // 点击事件
        changeTitle () {
            this.$emit("titleChanged","子组件传过来值了")
        }
    }
}
</script>
<style scoped>
   .txtDiv {
       border: 1px solid hotpink
   }
</style>


