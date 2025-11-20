<script setup lang="ts">
import CpPopover from '@/components/ui/CpPopover.vue'

interface Options {
  label: string
  value: string
}

defineProps<{
  active: string
  options: Options
}>()

defineEmits(['select'])
</script>

<template>
  <CpPopover class="cp-menu">
    <template #trigger>
      <slot name="default" />
    </template>
    <template #content>
      <ul class="cp-menu__options">
        <li
          v-for="option in options"
          :key="option.value"
          class="cp-menu__option"
          :class="{ 'cp-menu__option-active': active === option.value }"
          @click="$emit('select', option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </template>
  </CpPopover>
</template>

<style>
.cp-menu__options {
  @apply text-base shadow-md py-3 px-5 bg-white rounded-lg border-1 border-gray-200;
}

.cp-menu__option {
  @apply cursor-pointer whitespace-nowrap;
}

.cp-menu__option-active {
  @apply font-bold text-gray-600;
}
</style>
