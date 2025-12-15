<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="prose">
    <h1>{{ t("main_page.title") }}</h1>
    <NuxtLinkLocale to="/about">
      {{ t("main_page.about_link") }}
    </NuxtLinkLocale>
  </div>
</template>

<i18n lang="yaml">
en:
  main_page:
    title: "Main page"
    about_link: "About page"
zh:
  main_page:
    title: "首頁"
    about_link: "關於我們"
</i18n>
