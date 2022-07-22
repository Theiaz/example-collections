<template>
  <main>
    <Component
      v-for="content in apiResponse"
      :key="content.id"
      :is="content.type"
      v-bind="feedItem(content).attrs"
      v-on="feedItem(content).events"
    />
  </main>
</template>
<script>
export default {
  methods: {
    feedItem(item) {
      // article specific stuff
      if (item.type === "NewsArticle") {
        return {
          attrs: {
            "article-title": item.title,
            "article-content": item.content,
          },
          events: {
            click: this.openArticle,
            mouseover: this.showPreview,
          },
        };
        // ad specific stuff
      } else if (item.type === "NewsAd") {
        return {
          attrs: {
            "ad-image": item.image,
            "ad-heading": item.heading,
          },
          events: {
            click: this.openAd,
            mouseover: this.trackAdEvent,
          },
        };
      }
    },
  },
};
</script>
