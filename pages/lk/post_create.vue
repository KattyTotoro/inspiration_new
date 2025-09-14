<template>
  <section v-if="userStore.user?.id" class="content tt">

    <!-- Выбор рубрики -->

    <label class="label_rubric_create" for="rubric">Выбор рубрики: </label>
    <select class="rubric_create" name="rubric" id="rubric" v-model="rubric_id">
      <option :value="rubric.id" v-for="rubric of appStore.rubrics" :key="rubric.id">{{ rubric.title }}</option>
    </select>

    <!-- Ввод названия публикации -->
    <input class="myEditor" type="text" v-model="post.title" placeholder="Введите название публикации">

    <TiptapEditor @save="save"></TiptapEditor>

  </section>
  <section v-else>
    Login first
  </section>
</template>

<script setup lang="ts">
import type { Post } from '@prisma/client';
import { translit } from '~/lib/translit';

const rubric_id = ref(1)
const appStore = useApp()
const userStore = useUser()
const post = ref({} as Post)

const save = async (data: { html: string }) => {
  if (post.value && userStore.user?.id) {
    post.value.title_en = translit(post.value.title)
    // post.value.text = data.html.replaceAll('<br>', '').replaceAll('<p></p>', '<br>') || ''
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
    post.value.author_id = userStore.user.id
    post.value.rubric_id = rubric_id.value

    const req = await $fetch('/api/post', {
      method: 'POST',
      body: post.value
    })
    navigateTo('/lk')

  }
}

</script>

<style>
@import url(~/assets/tiptap.css);
</style>
