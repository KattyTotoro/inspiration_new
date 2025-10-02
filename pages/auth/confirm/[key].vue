<template>
  <p>{{ text }}</p>    
</template>
  
<script setup lang="ts">
const route = useRoute()
const text = ref('Проверяем...')
const { data }= await useFetch(`/api/auth/confirm/${route.params.key}`)
if (data.value?.ok) {
  text.value = 'Успешно подтверждена'
} else {
  text.value = 'Что-то пошло не так'
}
</script>

<style scoped>

</style>