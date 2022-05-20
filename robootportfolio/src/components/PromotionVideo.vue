<template>
    <h1>{{ header }}</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/SNh966U_HoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>

<script>
export default {
  name: 'PromotionVideo',
  props: {
      header: String
  }
}
</script>

<style scoped>

</style>