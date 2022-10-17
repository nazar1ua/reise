<script lang="ts" setup>
import {Tab, TabGroup, TabList} from '@headlessui/vue'
import {computed, ref, type Ref} from 'vue'

const availableThemes: Ref<string[]> = ref([
  'light',
  'system',
  'dark',
])

const defaultIndex = computed(() => (
  availableThemes.value.indexOf(localStorage.getItem('theme') || 'system')
))

function changeTab(index: number): void {
  switch (index) {
    case 0:
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
      break
    case 1:
      localStorage.removeItem('theme')
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      break
    case 2:
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
      break
  }
}
</script>

<template>
  <TabGroup @change="changeTab" :default-index="defaultIndex">
    <TabList class="flex space-x-1 rounded-xl bg-zinc-50 dark:bg-zinc-900 p-1">
      <Tab v-for="theme in availableThemes" :key="theme" v-slot="{ selected }" as="template">
        <button
          class="w-full capitalize rounded-lg py-2.5 text-sm font-medium leading-5 text-black dark:text-white focus-visible:outline-none"
          :class="selected ? 'bg-white dark:bg-zinc-800 shadow' : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-800 focus-visible:bg-zinc-100'"
        >
          {{ theme }}
        </button>
      </Tab>
    </TabList>
  </TabGroup>
</template>
