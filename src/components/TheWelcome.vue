<script lang="ts" setup>
import {ArrowSmallRightIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="text-center text-black dark:text-white md:container md:px-4 md:mx-auto">
    <h1 class="font-display font-black text-2.5xl sm:text-4xl md:text-6xl">See the most beautiful<br>places on our planet.</h1>
    <p class="mt-4 mx-auto px-8 max-w-[320px] sm:px-0 sm:max-w-none text-base sm:text-xl">Book tickets and the best hotels at the lowest prices.</p>
    <RouterLink to="/catalog" class="mt-6 md:mt-12 font-medium md:font-semibold text-base md:text-lg inline-flex items-center gap-2 md:gap-2.5 rounded-xl md:rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 px-4 py-2 md:px-6 md:py-3">
      <span>Go to catalog</span>
      <ArrowSmallRightIcon class="w-5 h-5 md:w-6 md:h-6 relative top-0.25 md:top-0.5" />
    </RouterLink>
    <img src="../assets/images/pietro-de-grandi.jpg" alt="River with mountains" class="mt-12 md:rounded-4xl shadow-md md:shadow-xl shadow-cyan-500/25">
    <!-- Photo by <a href="https://unsplash.com/@peter_mc_greats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pietro De Grandi</a> on <a href="https://unsplash.com/s/photos/travel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> -->
  </div>
</template>
