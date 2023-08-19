<template>
  <div>default layout</div>
  <el-button>
    <router-link to = '/'>index</router-link>
  </el-button>
  <el-button>
    <router-link to = 'about'>about</router-link>
  </el-button>

  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
