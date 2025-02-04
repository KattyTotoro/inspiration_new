import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useApp = defineStore('app', () => {
  const data = ref(Date.now())
  const dataPage = ref('')
  const downloadData = async () => {
    if (!dataPage.value) {
      const {data} = await useFetch('')
      dataPage.value = data.value as string
    }
  }
  return { data, dataPage, downloadData }
})