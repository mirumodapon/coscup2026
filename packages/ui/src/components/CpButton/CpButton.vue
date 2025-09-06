<script setup lang="ts">
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
</script>

<template>
  <component
    :is="is"
    class="cp-button"
    :class="[`cp-button--${props.variant}`, `cp-button--${props.size}`]"
  >
    <slot />
  </component>
</template>

<style scoped>
.cp-button {
  @apply inline-block whitespace-nowrap text-center border-2;
  @apply active:scale-[0.95] active:duration-75;
}

.cp-button--solid {
  @apply bg-primary-400 text-white border-transparent;
}

.cp-button--outline {
  @apply border-primary-400 text-primary-400;
}

.cp-button--ghost {
  @apply bg-transparent text-primary-400 border-transparent;
}

.cp-button--link {
  @apply bg-transparent text-primary-400 border-transparent underline;
}

.cp-button--lg {
  @apply text-[18px] leading-[36px] px-[20px] rounded-[10px];
}

.cp-button--md {
  @apply text-[16px] leading-[32px] px-[18px] rounded-[8px];
}

.cp-button--sm {
  @apply text-[12px] leading-[24px] px-[16px] rounded-[6px];
}
</style>
