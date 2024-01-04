<script setup>
import { ref, onMounted } from 'vue'
//声明响应式数据 响应式对象有个内部属性为value
//在组合式api中一般需要将数据定义为响应式数据
const count = ref(0);
function increment() {  //声明函数
    count.value++;
}
//声明钩子函数
onMounted(() => {
    console.log("vue已经挂载完毕");
})
</script>
<template>
    <button @click="increment">
        count:{{ count }}
    </button>
</template>