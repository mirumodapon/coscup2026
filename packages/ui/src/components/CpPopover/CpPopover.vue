<script setup lang="ts">
import { nextTick, ref } from 'vue'

withDefaults(
  defineProps<{
    align?: 'right' | 'left'
    position?: 'top' | 'bottom'
  }>(),
  {
    align: 'left',
    position: 'bottom',
  },
)

const isOpen = ref(false)
const contentElement = ref<HTMLElement | null>(null)

async function handleTriggerOnClick() {
  isOpen.value = !isOpen.value
  await nextTick()
  contentElement.value?.focus()
}

function handleContentOnBlur() {
  isOpen.value = false
}

function handleContentOnClick() {
  isOpen.value = false
}
</script>

<template>
  <div class="cp-popover">
    <div
      class="cp-popover__trigger"
      @click="handleTriggerOnClick"
    >
      <slot name="trigger" />
    </div>

    <div
      v-show="isOpen"
      ref="contentElement"
      class="cp-popover__content"
      :class="[`cp-popover__content--${align}`, `cp-popover__content--${position}`]"
      tabindex="-1"
      @blur="handleContentOnBlur"
      @click="handleContentOnClick"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style>
.cp-popover {
  @apply size-min relative;
}

.cp-popover__trigger {
  @apply size-min;
}

.cp-popover__content {
  @apply absolute;
}

.cp-popover__content--right {
  @apply right-0;
}

.cp-popover__content--left {
  @apply left-0;
}

.cp-popover__content--bottom {
  @apply top-full;
}

.cp-popover__content--top {
  @apply bottom-full;
}
</style>
