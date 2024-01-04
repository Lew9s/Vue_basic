<script setup>
import { articleGetAllService, articleSearchService } from '@/api/article.js';
import { ref } from 'vue';
const articleList = ref([]);
//获取文章数据
//同布获取articleGetAllService的返回结果
const getAllArticle = async function () {
    let data = await articleGetAllService();
    articleList.value = data;
}

getAllArticle();


//定义响应式数据
const searchConditions = ref({
    category: '',
    state: ''
})

//声明search函数
const search = async function () {
    let data = await articleSearchService({ ...searchConditions.value });
    articleList.value = data;
}
</script>
<template>
    <div id="app">

        文章分类: <input type="text" v-model="searchConditions.category">

        发布状态: <input type="text" v-model="searchConditions.state">

        <button v-on:click="search">搜索</button>

        <br />
        <br />
        <table border="1 solid" colspa="0" cellspacing="0">
            <tr>
                <th>文章标题</th>
                <th>分类</th>
                <th>发表时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
            <tr v-for="(article, index) in articleList">
                <td>{{ article.title }}</td>
                <td>{{ article.category }}</td>
                <td>{{ article.time }}</td>
                <td>{{ article.state }}</td>
                <td>
                    <button>编辑</button>
                    <button>删除</button>
                </td>
            </tr>
        </table>
    </div>
</template>