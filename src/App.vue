<script lang="ts" setup>
import {ShoppingBagIcon} from '@heroicons/vue/24/outline'
import {RouterLink, RouterView} from 'vue-router'
import MobileMenu from '@/components/MobileMenu.vue'
import Logo from '@/components/icons/Logo.vue'
import {onMounted} from 'vue'

onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <header class="sticky top-0 z-50 text-black bg-white dark:text-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md">
    <div class="container px-4 py-1.5 lg:py-2 mx-auto flex items-center justify-between">
      <MobileMenu />

      <RouterLink to="/">
        <Logo class="block w-auto h-12 lg:h-16" />
      </RouterLink>

      <RouterLink to="/cart">
        <ShoppingBagIcon class="w-6 h-6"/>
      </RouterLink>
    </div>
  </header>

  <RouterView/>
</template>
