// import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  name: string | null;
  id: number;
  email: string;
  token: string
  role: string
}

interface regData {
  ok: boolean;
  user: User;
  massage: string;
}

export const useUser = defineStore('user', () => {
  const user = ref(undefined as undefined | User)
  const logOut = async() => {
    await $fetch('/api/logout', {
      method: 'POST',
      body: { token: user.value?.token }
    })
    user.value = undefined // Сбрасываем состояние пользователя
    delete localStorage.user // Удаляем пользователя из localStorage
    // navigateTo('/lk') // Перенаправляем на страницу входа
  }
  const logIn = async (email: string, pass: string) => {
    //console.log(email, pass)
    user.value = await $fetch<User |undefined>('/api/login', {
      method: 'POST',
      body: { email, pass }
    })
    // console.log(user.value)
    if (user.value) {
      const userToLocal = {...user.value}
      // @ts-ignore
      localStorage.user = JSON.stringify(userToLocal)
      return ''
    } else {
      return 'Проверьте логин либо пароль'
    }
  }
  const autoLogin = async () => {
    if (localStorage.user) {
      const tempUser = JSON.parse(localStorage.user)
      const data = await $fetch<regData>('/api/autologin', {
        method: 'POST',
        body: { ...tempUser }
      })
      if (data.ok) {
        user.value = data.user
      }
    }
  }
  const regIn = async (email: string, pass: string) => {
    const data = await $fetch<regData>('/api/regin', {
      method: 'POST',
      body: { email, pass }
    })
    if (data.ok) {
      user.value = data.user
      localStorage.user = JSON.stringify(data.user)
    } else {
      return 'error'
    }
    return 'error'
  }
  return { user, logIn, logOut, autoLogin, regIn }
})