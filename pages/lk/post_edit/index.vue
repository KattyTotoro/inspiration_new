<template>
    <div class="content">

      <h1>Сайт Вдохновение. Транслирование знаний.</h1>
      <strong>Путеводители среди знаний.</strong>

      <div>
        <p v-if="!posts?.length">Публикаций пока нет</p>

        <!-- Блок со списком публикаций -->
        <div v-else class="blockList">
          <div class="post" v-for="post, index of posts" :key="post.id">
              <NuxtImg v-if="[0,1].includes(index)" :src="`${post.img}`" sizes="200px sm:100%" preload />
              <NuxtImg v-else :src="`${post.img}`" sizes="200px sm:100%" loading="lazy"/>
              <div class="postPreview">
                <h2><NuxtLink :to="`/lk/post_edit/${post.id}`">{{ post.title }}</NuxtLink></h2>
                <p>{{ post.preview }}</p>
              </div>
            </div>
        </div>
      </div>

    </div>
</template>


<script setup lang="ts">
// import { usePosts } from '~/stores/posts';
// useSeoMeta({
//   title: 'Сайт Вдохновение. Путеводитель в мире знаний.',
//   ogTitle: 'Сайт Вдохновение. Путеводитель в мире знаний.',
//   description: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
//   ogDescription: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
//   ogImage: '/img/summary_small_image.png',
//   twitterCard: 'summary_large_image',
// })
definePageMeta({
  middleware: 'lk'
})
const {data} = await useFetch('/api/post')
const posts = ref(data.value?.posts)


</script>


<style scoped>

.grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
  margin: 50px auto;
  width: 940px;
}


</style>