<template>
  <section class="content">
  <p v-if="!data?.ok">Что-то пошло не так</p>
  <div v-if="data?.ok && !success" class="tabs">
    <form class="lk_entrance" @submit.prevent="handleChangePass">
      <p style="text-align: center; margin-bottom:10px">Создайте новый пароль</p>
      <input type="password" v-model="password" placeholder="Введите пароль" required>
      <input type="password" v-model="password2" placeholder="Повторите пароль" required>
      <button type="submit">Сохранить новый пароль</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>    
  </div>
  <div v-if="success">Пароль успешно изменён</div>
  </section>
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

.tabs {
  margin: 20px auto;
  margin-bottom: 20px;
  max-width: 600px;
  height: 500px;
}

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


</style>