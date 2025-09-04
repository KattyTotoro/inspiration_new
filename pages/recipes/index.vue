<template>

  <section class="content">
      <h1><strong>Рецепты. Живое питание.</strong></h1>

      <p v-if="!posts?.length">Публикаций пока нет</p>
      
      <!-- Блок со списком публикаций -->
      <PostsComponent v-else :posts="posts"/>
      <AsyncLoader path="by_rubrics/4" @posts="addPosts"/>
  </section>


</template>



<script setup lang="ts">
useSeoMeta({
  title: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  ogTitle: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  description: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogDescription: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogImage: '/img/summary_small_image.png',
  twitterCard: 'summary_large_image',
})

const { data } = await useFetch<{posts:any[]}>('/api/post/by_rubrics/4')
const posts = ref(data.value?.posts)
const addPosts = (data:any[])=>{
  posts.value?.push(...data)
}
</script>