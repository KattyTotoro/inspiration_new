<template>
  <section class="content" style="display: flex;">
  
  <div v-if="post" class="postPage">
    <!-- {{ route.params.id_title }} -->
    <!-- <br> -->
    <!-- {{ id }} -->
    <!-- <br> -->
    <h1>{{ post?.title }}</h1>
    <br>
    <NuxtImg :src="`${post?.img}`" sizes="300px"/>
        
    <div v-html="post?.text"></div>
  </div>
  <div v-else>Что-то пошло не так...</div>

  <p v-if="!posts?.length">Публикаций пока нет</p>
  <div v-else class="blockList">
    <div class="post" v-for="post of posts" :key="post.id">
      <NuxtImg :src="`img/${post.img}`" sizes="300px"/>
      <h2><NuxtLink :to="`/posts/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink></h2>
      <p>{{ post.preview }}</p>
    </div>
  </div>
  </section>


  <p>Попопопопопо</p><br><img src="/img/1738260279217.webp" alt=""><p>jklfjgfgлоопвыалдповдоворвдро</p><p>\лпдывлплапждва</p>


</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id_title.toString().split('_',1)[0]
const {data} = await useFetch(`/api/post/${id}`)
const post = ref(data.value?.post)
const posts = ref(data.value?.posts)
</script>

<style scoped>

</style>