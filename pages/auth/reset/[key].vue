<template>
  <p v-if="!data?.ok">Что-то пошло не так</p>
  <div v-if="data?.ok && !success">
    <form class="lk_entrance" @submit.prevent="handleChangePass">
      <input type="password" v-model="password" placeholder="Введите пароль" required>
      <input type="password" v-model="password2" placeholder="Повторите пароль" required>
      <button type="submit">Зарегистрироваться</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
  <div v-if="success">Пароль успешно изменён</div>
</template>
  
<script setup lang="ts">
import md5 from 'md5'
const route = useRoute()
const password = ref('')
const password2 = ref('')
const errorMessage = ref('')
const success = ref(false)
const {data} = await useFetch(`/api/auth/${route.params.key}`)
const handleChangePass = async () => {
  if (password.value !== password2.value) {
    errorMessage.value = 'Пароли не совпадают';
    return;
  }
  if (password.value.length < 8) {
    errorMessage.value = 'Пароль содержит меньше 8 мисволов';
    return;
  }
  try {
    const res = await $fetch('/api/change_pass', {
      method:'PUT', 
      body:{id:data.value?.user?.id, pass:md5(password.value)}
    })
    if (res.ok) {
      success.value = true
    }
    // Очистка формы после успешной регистрации
    password.value = '';
    password2.value = '';
    
  } catch (error) {
    errorMessage.value = 'Что-то пошло не так';
  }
};
</script>

<style scoped>

</style>