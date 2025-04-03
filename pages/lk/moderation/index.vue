<template>
  <section class="content">
    <template v-if="userStore.user?.role=='moderator'">
      <div class="blockList">
        <div class="post" v-for="post of posts" :key="post.id">
          <NuxtImg :src="`${post.img}`" sizes="300px" />
          <h2>
            <NuxtLink :to="`/lk/moderation/preview/${post.id}`">{{ post.title }}</NuxtLink>
          </h2>
          <p>{{ post.preview }}</p>
        </div>
      </div>
    </template>
    
  </section>
</template>

<script setup lang="ts">
import type { Post } from '@prisma/client';
import { ref } from 'vue';

const userStore = useUser()
const posts = ref([] as Post[]); // Список публикаций

onMounted(()=>{
  if (!posts.value.length && userStore.user?.role=='moderator') fetchPosts()
})

// Функция для загрузки публикаций
const fetchPosts = async () => {
  const resp = await fetch('/api/post/moderate/');
  const data = await resp.json()
  posts.value = data?.posts || [] as Post[]

};

// Отслеживание изменения состояния пользователя
watch(()=>userStore.user, (user)=>{
  if (user?.role=='moderator') fetchPosts()
})
</script>

<style scoped>
.lk_entrance {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.lk_entrance input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.lk_entrance input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.lk_entrance button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lk_entrance button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
  margin: 50px auto;
  width: 940px;
}
</style>