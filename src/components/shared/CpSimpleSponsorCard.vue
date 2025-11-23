<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    label?: string
    size?: 'sm' | 'md' | 'lg'
    src: blob
    is?: string
  }>(),
  {
    label: '',
    size: 'md',
    is: 'div',
  },
)
</script>

<template>
  <component
    :is="is"
    class="cp-sample-sponsor-card"
    :class="`cp-sample-sponsor-card--${size}`"
  >
    <div
      class="cp-sample-sponsor-card__logo"
    >
      <img
        :alt="`Logo of ${name}`"
        :src="src"
      >
    </div>
    <p class="cp-sample-sponsor-card__name">
      {{ name }}
    </p>
    <p class="cp-sample-sponsor-card__label">
      <span v-if="label">
        {{ label }}
      </span>
    </p>
  </component>
</template>

<style>
.cp-sample-sponsor-card {
  @apply flex flex-col bg-white rounded-lg overflow-hidden aspect-square text-center;
}

.cp-sample-sponsor-card:hover {
    @apply transform scale-105 duration-300;
}

.cp-sample-sponsor-card--sm {
  @apply w-36 text-sm;
}

.cp-sample-sponsor-card--md {
  @apply w-42 text-base;
}

.cp-sample-sponsor-card--lg {
  @apply w-48 text-lg;
}

.cp-sample-sponsor-card__logo {
  @apply grow-1 flex justify-center items-center;
}

.cp-sample-sponsor-card__name {
  @apply basis-[1.5em];
}

.cp-sample-sponsor-card__label {
  @apply basis-[1.5em];
}

.cp-sample-sponsor-card__label > span {
@apply w-full h-full block bg-primary-600 text-white
}
</style>
