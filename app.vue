<template>
  <HeaderComponent/>
  <NuxtPage />
  <FooterComponent/>
</template>

<script setup lang="ts">
const userStore = useUser()
const appStore = useApp()
onMounted(()=>{
  userStore.autoLogin()
})
appStore.getRubrics()
</script>

<style>
@import url(~/assets/reset.css);
@import url(~/assets/style.css);
</style>