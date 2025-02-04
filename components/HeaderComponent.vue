<template>

<header>

<div style="position: relative;">
<h1 :class="fly?fly:''">Вдохновение</h1>
</div>

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
const route = useRoute()
const fly = ref('')
onMounted(()=>{
    fly.value = 'h1Fly'
})
</script>