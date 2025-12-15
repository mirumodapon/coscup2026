<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData(`page-${locale.value}-${slug.value}`, async () => {
  // Build collection name based on current locale
  const collection = (`content_${locale.value}`) as keyof Collections
  const content = await queryCollection(collection).path(slug.value).first()

  // Optional: fallback to default locale if content is missing
  if (!content && locale.value !== 'zh') {
    return await queryCollection('content_zh').path(slug.value).first()
  }

  return content
}, {
  watch: [locale], // Refetch when locale changes
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    class="mx-auto w-screen prose"
    :value="page"
  />
  <div v-else>
    <h1>Page not found</h1>
    <p>This page doesn't exist in {{ locale }} language.</p>
  </div>
</template>
