<template>

  <section class="content">
      <h1><strong>Рецепты. Живое питание.</strong></h1>

      <!-- Блок с публикациями -->
      <p v-if="!posts?.length">Публикаций пока нет</p>
      <div v-else class="blockList">
          <div class="post" v-for="post of posts" :key="post.id">
              <NuxtImg :src="`${post.img}`" sizes="200px" />
              <div class="postPreview">
                <h2>
                <NuxtLink :to="`/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink>
                </h2>
                <p>{{ post.preview }}</p>
              </div>
          </div>
      </div>

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

const { data } = await useFetch('/api/post/by_rubrics/4')
const posts = ref(data.value?.posts)
</script>