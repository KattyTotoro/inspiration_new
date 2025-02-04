<template>
  <HeaderComponent/>
  <NuxtPage />
  <FooterComponent/>
</template>

<script setup lang="ts">
const userStore = useUser()
onMounted(()=>{
  userStore.autoLogin()
})
</script>

<style>
@import url(~/assets/reset.css);
@import url(~/assets/style.css);
</style>