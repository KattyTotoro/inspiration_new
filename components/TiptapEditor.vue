<template>
  <div class="editor_block">
    <template v-if="editor">
      <div>
        <button @click="editor.chain().focus().toggleBold().run()"
          :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          жирный
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }">
          курсив
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }">
          перечёркнутый
        </button>
        <button @click="editor.chain().focus().toggleCode().run()"
          :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
          код
        </button>
        <button @click="editor.chain().focus().unsetAllMarks().run()">
          clear marks
        </button>
        <button @click="editor.chain().focus().clearNodes().run()">
          clear nodes
        </button>
        <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
          paragraph
        </button>

        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
          h1
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          h2
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          h3
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
          h4
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
          h5
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
          h6
        </button>
        <br>
        <button @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'is-active': editor.isActive('bulletList') }">
          bullet list
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'is-active': editor.isActive('orderedList') }">
          ordered list
        </button>
        <button @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{ 'is-active': editor.isActive('codeBlock') }">
          code block
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'is-active': editor.isActive('blockquote') }">
          blockquote
        </button>
        <button @click="editor.chain().focus().setHorizontalRule().run()">
          horizontal rule
        </button>
        <button @click="editor.chain().focus().setHardBreak().run()">
          hard break
        </button>
        <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
          undo
        </button>
        <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
          redo
        </button>
      </div>

      <bubble-menu :editor="editor" v-if="editor">
        <div class="bubble-menu">
          <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            Bold
          </button>
          <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            Italic
          </button>
          <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
            Strike
          </button>
          <button @click="editor.chain().focus().toggleHighlight().run()"
            :class="{ 'is-active': editor.isActive('highlight') }">
            Маркер
          </button>
          <button @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'is-active': editor.isActive('underline') }">
            Подчеркнуть
          </button>
        </div>
      </bubble-menu>

      <floating-menu :editor="editor" v-if="editor">
        <div class="floating-menu">
          <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            H1
          </button>
          <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            H2
          </button>
          <button @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }">
            Bullet list
          </button>
        </div>
      </floating-menu>

      <editor-content :editor="editor" />

      <div>
        <form method="post" @submit.prevent="upload">
          <input type="text" name="alt" v-model="alt" placeholder="Alt">
          <input type="file" ref="file" placeholder="Изображение">
          <input type="submit" value="Загрузить">
        </form>
      </div>

      <!-- Кнопка сохранения -->
      <button @click="save">Сохранить пост</button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'

const editor = ref(null as any)
const emit = defineEmits(['save'])
const props = defineProps(['text'])

const alt = ref('')
const file = ref(null)

let el:any

const save = () => {
  emit('save', { html: editor.value?.getHTML() })
}

const upload = async () => {
  const fileref = file.value as never as HTMLInputElement
  const fD = new FormData()
  if (fileref.files) {
    fD.append('alt', alt.value)
    fD.append('img', fileref.files[0])
    const file = fileref.files[0]
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement("img");
            img.onload = async () => {
                fD.append('width', img.naturalWidth.toString())
                fD.append('height', img.naturalHeight.toString())
                const data = await $fetch<{ url: string }>('/api/img', {
                  method: 'POST',
                  body: fD
                })
                alt.value = ''
                fileref.value = ''
                setTimeout(() => {
                  editor.value?.chain().focus().setImage({ src: data.url, alt: alt.value }).run()
                }, 500)
            };
            img.src = e.target?.result as string
        };
        reader.readAsDataURL(file);
    }
  }
}

function pasteText(e: any) {
  e.preventDefault()
  // let txt = (e.originalEvent || e).clipboardData.getData('text/plain').replaceAll(' ', '<br>')
  let txt = (e.originalEvent || e).clipboardData.getData('text/plain')
  // if (txt.includes('/img-apple')) {
  //   console.log('est emoji')
  //   let iS = -1
  //   do {
  //     iS = txt.indexOf('<img')
  //     if (iS != -1) {
  //       console.log('est emoji sI', iS)
  //       const iE = txt.indexOf('>', iS + 3)
  //       if (txt.indexOf('/img-apple')>iE) {
  //         // not emoji
  //         iS=iE
  //         console.log('not emoji')
  //       } else {
  //         // emoji
  //         const iAS = txt.indexOf('alt="', iS)
  //         const iAE = txt.indexOf('"',iAS+5)
  //         const emoji = txt.slice(iAS+5, iAE)
  //         console.log(emoji)
  //         txt = txt.slice(0, iS)+emoji+txt.slice(iE+1)
  //       }
  //     }
  //   } while (iS!=-1)
  // }

  editor.value.commands.insertContent(txt)
  
};

onMounted(() => {
  editor.value = new Editor({
    content: props.text || '',
    extensions: [StarterKit, Image, Highlight, Underline],
  })
  el = document.querySelector('.editor_block')
  el.addEventListener('paste', pasteText, true)
})

onBeforeUnmount(() => {
  editor.value.destroy()
  el.removeEventListener('paste', pasteText, true)
})

</script>

<style>
@import url(~/assets/tiptap.css);
</style>