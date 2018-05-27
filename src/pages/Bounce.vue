<template>
<div>
  <Orb :val="50" :fill="`#1e90ff`"></Orb>
</div>
</template>

<script>
import Orb from '../components/Orb';

export default {
  name: 'Bounce',
  components: {Orb}
}
</script>

<style scoped>

</style>