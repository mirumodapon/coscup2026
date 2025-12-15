<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<!-- TODO use theme colors -->

<template>
  <div class="text-sm my-4 px-4 pb-2 pt-4 rounded-md bg-gray-200">
    <p class="font-bold my-0">
      {{ title }}
    </p>
    <slot />
  </div>
</template>
