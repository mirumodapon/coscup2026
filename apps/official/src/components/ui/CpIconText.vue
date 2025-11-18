<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(
  defineProps<{
    is?: string
    text: string
    positionX?: 'left' | 'right' | 'center'
    positionY?: 'top' | 'bottom' | 'middle'
    icon: Component
  }>(),
  {
    is: 'span',
    positionX: 'left',
    positionY: 'middle',
  },
)
</script>

<template>
  <div
    class="cp-icon-text"
    :class="[`cp-icon-text--${positionX}`, `cp-icon-text--${positionY}`]"
  >
    <component :is="is">
      {{ text }}
    </component>
    <component
      :is="icon"
      class="cp-icon-text__icon"
    />
  </div>
</template>

<style>
.cp-icon-text {
  @apply grid grid-template-rows-[1fr_1fr_1fr] grid-template-columns-[1fr_1fr_1fr];
}

.cp-icon-text > *:first-child {
  @apply col-start-2 col-end-3 row-start-2 row-end-3;
}

.cp-icon-text--left > .cp-icon-text__icon {
  @apply col-start-1 col-end-2;
}

.cp-icon-text--right > .cp-icon-text__icon {
  @apply col-start-3 col-end-4;
}

.cp-icon-text--center > .cp-icon-text__icon {
  @apply col-start-2 col-end-3;
}

.cp-icon-text--top > .cp-icon-text__icon {
  @apply row-start-1 row-end-2;
}

.cp-icon-text--bottom > .cp-icon-text__icon {
  @apply row-start-3 row-end-4;
}

.cp-icon-text--middle > .cp-icon-text__icon {
  @apply row-start-2 row-end-3;
}
</style>
