<script lang="ts" setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue'
import {Bars3Icon, XMarkIcon} from '@heroicons/vue/24/outline'
import {type Ref, ref} from 'vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

interface Nav {
  path: string
  name: string
}

const nav: Ref<Nav[]> = ref([
  {
    name: 'Catalog',
    path: '/catalog',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
])
</script>

<template>
  <Popover v-slot="{ open, close }" class="flex">
    <PopoverButton class="relative z-20 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-700">
      <XMarkIcon v-if="open" class="w-6 h-6"/>
      <Bars3Icon v-else class="w-6 h-6"/>
    </PopoverButton>

    <teleport to="body">
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full">
        <PopoverPanel class="fixed top-0 left-0 bottom-0 w-screen bg-white dark:bg-black">
          <div class="pt-16 md:pt-24">
            <div class="px-4">
              <ThemeSwitcher />
            </div>
            <ul class="pt-2 md:pt-4 flex flex-col divide-y divide-zinc-100 dark:divide-zinc-700">
              <li v-for="link in nav">
                <RouterLink @click="close" class="block text-zinc-900 dark:text-zinc-100 px-4 py-2.5 font-semibold text-lg" :to="link.path">{{ link.name }}</RouterLink>
              </li>
            </ul>
          </div>
        </PopoverPanel>
      </transition>
    </teleport>
  </Popover>
</template>
