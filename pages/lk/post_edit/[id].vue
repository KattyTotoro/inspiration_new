<template>
  <section v-if="post" class="content tt">
    <input class="myEditor" type="text" v-model="post.title">

    <label class="label_rubric_create" for="rubric">Выбор рубрики: </label>
    <select class="rubric_create" name="rubric" id="rubric" v-model="post.rubric_id">
      <option :value="rubric.id" v-for="rubric of appStore.rubrics" :key="rubric.id">{{ rubric.title }}</option>
    </select>

    <TiptapEditor @save="save" :text="post.text"></TiptapEditor>

    <NuxtLink :to="`/posts/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink>

    <!-- <template v-for="el of components">
        <component :is="el.component">{{ el.content }}</component>
    </template> -->

    <!-- Кнопка Удаление поста -->
    <button class="deletPostButtom" @click="deletePost">Удалить пост</button>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { translit } from '~/lib/translit';
definePageMeta({
  middleware: 'lk'
})
const appStore = useApp()

const route = useRoute()
const id = route.params.id
const { data } = await useFetch(`/api/post/${id}`)
// @ts-ignore
const post = ref(data.value?.post)

const save = async (data: { html: string }) => {
  if (post.value) {
    post.value.title_en = translit(post.value.title)
    post.value.text = data.html.replaceAll('<br>', '').replaceAll('<p></p>', '<br>') || ''
    const firstImgStartIndex = post.value.text.indexOf('<img src="')
    if (firstImgStartIndex != -1) {
      const firstImgEndIndex = post.value.text.indexOf('"', firstImgStartIndex + 10)
      post.value.img = post.value.text.slice(firstImgStartIndex + 10, firstImgEndIndex)
    }
    const firstPStartIndex = post.value.text.indexOf('<p>')
    if (firstPStartIndex != -1) {
      const firstPEndIndex = post.value.text.indexOf('</p>', firstPStartIndex + 3)
      post.value.preview = post.value.text.slice(firstPStartIndex + 3, firstPEndIndex).replace(/<[^>]*>/g, '').replace(/&nbsp;/g,'')
    }
    post.value.preview = post.value.preview.length > 150 ? post.value.preview.slice(0, 147) + '...' : post.value.preview
    post.value.text = data.html.replaceAll('<p></p>', '<br>') || ''
    const req = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post.value)
    })
    //console.log(req)
    navigateTo('/lk')
  }
}


// Функция для удаления поста
const deletePost = async () => {
  if (confirm('Вы уверены, что хотите удалить этот пост?')) {
    try {
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json()
      if (result.success) {
        alert('Пост успешно удалён');
        navigateTo('/lk'); // Перенаправляем пользователя в личный кабинет
      } else {
        alert('Не удалось удалить пост');
      }
    } catch (error) {
      console.error('Ошибка при удалении поста:', error);
      alert('Произошла ошибка при удалении поста');
    }
  }
};
</script>

<style>
@import url(~/assets/tiptap.css);
</style>
