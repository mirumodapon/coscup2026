<script setup lang="ts">
import { CpMenu } from '@coscup2026/ui'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import LanguageIcon from '~icons/tabler/language'

const router = useRouter()
const { locale } = useI18n()

const language = [
  { label: '繁體中文', value: 'zh-TW' },
  { label: 'English', value: 'en' },
]

function handleLocaleSelect(option) {
  router.push({ params: { lang: option.value } })
}
</script>

<template>
  <CpMenu
    :active="locale"
    align="right"
    :options="language"
    @select="handleLocaleSelect"
  >
    <button class="cursor-pointer transition hover:scale-105 active:scale-95">
      <LanguageIcon />
    </button>
  </CpMenu>
</template>
