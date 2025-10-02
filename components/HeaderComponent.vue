<template>

<header :style="route.path=='/'?'':'height:300px;'">

<div style="position: relative;">
<h1 class="h1Fly">Вдохновение </h1>
</div>

<!-- Кнопка входа в личный кабинет -->
<NuxtLink class="lk_link_button" :class="route.path=='/lk'?'currentLink':''" to="/lk">Личный кабинет</NuxtLink>
<p v-if="userStore.user?.id && !userStore.user?.active" class="lk_not_active">Подтверидите регистрацию</p>
<!-- Кнопка выхода из личного кабинета -->
<button v-if="userStore.user?.id" @click="handleLogout" class="logout_button">Выход</button> 

<!-- Верхнее меню с кнопками-ссылками -->
<div class="topMenu">

    <NuxtLink class="topMenuButton" :class="route.path=='/'?'currentLink':''" to="/">Главная</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/articles'?'currentLink':''" to="/articles">Статьи</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/videos'?'currentLink':''" to="/videos">Видео</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/music'?'currentLink':''" to="/music">Музыка</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/recipes'?'currentLink':''" to="/recipes">Рецепты</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/travels'?'currentLink':''" to="/travels">Путешествия</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/podcast'?'currentLink':''" to="/podcast">Подкаст</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/posts'?'currentLink':''" to="/posts">Публикации</NuxtLink>


</div>

</header>

<!-- Боковое меню -->
<nav>
    <ul>
        <li><NuxtLink :class="route.path=='/'?'currentLink':''" href="/">Главная</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/articles'?'currentLink':''" href="/articles">Статьи</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/videos'?'currentLink':''" href="/videos">Видео</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/music'?'currentLink':''" href="/music">Музыка</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/recipes'?'currentLink':''" href="/recipes">Рецепты</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/travels'?'currentLink':''" href="/travels">Путешествия</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/podcast'?'currentLink':''" href="/podcast">Подкаст</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/'?'currentLink':''" href="/about">О нас</NuxtLink></li>
    </ul>
</nav>

</template>

<script setup>
const userStore = useUser()
const route = useRoute()
const fly = ref('')
onMounted(()=>{
    fly.value = 'h1Fly'
})

// Функция для выхода
const handleLogout = async () => {
  userStore.logOut(); // Вызов метода выхода из хранилища
  posts.value = []; // Очистка списка публикаций
};
</script>
