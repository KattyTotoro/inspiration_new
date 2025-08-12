<template>
  <p v-if="!posts?.length">Публикаций пока нет</p>
  <div v-else class="blockList">
    <div class="post" v-for="post of posts" :key="post.id">
      <NuxtImg :src="`${post.img}`" sizes="300px" loading="lazy" />
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

