<template>
<div>
  <p>
    <span v-for="(letter, i) in text" :key="`letter${i}`" :id="`letter${i}`">{{letter}}</span>
  </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'You Are Home ',
      fontColor: 'blue'
    }
  },
}
</script>

<style lang="scss" scoped>
p {
  width: 30%;
  margin: 3em auto;
  position: relative;
  text-align: center;
  animation: scaleText 2s alternate infinite;
  span {
    font-size: 3em;
    height: 4em;
    position: absolute;
    width: 1em;
    left: 0;
    top: 0;
    transform-origin: bottom center;
  }
  @for $i from 0 through 12 {
    $start: 360/13*$i;
    $end: 360/13*$i+360;
    #letter#{$i} {
      animation: roundAbout#{$i} 6s infinite linear;
    }
    @keyframes roundAbout#{$i} {
      from {
        transform: rotate(($start)+deg);
      }
      to {
        transform: rotate(($end)+deg);
      }
    }
  }
}

@keyframes scaleText {
  to {
    transform: scale(1.3);
  }
}

</style>
