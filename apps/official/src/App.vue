<script setup lang="ts">
import { CpMarkdown } from '@coscup2026/ui'
import testMd from './test.md?raw'
</script>

<template>
  <h1>Hello, @coscup 2026</h1>
  <CpMarkdown :text="testMd" />
</template>
