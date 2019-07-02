// 首页VUE
<template>
    <div class="index">
        <h1>父子组件之间传值</h1>
        <ul>
            <li>
                <a href="javascript:;" @click="toParentA">第一种：父组件通过props的方式向子组件传递值</a>
            </li>
            <li>
                <a href="javascript:;" @click="toSonA">去子组件A</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {},
    props: {},
    data() {
        return {
        }
    },
    methods: {
        // 去父组件
        toParentA() {
            let vm = this
            console.log('路由器输出===', vm.$router)
            vm.$router.push({
                name: 'ParentA',
            })
        },
        toSonA() {
            let vm = this
            vm.$router.push({
                name: 'SonA'
            })
        }
    }
}
</script>
<style>
    h1 {
      text-align: center  
    }
    ul > li {
        list-style: none
    }
</style>


