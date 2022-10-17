<script lang="ts" setup>
import {ArrowSmallRightIcon} from '@heroicons/vue/24/solid'


</script>

<template>
  <div class="mt-10 lg:mt-16 text-center text-black dark:text-white md:container md:px-4 md:mx-auto">
    <h1 class="font-display font-black text-2.5xl sm:text-4xl md:text-6xl">404 - Not found</h1>
    <p class="mt-4 mx-auto px-8 max-w-[320px] sm:px-0 sm:max-w-none text-base sm:text-xl">The requested URL "{{ $route.path }}" was not found on this server.</p>
    <RouterLink class="mt-6 md:mt-12 font-medium md:font-semibold text-base md:text-lg inline-flex items-center gap-2 md:gap-2.5 rounded-xl md:rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 px-4 py-2 md:px-6 md:py-3" to="/">
      <span>Go to home</span>
      <ArrowSmallRightIcon class="w-5 h-5 md:w-6 md:h-6 relative top-0.25 md:top-0.5"/>
    </RouterLink>
  </div>
</template>
