<script setup lang="ts">
import markdown from 'utils/markdown'
import 'themes/markdown'

defineProps<{ content: string }>()
</script>

<template>
  <div
    class="cp-markdown"
    v-html="markdown.safeRender(content)"
  />
</template>
