<template>
  <div>
    hey
    <!--    <NuxtLink
      v-if="{prev}"
      :to="{ name: 'slug', params: { slug: prev.slug } }"
    >
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink
      v-if="{next}"
      :to="{ name: 'slug', params: { slug: next.slug } }"
    >
      {{ next.title }}
    </NuxtLink>-->
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log(params)
    const [prev, next] = await $content('snippets')
            .only(['title', 'slug'])
            .surround(params.slug)
            .fetch()

    return {
      prev,
      next
    }
  }
}
</script>
