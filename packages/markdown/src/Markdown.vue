<script setup lang="ts">
import DOMPurify from 'dompurify'
import markdown from './render.ts'
import 'themes/markdown'

defineProps<{ content: string }>()
</script>

<template>
  <div
    class="cp-markdown"
    v-html="DOMPurify.sanitize(markdown.render(content))"
  />
</template>
