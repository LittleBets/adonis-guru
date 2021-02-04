<template>
  <div class="w-full">
    <GuruTile
      v-for="tile in tiles"
      :title="tile.title"
      :tags="[tile.tags]"
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
  async asyncData({ $content }) {
    const tiles = await $content('snippets')
            .only(['title', 'slug', 'description', 'tags'])
            .sortBy('createdAt', 'desc')
            .limit(10)
            .fetch()

    return { tiles }
  },
}
</script>

