<template>

  <section class="content">
    <h1><strong>Путешествия</strong></h1>

    <p v-if="!posts?.length">Публикаций пока нет</p>

    <!-- Блок со списком публикаций -->
    <div v-else class="blockList">
       <div class="post" v-for="post, index of posts" :key="post.id">
          <NuxtImg v-if="[0,1].includes(index)" :src="`${post.img}`" sizes="200px sm:100%" preload />
          <NuxtImg v-else :src="`${post.img}`" sizes="200px sm:100%" loading="lazy"/>
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

// useRouter.navigate(`/search/${search.value}?rubric=5`)

const { data } = await useFetch('/api/post/by_rubrics/5')
const posts = ref(data.value?.posts)
</script>