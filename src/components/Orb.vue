<template>
<svg :height="val * 2" :width="val * 2">
  <circle :cx="val" :cy="val" :r="val" :fill="fill" />
</svg>
</template>

<script>
export default {
  name: 'Orb',
  props: {
    val: {
      type: Number,
      default: 50
    },
    fill: {
      type: String,
      default: 'blue'
    }
  }
}
</script>

<style scoped>

</style>