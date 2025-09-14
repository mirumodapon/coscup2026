<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'

const { locale } = useI18n()
const route = useRoute()

locale.value = route.params.lang
</script>

<template>
  <Navbar />
  <main>
    <router-view />
  </main>
</template>
