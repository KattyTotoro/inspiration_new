<template>
    <div :style="`margin-left: ${margin}px`">
        <div>
            <p v-html="comment.text.replaceAll('\n','<br>')"></p>
            <p>{{comment.created_at}} <button class="reply" @click="reply=!reply">Ответить</button> {{comment.comments_num}}</p>
        </div>
        <form v-if="reply" @submit.prevent="addComment">
            <!-- <hr> -->
            <textarea class="enterComment" placeholder="Введите комментарий" v-model="text" @keydown="checkButtons"></textarea>
            <!-- <hr> -->
        </form>
        <template v-if="comment.comments">
            <CommentComponent v-for="comment in comment.comments" :key="comment.id" :comment="comment" :margin="margin+10" :author_id="author_id" :refresh="refresh" />
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
    text.value = text.value.replaceAll('<','&lt;').replaceAll('>','&gt;')
    if (!text.value) return
    const req = await fetch(`/api/comments/${props.comment.post_id}`, {
        method: 'POST',
        body: JSON.stringify({text:text.value, post_id:props.comment.post_id, author_id:props.author_id, comment_id:props.comment.id})
    }) 
    reply.value = false
    text.value = ''
    props.refresh()
}

const checkButtons = (e:KeyboardEvent) => {
    if ((e.keyCode==10 || e.keyCode==13) && (e.ctrlKey || e.metaKey)) {
        addComment()
    }
}
</script>

<style scoped>


</style>