<template>
    <div :style="`margin-left: ${margin}px`">
        <div>
            <p>
                {{comment.text}}
            </p>
            <p>{{comment.created_at}} <button @click="reply=!reply">Reply</button> {{comment.comments_num}}</p>
        </div>
        <form v-if="reply" @submit.prevent="addComment">
            <hr>
            <input type="text" placeholder="comment" v-model="text">
            <hr>
        </form>
        <template v-if="comment.comments">
            <CoomentComponent v-for="comment in comment.comments" :key="comment.id" :comment="comment" :margin="margin+10" :author_id="author_id" :refresh="refresh" />
        </template>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['comment', 'margin', 'author_id', 'refresh'])
const reply = ref(false)
const text = ref('')

const addComment = async () => {
    if (!props.author_id) {
        return alert('Reg or log IN')
    }
    const req = await fetch(`/api/comments/${props.comment.post_id}`, {
        method: 'POST',
        body: JSON.stringify({text:text.value, post_id:props.comment.post_id, author_id:props.author_id, comment_id:props.comment.id})
    }) 
    reply.value = false
    text.value = ''
    props.refresh()
}
</script>

<style scoped>
</style>