<template>

<header>

<div style="position: relative;">
<h1 class="h1Fly">Вдохновение!!!</h1>
</div>

<NuxtLink class="topMenuButton lk_link_button" :class="route.path=='/lk'?'currentLink':''" href="/lk">Личный кабинет</NuxtLink>
<!-- Кнопка выхода из личного кабинета -->
<button v-if="userStore.user?.id" @click="handleLogout" class="logout_button">Выйти</button> 

<div class="topMenu">

    <NuxtLink class="topMenuButton" :class="route.path=='/'?'currentLink':''" href="/">Главная</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/articles'?'currentLink':''" href="/articles">Статьи</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/videos'?'currentLink':''" href="/videos">Видео</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/music'?'currentLink':''" href="/music">Музыка</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/recipes'?'currentLink':''" href="/recipes">Рецепты</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/trips'?'currentLink':''" href="/trips">Путешествия</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/podcast'?'currentLink':''" href="/podcast">Подкаст</NuxtLink>
    <NuxtLink class="topMenuButton" :class="route.path=='/posts'?'currentLink':''" href="/posts">Публикации</NuxtLink>


</div>

</header>

<nav>
    <ul>
        <li><NuxtLink :class="route.path=='/'?'currentLink':''" href="/">Главная</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/articles'?'currentLink':''" href="/articles">Статьи</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/videos'?'currentLink':''" href="/videos">Видео</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/music'?'currentLink':''" href="/music">Музыка</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/recipes'?'currentLink':''" href="/recipes">Рецепты</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/trips'?'currentLink':''" href="/trips">Путешествия</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/podcast'?'currentLink':''" href="/podcast">Подкаст</NuxtLink></li>
        <li><NuxtLink :class="route.path=='/'?'currentLink':''" href="/">О нас</NuxtLink></li>
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