<template>
    <section class="content">
<!-- <h1>Сайт Вдохновение. Транслирование знаний. <br>
<strong>Путеводители среди знаний.</strong></h1> -->

<h1>Все публикации</h1>

<div>

  <p v-if="!posts?.length">Публикаций пока нет</p>
  <div v-else class="blockList">
    <div class="post" v-for="post of posts" :key="post.id">
      <NuxtImg :src="`${post.img}`" sizes="300px" loading="lazy" />
      <div class="postPreview">
        <h2><NuxtLink :to="`/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}?from_posts=true`">{{ post.title }}</NuxtLink></h2>
        <p>{{ post.preview }}</p>
      </div>
    </div>
  </div>
  <div v-intersection-observer="onIntersectionObserver"></div>

</div>

    </section>
</template>


<script setup lang="ts">
// import { usePosts } from '~/stores/posts';
import { vIntersectionObserver } from '@vueuse/components'
useSeoMeta({
  title: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  ogTitle: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  description: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogDescription: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogImage: '/img/summary_small_image.png',
  twitterCard: 'summary_large_image',
})
const {data} = await useFetch<{posts:any[]}>('/api/post')
const posts = ref(data.value?.posts)

let i = 1
let isDone = false
let isInit = true
const onIntersectionObserver = async()=>{
  if (!isDone && !isInit) {
    const data = await $fetch<{posts:any[]}>('/api/post?i='+i)
    if (data.posts?.length) {
      posts.value?.push(...data?.posts)
      i++
    } else {
      isDone = true      
    }
  }
  isInit = false
}
</script>


<style scoped>

/* .grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
  margin: 50px auto;
  width: 940px;
} */


</style>