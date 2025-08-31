<template>
  <section class="content">
    {{ route.params.search }}
    <div class="blockList">
      <div class="post" v-for="post of data?.posts" :key="post.id">
        <NuxtImg :src="`${post.img}`" sizes="300px" loading="lazy" />
        <div class="postPreview">
          <h2><NuxtLink :to="`/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}?from_posts=true`">{{ post.title }}</NuxtLink></h2>
          <p>{{ post.preview }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const search = route.params.search
const {data} = await useFetch<{ok:boolean, posts:any[]}>(`/api/post/find/${search}`)
</script>

<style scoped>

</style>