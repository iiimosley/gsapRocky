<template>
  <circle :cx="val" :cy="val" :r="val" :fill="fill" />
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