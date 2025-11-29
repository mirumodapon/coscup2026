<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import index from './[lang]/index.vue'

const router = useRouter()

onMounted(() => {
  // Detect user's preferred language or use default
  const userLang = navigator.language?.split('-')[0] || 'zh' // e.g., 'en' from 'en-US'
  const supportedLangs = ['en', 'zh']
  const lang = supportedLangs.includes(userLang) ? userLang : 'zh' // default to zh

  router.replace(`/${lang}`)
})
</script>

<template>
  <index />
</template>
