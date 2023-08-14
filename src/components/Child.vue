<template>
  <div>
    <p>Vue Macros emit语法糖测试</p>
    <p>Child Component</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script setup lang="ts">
const num = ref(0)

// 原始写法
const emits = defineEmits<{
  (e: 'clickCount',num:number):void
}>()

// 语法糖写法(编辑器报错但能运行)
// const emits = defineEmits<{
//   clickCount(num: number): void
// }>()

const handleClick = () => {
  console.log('click')
  
  emits('clickCount', ++num.value)
}

</script>

<style scoped></style>
