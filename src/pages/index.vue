<template>
  <div>hello world</div>
  <div class="p-4">hello world</div>
  <div>{{ msg }}</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div ref="target">x: {{ x }}, y: {{ y }}, isOutside: {{ isOutside }}</div>
  <UserHelloWorld></UserHelloWorld>

  <el-text class="mx-1">Default</el-text>
  <el-text class="mx-1" type="primary">Primary</el-text>
  <el-text class="mx-1" type="success">Success</el-text>
  <el-text class="mx-1" type="info">Info</el-text>
  <el-text class="mx-1" type="warning">Warning</el-text>
  <el-text class="mx-1" type="danger">Danger</el-text>

  <!-- PWA测试 -->
  <ReloadPrompt></ReloadPrompt>
  hello

  <!-- Vue Macros emit语法糖测试 -->
  <Child @click-count="handleClick"></Child>
</template>

<script setup lang="ts">
import Child from '@/components/Child.vue'

import { registerSW } from 'virtual:pwa-register'

onMounted(() => {
  registerSW({
    immediate: true,

    // // 提示需要更新
    // onNeedRefresh() {
    //   console.log('nee refresh')
    // },

    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
        console.log('更新')
      }, 5000) // 5秒自动更新
    }
  })
})

// Vue Macros 语法糖
defineOptions({
  name: 'HomeIndex11'
})

const msg = ref('Hello world11')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)

const handleClick = (num: number) => {
  console.log(num)
}
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
