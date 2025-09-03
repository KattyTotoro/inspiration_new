<template>
  <p v-if="!posts?.length">Публикаций пока нет</p>

  <!-- Блок со списком публикаций -->
  <div v-else class="blockList">
    <div class="post" v-for="post, index of posts" :key="post.id">
      <NuxtImg v-if="[0,1].includes(index)" :src="`${post.img}`" sizes="200px sm:100%" preload />
      <NuxtImg v-else :src="`${post.img}`" sizes="200px sm:100%" loading="lazy"/>
      <div class="postPreview">
      <h2><NuxtLink :to="`/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink></h2>
      <p>{{ post.preview }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['posts'])
</script>

