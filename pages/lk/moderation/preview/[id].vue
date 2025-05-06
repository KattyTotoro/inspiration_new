<template>
    <section class="content" >
        <template v-if="userStore.user?.role=='moderator'">
            
            <div v-if="post" class="postPage">
                <!-- {{ route.params.id_title }} -->
                <!-- <br> -->
                <!-- {{ id }} -->
                <!-- <br> -->
                <p>{{ post?.author?.pseudo ? post?.author?.pseudo : post?.author.name}}</p>
                <h1>{{ post?.title }}</h1>
                <br>
                <!-- <NuxtImg :src="`${post?.img}`" sizes="300px"/> -->
                
                <div v-html="post?.text"></div>
                <div style="clear: both"></div>
                <button @click="approve">Одобрить</button>
            </div>
            <div v-else>Что-то пошло не так...</div>
        
        </template>
    </section>
    
</template>
  
<script setup lang="ts">
const route = useRoute()
const userStore = useUser()
const id = +route.params.id
const {data} = await useFetch(`/api/post/${id}`)
const post = ref(data.value?.post)
async function approve() {
    const resp = await fetch('/api/post/moderate/'+post.value?.id, {
        method: 'PUT',
        body: JSON.stringify({token: userStore.user?.token})
    })
    const result = await resp.json()
    //console.log(result)
}
</script>

<style scoped>

</style>