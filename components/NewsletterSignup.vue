<template>
  <div class="relative mt-16">
    <div class="relative rounded-2xl px-6 pt-10 pb-2 bg-orange-600 overflow-hidden shadow-xl">
      <div
        aria-hidden="true"
        class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
      >
        <svg
          class="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1463 360"
        >
          <path
            class="text-orange-500 text-opacity-40"
            fill="currentColor"
            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
          />
          <path
            class="text-red-700 text-opacity-40"
            fill="currentColor"
            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
          />
        </svg>
      </div>
      <div class="relative">
        <div class="sm:text-center">
          <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Become an Adonis Guru!
          </h2>
          <p class="mt-6 mx-auto max-w-2xl text-lg text-orange-200">
            Sign up to be notified when we add new tips.
          </p>
        </div>
        <iframe
          class="mj-w-res-iframe mt-12"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://app.mailjet.com/widget/iframe/5LXN/HrY"
          width="100%"
        />
      </div>
    </div>
  </div>
</template>


<script>

export default {
  head() {
    return {
      script: [
        {
          src: 'https://app.mailjet.com/statics/js/iframeResizer.min.js'
        }
      ],
    }
  },

}

</script>
