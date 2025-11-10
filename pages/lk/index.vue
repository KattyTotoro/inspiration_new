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
      <div class="tabs_buttons">
        <input type="radio" id="tab-login" name="tab-group" checked @click="variant='login'">
        <label for="tab-login" class="tab-title">Вход</label>
        <input type="radio" id="tab-register" name="tab-group" @click="variant='reg'">
        <label for="tab-register" class="tab-title">Регистрация</label>
        <input type="radio" id="tab-recovery" name="tab-group" @click="variant='recovery'">
        <label for="tab-recovery" class="tab-title rocovery">Восстановление пароля</label>
      </div>
        <!-- Вкладка Входа -->
      <div class="tab-content">
        <template  v-if="variant=='login'">
          
            <form class="lk_entrance" @submit.prevent="handleLogin">
              <input type="email" v-model="email" placeholder="Введите почту" required>
              <input type="password" v-model="password" placeholder="Введите пароль" required>
              <button type="submit">Войти</button>
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
          
        </template>

          <!-- Вкладка регистрации -->
          <template  v-else-if="variant=='reg'">
            <form class="lk_entrance" @submit.prevent="handleRegister">
              <input type="email" v-model="email" placeholder="Введите почту" required>
              <input type="password" v-model="password" placeholder="Введите пароль" required>
              <input type="password" v-model="password2" placeholder="Повторите пароль" required>
              <button type="submit">Зарегистрироваться</button>
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>

            <!-- Согласие с обработкой персональных данных и условиями рассылок -->
            <div class="choiceOfConsent"> 
              <p>
                Регистрируясь, я даю 
                <input type="checkbox">
                <NuxtLink class="linkConsent" to="/consent">согласие на обработку данных </NuxtLink>
                и 
                <input type="checkbox">
                <NuxtLink class="linkConsent" to="/mailing-terms">условия почтовых рассылок</NuxtLink>.
              </p>
            </div>
          </template>

        <!-- Вкладка восстановления пароля -->
        <template v-else>
            <form class="lk_entrance" @submit.prevent="handleRecovery">
              <input type="email" v-model="email" placeholder="Введите почту" required>
              <button type="submit">Восстановить пароль</button>
              <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
            </form>
          
        </template>

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

const variant = ref('login')
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

const handleRecovery = async()=>{
  try {
    errorMessage.value = '';
    const data = await $fetch('/api/recovery', {
      method: "put",
      body: {email:email.value}
    })
    if (data.ok) {
      errorMessage.value = 'Следуйте указаниям в письме';
    } else {
      errorMessage.value = 'Проверьте email';  
    }
    // Очистка формы после успешной регистрации
    email.value = '';
    password.value = '';
    password2.value = '';
    variant.value = 'login'
  } catch (error) {
    errorMessage.value = 'Проверьте email';
  }
}

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
    variant.value = 'login'
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
  margin: 20px auto;
  margin-bottom: 20px;
  max-width: 600px;
  height: 500px;
}

.tabs_buttons {
  display: grid;
  grid-template-columns: 150px 150px 1fr;
  gap: 5px;
}



.tab-title {
  display: inline-block; 
  background: #f0f0f09a;
  padding: 10px 8px;
  border: 3px solid #ddd;
  border-bottom: none; 
  border-radius: 4px 4px 0 0;
  text-align: center;
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
  padding: 10px;
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
  border: 3px solid #ddd;
  border-radius: 0 4px 4px 4px;
 /* или */
  /* padding: 10px; */
  /* width: calc(100% - 20px); */
}

/* .tab:checked + .tab-title + .tab-content { 
  display: block; 
} */

.lk_entrance {
  max-width: 600px;
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
  font-size: 18px;
  text-align: center;
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
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
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

.choiceOfConsent {
  padding: 20px;
}

.choiceOfConsent input {
  font-size: 22px;
  margin: 10px;
}

.linkConsent {
  color: green;
  font-weight: 600;
  text-decoration: underline;
}

@media screen and (max-width:600px) {
  .tabs {
    height: 378px;
  }
  .tabs_buttons {
    grid-template-columns: 1fr 1fr;
    row-gap: 0px;
    column-gap: 5px;
  }
  .rocovery {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

</style>