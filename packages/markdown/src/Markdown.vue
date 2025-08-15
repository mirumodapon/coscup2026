<script setup lang="ts">
import DOMPurify from 'dompurify'
import markdown from './render.ts'

defineProps<{ content: string }>()
</script>

<template>
  <div
    class="cp-markdown"
    v-html="DOMPurify.sanitize(markdown.render(content))"
  />
</template>
