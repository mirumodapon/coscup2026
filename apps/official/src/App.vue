<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

watch(
  router.currentRoute,
  () => {
    locale.value = route.params.lang
  },
  { immediate: true },
)
</script>

<template>
  <Navbar />
  <main>
    <router-view />
  </main>
</template>
