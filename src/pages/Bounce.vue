<template>
<div class="orbRow">
  <svg :height="cVal * 2" :width="cVal * 2" v-for="shade in shades" @mouseover="bounceUp" :key="`${shade}Orb`" >
    <Orb :val="cVal" :fill="shade"></Orb>
  </svg>
</div>
</template>

<script>
import {TweenLite} from 'gsap';
import Orb from '../components/Orb';

export default {
  name: 'Bounce',
  components: {Orb},
  data() {
    return {
      cVal: 40,
      shades: [`dodgerblue`, `darkorange`, `orchid`, `tomato`, `lime`]
    }
  },
  methods: {
    bounceUp: function(e) {
      if (e.target.tagName === 'circle'){
      TweenLite.to(e.path[1], 1 / 4, {y:-130, ease:Power1.easeOut});
      TweenLite.to(e.path[1], 1 / 2, {y:0, ease:Bounce.easeOut, delay: 1 / 4});
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .orbRow {
    display: flex;
    margin: 4em auto;
    padding-top: 8em;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

</style>