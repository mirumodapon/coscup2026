<script setup lang="ts">
import ExternalLinkIcon from '~icons/tabler/external-link'
import LanguageIcon from '~icons/tabler/language'
import logoImg from '@/assets/img/coscup-logo.png'

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
  <nav class="flex justify-center items-center bg-white shadow-lg h-16 text-gray-700">
    <div class="basis-[180px] h-full shrink-0 px-3 py-1">
      <img
        class="w-inherit h-inherit"
        :src="logoImg"
      >
    </div>
    <div class="h-full grow-1 overflow-auto">
      <ul class="h-inherit flex justify-center items-center gap-3">
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
    <div class="text-[24px] flex justify-end items-center basis-[180px] px-3 py-1">
      <button class="cursor-pointer transition hover:scale-105 active:scale-95">
        <LanguageIcon />
      </button>
    </div>
  </nav>
</template>
