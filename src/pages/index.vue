<template>
  <div>hello world</div>
  <div class="p-4">hello world</div>
  <div>{{ msg }}</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div ref="target">x: {{ x }}, y: {{ y }}, isOutside: {{ isOutside }}</div>
  <UserHelloWorld></UserHelloWorld>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <!-- Vue Macros emit语法糖测试 -->
  <Child @click-count="handleClick"></Child>
</template>

<script setup lang="ts">
import Child from '@/components/Child.vue'

// Vue Macros 语法糖
defineOptions({
  name:'HomeIndex11'
})

const msg = ref('Hello world11')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)

const handleClick = (num:number) => {
  console.log(num)
}

</script>

<style scoped></style>

<route lang="yaml">
  meta:
    layout: default
  </route>