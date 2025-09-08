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
    <div
      v-if="$slots.image"
      class="cp-card__image-wrap"
    >
      <slot name="image" />
    </div>
  </div>
</template>

<style>
.cp-card {
  @apply max-w-[650px] min-h-[250px] max-h-[400px];
  @apply bg-white;
  @apply flex flex-wrap-reverse;
  @apply rounded-xl overflow-hidden shadow-lg;
}

.cp-card__content-wrap {
  @apply text-gray-700;
  @apply grow-3 basis-[320px] p-5;
  @apply flex flex-col gap-3;
}

.cp-card__title {
  @apply text-2xl font-bold;
}

.cp-card__content {
  @apply flex-1;
}

.cp-card__content * {
  @apply h-[100px] line-clamp-4 text-justify;
}

.cp-card__image-wrap {
  @apply basis-[240px] grow-1;
}

.cp-card__image-wrap > * {
  @apply w-full h-full;
  @apply object-cover;
}
</style>
