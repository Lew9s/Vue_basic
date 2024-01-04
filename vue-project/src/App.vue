<!-- <script>
/* 写数据 */
export default {
  data() {
    return {
      msg: "伤害"
    }
  }
}
</script>
 -->
<script setup>
import { ref } from 'vue';
//调用ref函数，定义响应式数据
const msg = ref('西安')
//导入api.vue文件
import ApiVue from './Api.vue'
//导入article.vue文件
import ArticleVue from './article.vue'
</script>
<template>
  <!-- Html -->
  <!-- <h1>背景</h1> -->
  <h1>{{ msg }}</h1>
  <br>
  <ApiVue></ApiVue>
  <br>
  <ArticleVue></ArticleVue>
</template>

<style scoped>
/* 样式 */
h1 {
  color: blueviolet;
}
</style>
