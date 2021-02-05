<template>
  <div class="w-full">
    <h1 class="text-3xl text-gray-600">
      #{{ currentPage }}
    </h1>
    <GuruTile
      v-for="tile in tiles"
      :title="tile.title"
      :doc="tile.slug"
    >
      {{ tile.description }}
    </GuruTile>
    <NewsletterSignup />
  </div>
</template>

<script>
import NewsletterSignup from "~/components/NewsletterSignup";
import GuruTile from "~/components/GuruTile";
export default {
  components: {GuruTile, NewsletterSignup},
  async asyncData({ $content, params }) {
    const currentPage = params.tag
    const tiles = await $content('snippets')
            .only(['title', 'slug', 'description', 'tags'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .where({ tags: { $contains: currentPage } })
            .fetch()
    return { currentPage, tiles }
  },
}
</script>

