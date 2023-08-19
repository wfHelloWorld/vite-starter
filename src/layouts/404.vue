<template>
    <div>
        <h1>404</h1>
        <router-view></router-view>
        <el-button @click="router.back">返回</el-button>

    </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped>

</style>