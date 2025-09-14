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
    <p class="authorPost">Автор поста: {{ post.author.name }}</p>
    <hr>  
    <CommentsBlock :post_id="post.id"></CommentsBlock>
  </div>
  <div v-else>Что-то пошло не так...</div>

  <!-- <OtherPosts :posts="posts"/> -->

    <p v-if="!posts?.length">Публикаций пока нет</p>
    <div v-else class="blockList">
      <div class="post" v-for="post of posts" :key="post.id">
        <NuxtImg :src="`${post.img}`" sizes="300px" loading="lazy" />
        <div class="postPreview">
        <h2><NuxtLink :to="`/${post.rubric.title_en.toLowerCase()}/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink></h2>
        <p>{{ post.preview }}</p>
        </div>
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

</script>

<style scoped>

</style>