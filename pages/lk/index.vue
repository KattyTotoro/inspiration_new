<template>
  <section class="content">

    <h1>Личный кабинет</h1>
    <strong></strong>

    <form class="lk_entrance" action="">
        <input type="email" value="Введите почту">
        <input type="password" value="Введите пароль">
        <button>Войти</button>
    </form>


    <div>
    <h2 style="font-size: 28px;">Мои публикации</h2>

    </div>

    <div>

      <p v-if="!posts?.length">Публикаций пока нет</p>
      <NuxtLink to="/lk/post_create">Добавить публикацию</NuxtLink>
      <div class="grid">
        <div class="post" v-for="post of posts" :key="post.id">
          <NuxtImg :src="`img/${post.img}`" sizes="300px" />
          <h2>
            <NuxtLink :to="`/lk/post_edit/${post.id}`">{{ post.title }}</NuxtLink>
          </h2>
          <p>{{ post.preview }}</p>
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

const { data } = await useFetch('/api/post')
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