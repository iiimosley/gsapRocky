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
      text: 'You Are Home',
      fontColor: 'blue'
    }
  },
  mounted() {
    for(let i=0; i<this.text.length; i++){
      document.querySelector(`#letter${i}`).style.transform = `rotate(${360/this.text.length*i}deg)`;
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
    animation: roundAbout 1s infinite linear;
  }
}

@keyframes roundAbout {
  0% {
    transform-style: preserve-3d;
  }
  100% {
    transform: rotate(1turn);
  }
}


</style>