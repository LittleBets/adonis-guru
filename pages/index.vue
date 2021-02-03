<template>
  <div class="w-full">
    <GuruTile
      title="Expressive validators"
      :tags="['snippet']"
      doc="expressive-validators"
    >
      informative short description here
    </GuruTile>

    <GuruTile
      title="Websocket events"
      :tags="['snippet']"
      doc="websocket-events"
    >
      informative short description here
    </GuruTile>

    <GuruTile
      title="Validation error"
      :tags="['snippet']"
      doc="validation-error"
    >
      informative short description here
    </GuruTile>


    <NewsletterSignup />
  </div>
</template>

<script>
import NewsletterSignup from "~/components/NewsletterSignup";
import GuruTile from "~/components/GuruTile";
export default {
  components: {GuruTile, NewsletterSignup}
}
</script>

<style>
</style>
