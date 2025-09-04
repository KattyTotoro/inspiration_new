<template>
  <section class="content">
    <h1><strong>Поиск по постам "{{ route.params.search }}"</strong></h1>

    <p v-if="!data?.posts?.length">Ничего не найдено</p>

    <!-- Блок со списком публикаций -->
    <PostsComponent :posts="data?.posts"/>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const search = route.params.search
const {data} = await useFetch<{ok:boolean, posts:any[]}>(`/api/post/find/${search}`)
</script>

<style scoped>

</style>