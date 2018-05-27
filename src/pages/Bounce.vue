<template>
<div>
  <Orb v-for="shade in shades" :key="`${shade}Orb`" :val="cVal" :fill="shade"></Orb>
</div>
</template>

<script>
import Orb from '../components/Orb';

export default {
  name: 'Bounce',
  components: {Orb},
  data() {
    return {
      cVal: 40,
      shades: [`dodgerblue`, `darkorange`, `orchid`, `tomato`, `lime`]
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    margin: 4em auto;
    padding-top: 8em;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }
</style>