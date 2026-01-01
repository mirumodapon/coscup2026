<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

definePageMeta({
  layout: 'page-only',
})
</script>

<template>
  <div class="p-4 flex flex-col gap-12 min-h-screen items-center justify-center from-blue-50 to-white bg-gradient-to-b">
    <div class="max-w-2xl w-full">
      <div class="mb-8 text-center">
        <h1 class="text-cpgreen text-5xl font-bold mb-4">
          COSCUP 2026
        </h1>
        <p class="text-cpgreen text-2xl font-semibold mb-2">
          {{ t('coming_soon') }}
        </p>
      </div>
      <div class="mb-12">
        <p class="text-gray-700 font-medium mb-4 text-center">
          選擇語言 / Select language
        </p>
        <div class="gap-4 grid grid-cols-1 justify-center md:grid-cols-2">
          <NuxtLink
            v-for="l in locales"
            :key="l.code"
            class="text-center text-white font-semibold px-4 py-2 rounded bg-blue-500 hover:bg-blue-600"
            :to="switchLocalePath(l.code)"
            type="button"
          >
            {{ l.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="gap-6 grid grid-cols-1 md:grid-cols-2">
        <div class="text-white p-6 rounded-lg flex flex-col transform transition-shadow duration-200 items-center justify-center from-orange-400 to-orange-600 bg-gradient-to-br">
          <h3 class="text-xl font-bold mb-2 text-center">
            {{ t('call_for_sponsor') }}
          </h3>
          <p class="text-sm text-orange-100 text-center text-justify">
            {{ t('call_for_sponsor_desc') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<i18n lang="yaml">
en:
  coming_soon: "Coming soon"
  call_for_sponsor: "Support COSCUP"
  call_for_sponsor_desc: "If you are interested in sponsoring COSCUP 2026, please feel free to contact us at sponsor{'@'}coscup.org"
  call_for_volunteer: "Support COSCUP"
  call_for_volunteer_desc: "If you are interested in volunteering for COSCUP 2026, please feel free to contact us at volunteer{'@'}coscup.org"
zh:
  coming_soon: "敬請期待"
  call_for_sponsor: "贊助 COSCUP"
  call_for_sponsor_desc: "若您對贊助 COSCUP 2026 有興趣，歡迎透過電子郵件與我們聯繫：sponsor{'@'}coscup.org"
  call_for_volunteer: "參與 COSCUP"
  call_for_volunteer_desc: "若您對參與 COSCUP 2026 有興趣，歡迎透過電子郵件與我們聯繫：volunteer{'@'}coscup.org"
</i18n>
