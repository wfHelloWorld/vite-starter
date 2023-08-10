<template>
  <div>hello world</div>
  <div class="p-4">hello world</div>
  <div>{{ msg }}</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div ref="target">x: {{ x }}, y: {{ y }}, isOutside: {{ isOutside }}</div>
  <UserHelloWorld></UserHelloWorld>
</template>

<script setup lang="ts">
const msg = ref('Hello world11')

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
