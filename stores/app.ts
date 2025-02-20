import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Rubric } from '@prisma/client'

export const useApp = defineStore('app', () => {
  const rubrics = ref([] as Rubric[]|null)
  const getRubrics = async () => {
    const {data} = await useFetch<Rubric[]>('/api/rubrics')
    rubrics.value = data.value
  }
  return { rubrics, getRubrics }
})