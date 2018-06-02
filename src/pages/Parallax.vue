<template>
<main class="wrapper">
  <section @mousemove="shadowEffect" class="section parallax bg1">
    <h2>Such Adorbz</h2>
  </section>
  <section @mousemove="shadowEffect" class="section static">
    <h2>Boring</h2>
  </section>
  <section @mousemove="shadowEffect" class="section parallax bg2">
    <h2>SO FWUFFY AwWwW</h2>
  </section>
</main>
</template>

<script>
export default {
  methods: {
    shadowEffect: function(e){
      const section = document.querySelector('.section');
      const walk = 100;

      const {offsetWidth: width, offsetHeight: height} = section;
      let {offsetX: x, offsetY: y} = e;
      if(e.target.tagName !== 'SECTION'){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const walkFormula = (z, prop) => Math.round((z / prop * walk) - (walk / 2));
      const walkX = walkFormula(x, width);
      const walkY = walkFormula(y, height);
      console.log(walkX, walkY);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
  height: 100vh;
  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
  overflow-x: hidden;
  /* Enable scrolling on the page. */
  overflow-y: auto;
  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
  perspective: 2px;
}

.section {
  /* Needed for children to be absolutely positioned relative to the parent. */
  position: relative;
  /* The height of the container. Must be set, but it doesn't really matter what the value is. */
  height: 100vh;

  /* For text formatting. */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 0 5px #000;
  h2 {
    font-size: 4em;
    animation: wiggle 1.7s infinite alternate linear;
  }
}

@keyframes wiggle {
  0%{
    transform: skew(-8deg);
  }
  25%{
    transform: skew(10deg);
  }
  50%{
    transform: skew(-15deg);
  }
  75%{
    transform: skew(28deg);
  }
  100%{
    transform: skew(-30deg);
  }
}

.parallax::after {
  /* Display and position the pseudo-element */
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Move the pseudo-element back away from the camera,
   * then scale it back up to fill the viewport.
   * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
  transform: translateZ(-1px) scale(1.5);
  /* Force the background image to fill the whole element. */
  background-size: 100%;
  /* Keep the image from overlapping sibling elements. */
  z-index: -1;
}

/* The styling for the static div. */
.static {
  background: linear-gradient(45deg, red, darkred);
}

/* Sets the actual background images to adorable kitties. This part is crucial. */
.bg1::after {
  background-image: url('https://placekitten.com/g/900/700');
}

.bg2::after {
  background-image: url('https://placekitten.com/g/800/600');
}
</style>