<script setup lang="ts">
import { clsx } from 'clsx'

const props = withDefaults(
  defineProps<{
    variant?: 'solid' | 'outline' | 'ghost' | 'link'
    is?: string
    size?: 'lg' | 'md' | 'sm'
  }>(),
  {
    variant: 'solid',
    is: 'button',
    size: 'md',
  },
)

const classes = clsx(
  'cp-button',
  'inline-block whitespace-nowrap text-center border-2',
  'active:scale-[0.95] active:duration-75',
  props.variant === 'solid' && 'bg-primary-400 text-white border-transparent',
  props.variant === 'outline' && 'border-primary-400 text-primary-400',
  props.variant === 'ghost' && 'bg-transparent text-primary-400 border-transparent',
  props.variant === 'link' && 'bg-transparent text-primary-400 border-transparent underline',
  props.size === 'lg' && 'text-[18px] leading-[36px] px-[20px] rounded-[10px]',
  props.size === 'md' && 'text-[16px] leading-[32px] px-[18px] rounded-[8px]',
  props.size === 'sm' && 'text-[12px] leading-[24px] px-[16px] rounded-[6px]',
)
</script>

<template>
  <component
    :is="is"
    :class="classes"
  >
    <slot />
  </component>
</template>
