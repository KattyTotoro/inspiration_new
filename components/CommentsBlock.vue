<template>
<form @submit.prevent="addComment">
    <input type="text" placeholder="comment" v-model="text">
</form>
<br>
<div class="comments">  
    <CoomentComponent v-for="comment in data?.comments" :key="comment.id" :comment="comment" :margin="0" :author_id="userStore.user?.id" :refresh="refresh"/>
</div>

</template>

<script setup lang="ts">
const text = ref('')
const props = defineProps(['post_id'])
const {data, refresh} = await useFetch(`/api/comments/${props.post_id}`)
const userStore = useUser()

const addComment = async () => {
    if (!userStore.user?.id) {
        return alert('Reg or log IN')
    }
    const req = await fetch(`/api/comments/${props.post_id}`, {
        method: 'POST',
        body: JSON.stringify({text:text.value, post_id:props.post_id, author_id:userStore.user?.id})
    }) 
    text.value = ''
    refresh()
}
</script>

<style scoped>
</style>