import { useUser } from "~/stores/user";
const userStore = useUser()//берем юзера из юзерстора

export default defineNuxtRouteMiddleware((to, _from) => {//промежуточная функция, которая срабатывает при каждом перемещении между страницами
  // console.log(userStore.user, to.path, to.path.includes('/lk/'))
  if (!userStore.user && to.path.includes('/lk/')){
    return navigateTo('/lk')//если нет юзера и путь, куда он собирается перейти, содержит лк, тогда мы его отправляем на логин
  }
})