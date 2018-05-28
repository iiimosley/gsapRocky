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
div{
  width: 70%;
  p {
    display: block;
    width: 30%;
    margin: auto;
    position: relative;
    transform-origin: center;
    animation: scaleText 3s alternate infinite linear;
    span {
      font-size: 3em;
      height: 3em;
      position: absolute;
      left: 50%;
      top: 50%;
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
}

@keyframes scaleText {
  to {
    transform: scale(1.5);
    text-shadow: 0 0 1em rgb(37, 32, 37);
  }
}

</style>
