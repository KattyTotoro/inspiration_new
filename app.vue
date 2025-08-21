<template>
  <HeaderComponent/>
  <NuxtPage />
  <FooterComponent/>
  <!-- <noscript>
    <div>
      <img src="https://mc.yandex.ru/watch/103808775" style="position:absolute; left:-9999px;" alt="" />
    </div>
  </noscript> -->
</template>

<script setup lang="ts">
const userStore = useUser()
const appStore = useApp()
onMounted(()=>{
  userStore.autoLogin()
})
appStore.getRubrics()
useHead({
  link: [
    {rel:'preload', href:'/_ipx/w_1920&q_70&f_webp/img/mountain3.png', as:'image', fetchpriority:'high', media:'(min-width: 1367px)'},
    {rel:'preload', href:'/_ipx/w_1366&q_70&f_webp/img/mountain3.png', as:'image', fetchpriority:'high', media:'(max-width: 1366px)'},
    {rel:'preload', href:'/_ipx/w_960&q_70&f_webp/img/mountain3.png', as:'image', fetchpriority:'high', media:'(max-width: 960px)'},
    {rel:'preload', href:'/_ipx/w_780&q_70&f_webp/img/mountain3.png', as:'image', fetchpriority:'high', media:'(max-width: 780px)'},
    {rel:'preload', href:'/_ipx/w_500&q_70&f_webp/img/mountain3.png', as:'image', fetchpriority:'high', media:'(max-width: 500px)'},
    {rel:'preload', href:'/_ipx/w_1920&q_70&f_webp/img/sky.jpg', as:'image', fetchpriority:'high', media:'(min-width: 1367px)'},
    {rel:'preload', href:'/_ipx/w_1366&q_70&f_webp/img/sky.jpg', as:'image', fetchpriority:'high', media:'(max-width: 1366px)'},
    {rel:'preload', href:'/_ipx/w_960&q_70&f_webp/img/sky.jpg', as:'image', fetchpriority:'high', media:'(max-width: 960px)'},
    {rel:'preload', href:'/_ipx/w_780&q_70&f_webp/img/sky.jpg', as:'image', fetchpriority:'high', media:'(max-width: 780px)'},
    {rel:'preload', href:'/_ipx/w_500&q_70&f_webp/img/sky.jpg', as:'image', fetchpriority:'high', media:'(max-width: 500px)'},
  ]
})
</script>

<style>
@import url(~/assets/reset.css);
@import url(~/assets/style.css);
</style>