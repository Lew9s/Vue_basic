
<script lang="ts" setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
</script>
<template>
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
    </el-row>

    <el-row>
        <el-button :icon="Search" circle />
    </el-row>
</template>
  
  