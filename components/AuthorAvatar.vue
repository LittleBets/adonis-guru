<template>
  <div class="flex items-center">
    <div>
      <img
        class="inline-block h-9 w-9 rounded-full h-10 w-10"
        :src="author.avatar"
        :alt="author.name"
      >
    </div>
    <div class="ml-3">
      <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
        {{ author.name }}
      </p>
      <p class="text-xs font-medium text-blue-500 group-hover:text-gray-700">
        @{{ author.handle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {type: String}
  },
  data () {
    return {
      author: {}
    }
  },
  mounted() {
    switch(this.name.toLowerCase()) {
      case 'ashok':
        this.author = {
          name: 'Ashok Gelal',
          avatar: 'https://pbs.twimg.com/profile_images/1327311742829883392/Gx6mG7kH_400x400.jpg',
          handle: 'ashokgelal',
        }
        break;
        default:
         break;
    }
  }

}
</script>
