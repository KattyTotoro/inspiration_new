<template>
  <section class="content">
  
  <div v-if="post" class="postPage">
    <!-- {{ route.params.id_title }} -->
    <!-- <br> -->
    <!-- {{ id }} -->
    <!-- <br> -->
    <h1>{{ post?.title }}</h1>
    <br>
    <!-- <NuxtImg :src="`${post?.img}`" sizes="300px"/> -->
        
    <div v-html="post?.text"></div>
    <div style="clear: both;"></div>
    <hr>  
    <CommentsBlock :post_id="post.id"></CommentsBlock>
  </div>
  <div v-else>Что-то пошло не так...</div>

  <p v-if="!posts?.length">Публикаций пока нет</p>
  <div v-else class="blockList">
    <div class="post" v-for="post of posts" :key="post.id">
      <!-- <NuxtImg :src="`img/${post.img}`" sizes="300px"/> -->
      <h2><NuxtLink :to="`/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink></h2>
      <p>{{ post.preview }}</p>
    </div>
  </div>
  </section>



  


</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id_title.toString().split('_',1)[0]
const {data} = await useFetch(`/api/post/${id}`)
// @ts-ignore
const post = ref(data.value?.post)
const posts = ref(data.value?.posts)
useSeoMeta({
  title: post.value.title,
  ogTitle: post.value.title,
  description: post.value.preview,
  ogDescription: post.value.preview,
  // !!! Указать имя домена
  ogImage: 'https://domain.ru/'+post.value.img,
  twitterCard: 'summary_large_image',
})
const micro = [
  {
    "@context":"https://schema.org/",
    "@type":"ImageObject",
    "contentUrl": 'https://domain.ru'+post.value.img,
    "license":"https://creativecommons.org/licenses/by/4.0/",
    "copyrightNotice":"© 2025 Inspiration. Использование разрешено с указанием авторства.",
    "creditText":`Фото: ${post.value.author.pseudo ? post.value.author.pseudo : post.value.author.email } / domain.ru`,
    "acquireLicensePage":"https://domain.ru/terms_of_use",
    "datePublished":post.value.created_at,
    "description": post.value.title,
    "creator":{
      "@type":"Person",
      "name": `${post.value.author.pseudo ? post.value.author.pseudo : post.value.author.email }`
    }
  },
  {
    "@context":"http://schema.org",
    "@type":"Article",
    "mainEntityOfPage": {
      "@type":"WebPage",
      "@id":`https://domain.ru/${post.value.rubric.title_en.toLowerCase()}/${post.value.id}_${post.value.title_en}`,
    },
    "headline":post.value.title,
    "datePublished":post.value.created_at,
    "dateModified":post.value.updated_at,
    "author": {
      "@type":"Person",
      "name": `${post.value.author.pseudo ? post.value.author.pseudo : post.value.author.email }`
    },
    "publisher":{
      "@type":"Organization",
      "name":"Inspiration",
      "logo": {
        "@type":"ImageObject",
        "url":"https://domain.ru/favicon.ico"
      }
    },
    "description":post.value.preview,
    "url":`https://domain.ru/${post.value.rubric.title_en.toLowerCase()}/${post.value.id}_${post.value.title_en}`,
    "image":[
      'https://domain.ru'+post.value.img,
    ]
  }
]
useHead({
  script: [ { type:'application/ld+json', innerHTML: micro} ]
})

</script>

<style scoped>

</style>