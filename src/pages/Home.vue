<template>
<div>
  <h2>
    <span v-for="(letter, i) in text" :key="`letter${i}`" :id="`letter${i}`">{{letter}}</span>
  </h2>
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
h2 {
  position: relative;
  text-align: center;
  span{
    height: 3em;
    position: absolute;
    width: 20px;
    left: 0;
    top: 0;
    transform-origin: bottom center;
  }
}


</style>