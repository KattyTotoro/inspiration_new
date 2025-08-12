<template>
    <section class="content">
      <h1>Статьи<br>
      <strong>Путеводители среди знаний</strong></h1>

<div>

  <p v-if="!posts?.length">Публикаций пока нет</p>

  <div v-else class="blockList">
    <div class="post" v-for="post, index of posts" :key="post.id">
      <NuxtImg v-if="[0,1].includes(index)" :src="`${post.img}`" sizes="100vw sm:50vw md:400px" preload />
      <NuxtImg v-else :src="`${post.img}`" sizes="100vw sm:50vw md:400px" loading="lazy"/>
      <div class="postPreview">
        <h2><NuxtLink :to="`/posts/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink></h2>
        <p>{{ post.preview }}</p>
      </div>
    </div>
  </div>

</div>

    </section>
</template>


<script setup lang="ts">
// import { usePosts } from '~/stores/posts';
useSeoMeta({
  title: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  ogTitle: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  description: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogDescription: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogImage: '/img/summary_small_image.png',
  twitterCard: 'summary_large_image',
})

const {data} = await useFetch('/api/post/by_rubrics/1')
const posts = ref(data.value?.posts)

</script>

