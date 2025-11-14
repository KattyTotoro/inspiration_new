<template>
  <div class="search">
    <input @keypress.enter="search" v-model="searchText" type="search" name="search" :style="active?'width:240px':'width:0;padding:0; border:0'" placeholder="Введите слова поиска"> 
    <button @click="showOrSearch"><nuxt-img src="/954591.png" width="30px" alt="search"/></button>
  </div>
</template>


<script setup lang="ts">
const active = ref(false)
const needMoreLetters = ref(false)
const searchText = ref('')
const search = () => {
  if (searchText.value.length>2) { 
    navigateTo(`/search/${searchText.value}`)
  } else {
    needMoreLetters.value = true
  }
}
watch(()=>searchText.value, ()=>{
  if (needMoreLetters.value) needMoreLetters.value = false 
})
const showOrSearch = () => {
  if (!active.value) {
    active.value = true
  } else {
    if (searchText.value.length) {
      search()
    } else {
      active.value = false
    }
  }
}
</script>
