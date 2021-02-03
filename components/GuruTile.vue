<template>
  <div>
    <nuxt-link
      :to="doc"
      class="py-3 px-3 grid items-center hover:bg-orange-100 rounded-lg mt-6"
    >
      <div
        v-for="tag in tags"
      >
        <span class="text-xs text-gray-600">
          #{{ tag }}
        </span>
      </div>
      <div class=" block">
        <p class="text-xl font-semibold text-orange-600">
          {{ title }}
        </p>
        <p class="mt-3 text-base text-gray-600">
          <slot />
        </p>
      </div>
      <div class="mt-3">
        <div
          class="text-sm text-orange-600 hover:text-orange-500"
        >
          Check it out
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    tags: {type: Array},
    title: {type: String, required: true},
    doc: {type: String, required:true}
  }
}
</script>
