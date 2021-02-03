<template>
  <div class="w-full max-w-6xl">
    <h1 class="text-3xl font-semibold text-orange-600 pb-2 mt-6">
      {{ doc.title }}
    </h1>
    <p class="text-gray-600 text-xs">
      #{{ doc.tags }}
    </p>
    <AuthorAvatar
      :name="doc.author"
      class="pb-6 pt-4"
    />
    <NuxtContent
      :document="doc"
      class="prose"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import CopyCode from "~/components/global/CopyCode";
import AuthorAvatar from "~/components/AuthorAvatar";
export default {
  components: {AuthorAvatar},
  async asyncData({ $content, params }) {
    const currentPage = params.slug
    const doc = await $content(`snippets`, currentPage).fetch()
    return { doc, currentPage }
  },
  head() {
    return {
      title: this.doc.title + ' - Docs Template',
      meta: [
        {hid: 'description', name: 'description', content: this.doc.description},
        // Open Graph
        {hid: 'og:title', property: 'og:title', content: this.doc.title},
        {hid: 'og:description', property: 'og:description', content: this.doc.description},
        // Twitter Card
        {hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
        {hid: 'twitter:site', name: 'twitter:site', content: '@<your twitter handle'},
        {hid: 'twitter:title', name: 'twitter:title', content: this.doc.title},
        {hid: 'twitter:description', name: 'twitter:description', content: this.doc.description},
        {hid: 'twitter:image', name: 'twitter:image', content: this.doc.image},
      ]
    }
  },
  mounted () {

    setTimeout(() => {
      const blocks = document.getElementsByClassName('nuxt-content-highlight')
      for (const block of blocks) {
        const CopyButton = Vue.extend(CopyCode)
        const component = new CopyButton().$mount()
        block.appendChild(component.$el)
      }
    }, 100)
  }

}
</script>

<style>
.nuxt-content-highlight {
  font-size: 14px;
}
</style>
