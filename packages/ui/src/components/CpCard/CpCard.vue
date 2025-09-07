<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="cp-card">
    <div class="cp-card__content-wrap">
      <h2 class="cp-card__title">
        {{ title }}
      </h2>
      <div class="cp-card__content">
        <slot name="content" />
      </div>
      <div class="cp-card__actions">
        <slot name="actions" />
      </div>
    </div>
    <div class="cp-card__image-wrap">
      <slot name="image" />
    </div>
  </div>
</template>

<style>
.cp-card {
  @apply w-[600px] h-[240px] bg-white flex flex-row rounded-2xl overflow-hidden;
  @apply shadow-md;
}

.cp-card__content-wrap {
  @apply p-4 flex flex-col flex-1 text-gray-700;
}

.cp-card__title {
  @apply text-2xl font-bold;
}

.cp-card__content {
  @apply mt-2 flex-1;
}

.cp-card__image-wrap {
  @apply basis-[230px] overflow-hidden;
}

.cp-card__image-wrap > * {
  @apply w-full h-full object-cover;
}
</style>
