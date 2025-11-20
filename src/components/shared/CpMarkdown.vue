<script setup lang="ts">
import markdown from '@/utils/markdown'

defineProps<{
  text: string
}>()
</script>

<template>
  <div
    class="cp-markdown"
    v-html="markdown.safeRender(text)"
  />
</template>

<style>
.cp-markdown { @apply font-inherit; }

.cp-markdown :where(h1, h2, h3, h4, h5, h6) { @apply font-bold; }
.cp-markdown h1 { @apply text-[2em]; }
.cp-markdown h2 { @apply text-[1.76em]; }
.cp-markdown h3 { @apply text-[1.52em]; }
.cp-markdown h4 { @apply text-[1.28em]; }
.cp-markdown h5 { @apply text-[1.04em]; }
.cp-markdown h6 { @apply text-[0.8em]; }

.cp-markdown ul { @apply list-disc list-inside; }
.cp-markdown ol { @apply list-decimal list-inside; }
.cp-markdown li { @apply ml-4; }

.cp-markdown blockquote { @apply border-l-4 border-gray-300 pl-4; }
.cp-markdown :where(code, pre) { @apply bg-gray-100 px-2 py-1 rounded font-mono text-sm; }
.cp-markdown a { @apply text-blue-600 hover:underline; }
.cp-markdown abbr { @apply text-gray-500 cursor-help; }

.cp-markdown dl {}
.cp-markdown dt { @apply font-bold; }
.cp-markdown dd { @apply pl-4; }

.cp-markdown .container { @apply w-11/12 mx-auto my-4 p-3 rounded-lg; }
.cp-markdown .container-info { @apply text-blue-600 bg-blue-100; }
.cp-markdown .container-error { @apply text-red-600 bg-red-100; }
.cp-markdown .container-warning { @apply text-yellow-600 bg-yellow-100; }
.cp-markdown .container-success { @apply text-green-600 bg-green-100; }
</style>
