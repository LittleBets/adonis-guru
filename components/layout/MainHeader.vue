<template>
  <div class="z-10 flex flex-shrink-0 h-16 w-full max-w-6xl items-center justify-between bg-white sm:px-3">
    <!-- Mobile menu button -->
    <button
      class="md:hidden items-center px-4"
      @click="showMobileMenu"
    >
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <div class="hidden md:flex px-4">
      <!-- Swap out the logo with one of your own -->
      <nuxt-link
        to="/"
        class="md:text-2xl font-extrabold tracking-tight sm:text-xl text-gray-800"
      >
        Adonis Guru
      </nuxt-link>
    </div>
  </div>
</template>

<script>

import GlobeIcon from "@/components/icons/GlobeIcon";
export default {
  components: {GlobeIcon},
  methods: {
    showMobileMenu () {
      this.$emit('showMobileMenu') // closes the mobile menu if in open state and when route changes
    }
  }
}
</script>
