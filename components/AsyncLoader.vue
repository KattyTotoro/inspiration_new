<template>
  <div v-intersection-observer="[onIntersectionObserver,{rootMargin:'0px 0px 250px 0px'}]"></div>
</template>


<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'
const props = defineProps(['path'])
const emit = defineEmits(['posts'])

let i = 1
let isDone = false
let isInit = true
let timer:NodeJS.Timeout|null = null
const onIntersectionObserver = async ()=>{
  // console.log(i, isDone, isInit)
  if (!isDone && !isInit) {
    // if (timer) return []

    // timer = setTimeout(() => {
    //   timer = null
    // }, 150)
    const data = await $fetch<{posts:any[]}>(`/api/post${props.path}?i=${i}`)
    
    if (data.posts?.length) {
      i++
      emit('posts',[...data?.posts])
    } else {
      isDone = true      
      emit('posts',[])
    }
  }
  isInit = false
}
</script>
