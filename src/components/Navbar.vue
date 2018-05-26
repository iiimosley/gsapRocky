<template>
<div>
  <h1>{{header}}</h1>
  <h3>{{tagline}}</h3>
  <ul>
    <router-link v-for="(link, i) in links" :key="`link${i}`" tag="li" :to="link.url" >
      <a>{{link.text}}</a>
    </router-link>
  </ul>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      header: 'GSAP Rocky',
      tagline: 'Experimentations with Green Socks Animations in a Reactive Environment',
      links: [{
          url: '#/',
          text: 'Home',
        },
        {
          url: '#/bouncing',
          text: 'Bouncing',
        }],
    };
  },
};

</script>

<style lang="scss" scoped>

div {
  background: rgb(1, 61, 1);
  color: whitesmoke;
  text-align: center;
}

h1 {
  font-size: 2.6em;
  letter-spacing: .1em;
  margin: 0;
  padding: 1em .6em .6em;
}

ul {
  display: flex;
  margin: 1em auto;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 1em;
  li {
    display: inline-block;
    width: 18%;
    a {
      text-decoration: none;
      font-size: 1.15em;
      color: inherit;
      transition: all .18s;
      &:hover{
      color: bisque;
      letter-spacing: .1em;
      text-shadow: 0 0 .1em whitesmoke;
      }
    }
  }
}




</style>
