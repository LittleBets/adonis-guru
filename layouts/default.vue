<template>
  <div class="max-w-3xl mx-auto">
    <!--    <transition
      enter-active-class="transition-opacity ease-linear duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-linear duration-300"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <MobileMenu
        v-show="showMobileMenu"
        @closeMobileMenu="showMobileMenu = false"
      />
    </transition>-->
    <MainHeader
      v-show="!showMobileMenu"
      @showMobileMenu="showMobileMenu = true"
    />
    <div class=" flex">
      <Nuxt class="px-6" />
    </div>
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from "@/components/layout/MainFooter";
import MainHeader from "@/components/layout/MainHeader";
export default {
  components: {MainFooter, MainHeader},
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  data () {
    return {
      showMobileMenu: false
    }
  },
  watch: {
    '$route' () {
      this.showMobileMenu = false
    }
  }
}
</script>

<style>
  .prose code {
    color: orange;
  }
  .prose a {
    color: #2563EB;
    text-decoration: none;
  }

  .prose a:hover {
    color: #3B82F6;
    text-decoration: none;
  }
</style>
