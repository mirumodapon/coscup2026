<script setup lang="ts">
import ExternalLinkIcon from '~icons/tabler/external-link'
import logoImg from '@/assets/img/coscup-logo.png'
import LocaleSelector from '@/components/LocaleSelector.vue'

const menu = [
  { name: '議程表', path: '#' },
  { name: '議程狀態', path: '#' },
  { name: '交通方式', path: '#' },
  { name: '會場地圖', path: '#' },
  { name: '贊助夥伴', path: '#' },
  { name: '周邊活動', path: '#' },
  { name: '工作人員', path: '#' },
  { name: '部落格', path: '#', isExternal: true },
  { name: '社群守則', path: '#', isExternal: true },
]
</script>

<template>
  <nav class="text-gray-700 bg-white flex h-16 shadow-lg items-center justify-center">
    <div class="px-3 py-1 shrink-0 basis-[180px] h-full">
      <img
        class="h-inherit w-inherit"
        :src="logoImg"
      >
    </div>
    <div class="grow-1 h-full overflow-auto">
      <ul class="flex gap-3 h-inherit items-center justify-center">
        <li
          v-for="item in menu"
          :key="item.name"
          class="whitespace-nowrap"
        >
          <component
            :is="item.isExternal ? 'a' : 'router-link'"
            :href="item.path"
            :to="item.path"
          >
            {{ item.name }}
            <ExternalLinkIcon
              v-if="item.isExternal"
              class="inline"
            />
          </component>
        </li>
      </ul>
    </div>
    <div class="text-[24px] px-3 py-1 flex basis-[180px] items-center justify-end">
      <LocaleSelector />
    </div>
  </nav>
</template>
