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
      animation: roundAbout#{$i} 10s infinite linear;
    }
    @keyframes roundAbout#{$i} {
      0%{
        transform: rotate(($start)+deg);
      }
      100% {
        transform: rotate(($end)+deg);
      }
    }
  }
}
</style>
