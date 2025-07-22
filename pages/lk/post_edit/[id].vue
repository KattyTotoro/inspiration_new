<template>
<section v-if="post" class="content tt">
    <input class="myEditor" type="text" v-model="post.title">

    <label class="label_rubric_create" for="rubric">Выбор рубрики: </label>
    <select class="rubric_create" name="rubric" id="rubric" v-model="post.rubric_id">
        <option :value="rubric.id" v-for="rubric of appStore.rubrics" :key="rubric.id">{{ rubric.title }}</option>
    </select>
    
    <div v-if="editor">
    <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
    >
        жирный
    </button>
    <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
    >
        курсив
    </button>
    <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
    >
        перечёркнутый
    </button>
    <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
    >
        код
    </button>
    <button @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
    </button>
    <button @click="editor.chain().focus().clearNodes().run()">
        clear nodes
    </button>
    <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
    >
        paragraph
    </button>

    <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
    >
        h1
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
    >
        h2
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
    >
        h3
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
    >
        h4
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
    >
        h5
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
    >
        h6
    </button>
    <br>
    <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
    >
        bullet list
    </button>
    <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
    >
        ordered list
    </button>
    <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
    >
        code block
    </button>
    <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
    >
        blockquote
    </button>
    <button @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
        hard break
    </button>
    <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
    >
        undo
    </button>
    <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
    >
        redo
    </button>
    </div>
    <TiptapEditorContent :editor="editor" />
    
    <div class="tiptapImg">
      <form method="post" @submit.prevent="upload">
        <input type="text" name="alt" v-model="alt" placeholder="Название картинки">
        <input type="file" ref="file" placeholder="Изображение">
        <input class="uploadPicBut" type="submit" value="Загрузить">
      </form>
    </div>

    <!-- КНопка Сохранить пост -->
    <button @click="save">Сохранить пост</button>
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
import Image from '@tiptap/extension-image'

const alt = ref('')
const file = ref(null)
const rubric_id = ref(1)
const appStore = useApp()

const upload = async () => {
    const fileref = file.value as never as HTMLInputElement
    const fD = new FormData()
    if (fileref.files) {
    fD.append('alt', alt.value)
    fD.append('img', fileref.files[0])
    const data = await $fetch('/api/img', {
        method: 'POST',
      body: fD
    })
    alt.value = ''
    fileref.value = ''
    setTimeout(()=>{
        editor.value?.chain().focus().setImage({ src: data.url, alt: alt.value }).run()
    }, 500)
}
}

const route = useRoute()
const id = route.params.id
const {data} = await useFetch(`/api/post/${id}`)
// @ts-ignore
const post = ref(data.value?.post)
const editor = useEditor({
  content: post.value?.text,
  extensions: [TiptapStarterKit, Image],
});


const save = async()=>{
    if (post.value) {
        post.value.title_en = translit(post.value.title)
        post.value.text = editor.value?.getHTML().replaceAll('<br>', '').replaceAll('<p></p>', '<br>') || ''
        const firstImgStartIndex = post.value.text.indexOf('<img src="')
        if (firstImgStartIndex!=-1) {
        const firstImgEndIndex = post.value.text.indexOf('"',firstImgStartIndex+10)
        post.value.img = post.value.text.slice(firstImgStartIndex+10, firstImgEndIndex)
        }
        const firstPStartIndex = post.value.text.indexOf('<p>')
        if (firstPStartIndex!=-1) {
        const firstPEndIndex = post.value.text.indexOf('</p>',firstPStartIndex+3)
        post.value.preview = post.value.text.slice(firstPStartIndex+3, firstPEndIndex).replace(/<[^>]*>/g, '')
        }
        post.value.text = editor.value?.getHTML().replaceAll('<p></p>','<br>') || ''
        post.value.rubric_id = rubric_id.value
        const req = await fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post.value)
        })
        //console.log(req)
        navigateTo('/lk')
    }
}

onBeforeUnmount(() => {
    unref(editor)?.destroy();
});


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
