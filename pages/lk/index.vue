<template>

  <section class="content">
    <h1 class="lk_h1">Личный кабинет</h1>
    <div class="nickname" v-if="userStore.user">
      <p>Ваш ник: </p>
      <div>
        <input type="text" name="nickname" v-model="userStore.user.name" placeholder="Введите Ваш ник">
        <button @click="saveNickname">Сохранить</button>
      </div>
    </div>

    <div class="tabs" v-if="!userStore.user">
      <input type="radio" id="tab-login" name="tab-group" checked @click="isAuth=true">
      <label for="tab-login" style="width:81px" class="tab-title">Вход</label>
      <input type="radio" id="tab-register" name="tab-group" @click="isAuth=false">
      <label for="tab-register" style="width:140px" class="tab-title">Регистрация</label>
      <br>
        <!-- Вкладка Входа -->
      <div class="tab" v-if="isAuth">
        <div class="tab-content">
          <form class="lk_entrance" @submit.prevent="handleLogin">
            <input type="email" v-model="email" placeholder="Введите почту" required>
            <input type="password" v-model="password" placeholder="Введите пароль" required>
            <button type="submit">Войти</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          </form>
        </div>
      </div>

        <!-- Вкладка регистрации -->
        <div class="tab" v-else>
        <div class="tab-content">
          <form class="lk_entrance" @submit.prevent="handleRegister">
            <input type="email" v-model="email" placeholder="Введите почту" required>
            <input type="password" v-model="password" placeholder="Введите пароль" required>
            <input type="password" v-model="password2" placeholder="Повторите пароль" required>
            <button type="submit">Зарегистрироваться</button>
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>

    
    <div v-if="userStore.user">
      <NuxtLink v-if="userStore.user?.role=='moderator'" to="/lk/moderation" class="post_create_button">Модерация</NuxtLink>
      
      <h2 class="myPublications">Мои публикации</h2>

      <p v-if="!posts?.length">Публикаций пока нет</p>

      <!-- Ссылка для добавления публикации -->
      <NuxtLink to="/lk/post_create" class="post_create_button">Добавить публикацию</NuxtLink>

      <!-- Блок со списком публикаций -->
      <div class="blockList">
        <div class="post" v-for="post, index of posts" :key="post.id">
          <NuxtImg v-if="[0,1].includes(index)" :src="`${post.img}`" sizes="200px sm:100%" preload />
          <NuxtImg v-else :src="`${post.img}`" sizes="200px sm:100%" loading="lazy"/>
          <div class="postPreview">
            <h2>
              <NuxtLink :to="`/lk/post_edit/${post.id}`">{{ post.title }}</NuxtLink>
            </h2>
            <p>{{ post.preview }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Post } from '@prisma/client';
import { ref } from 'vue';
import md5 from 'md5'

const isAuth = ref(true)
const email = ref('');
const password = ref('');
const password2 = ref('');
const errorMessage = ref('');
const posts = ref([] as Post[]); // Список публикаций
const userStore = useUser()

const registerError = ref('');


// Функция для входа
const handleLogin = async () => {
  await userStore.logIn(email.value, md5(password.value))
  if (userStore.user) {
    fetchPosts()
  }
};

onMounted(()=>{
  if (!posts.value.length && userStore.user?.id) fetchPosts()
})

// Обработчик регистрации
const handleRegister = async () => {
  if (password.value !== password2.value) {
    registerError.value = 'Пароли не совпадают';
    return;
  }

  try {
    registerError.value = '';
    await userStore.regIn(
      email.value,
      md5(password.value)
    );
    // Очистка формы после успешной регистрации
    email.value = '';
    password.value = '';
    password2.value = '';
    isAuth.value = true
  } catch (error) {
    registerError.value = 'Ошибка регистрации. Возможно, email уже занят';
  }
};

const saveNickname = async () => {
  $fetch('/api/user_name',{
    method: 'PUT',
    body: userStore.user
  })
}

// Функция для загрузки публикаций
const fetchPosts = async () => {
  const resp = await fetch('/api/post/by_users_lk/'+userStore.user?.id);
  const data = await resp.json()
  posts.value = data?.posts || [] as Post[]
};

// Отслеживание изменения состояния пользователя
watch(()=>userStore.user, (user)=>{
  if (user?.id) fetchPosts()
})
</script>

<style scoped>

.tabs {
    position: relative; 
    /* margin: 20px; */
    margin-bottom: 20px;
   }

.tab { 
  display: inline-block; 
}

.tab-title {
  display: inline-block; 
  background: #f0f0f0;
  padding: 10px 20px;
  border: 1px solid #666; 
  border-bottom: none; 
  border-radius: 4px 4px 0 0;
  margin-right: 5px;
  transition: color 0.3s ease, background 0.3s ease, font-weight 0.3s ease;
}

.tab-title:hover {
  background: #e0e0e0;
}

input[type="radio"] { 
  display: none; 
}

input[type="radio"]:checked + .tab-title {
  background: #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
  color: #007bff;
  font-weight: bold;
}

/* .tab:checked + .tab-title {
  position: absolute; 
  top: 1px; 
  background: #fff; 
  top: 1px; 
  z-index: 1; 
} */

.tab-content {
  padding: 20px; 
  width: 100%; 
  box-sizing: border-box; 
  border: 1px solid #ddd;
  border-radius: 0 4px 4px 4px;
 /* или */
  /* padding: 10px; */
  /* width: calc(100% - 20px); */
}

/* .tab:checked + .tab-title + .tab-content { 
  display: block; 
} */

.lk_entrance {
  max-width: 400px;
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