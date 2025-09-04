<template>

  <section class="content">
    <h1><strong>Путешествия</strong></h1>

    <p v-if="!data?.posts?.length">Публикаций пока нет</p>

    <!-- Блок со списком публикаций -->
    <PostsComponent v-else :posts="data?.posts"/>

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

// useRouter.navigate(`/search/${search.value}?rubric=5`)

const { data } = await useFetch('/api/post/by_rubrics/5')

</script>