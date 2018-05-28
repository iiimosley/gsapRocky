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
      tagline: 'Experimentations with SVG || Green Socks Animations || CSS in a Reactive Environment',
      links: [{
          url: '/',
          text: 'Home',
        },
        {
          url: '/bounce',
          text: 'Bounce',
        }],
    };
  },
};

</script>

<style lang="scss" scoped>

div {
  background: rgb(29, 80, 29);
  color: whitesmoke;
  text-align: center;
}

h1 {
  font-family: 'Poppins', Helvetica, sans-serif;
  font-size: 2.6em;
  letter-spacing: .1em;
  margin: 0;
  padding: 1em 0 0;
}

ul {
  display: flex;
  margin: 1em auto;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  padding-bottom: 1em;
  li {
    display: inline-block;
    width: 18%;
    a {
      text-decoration: none;
      font-size: 1.15em;
      color: inherit;
      transition: all .3s;
      &:hover{
        display: inline-block;
        letter-spacing: .1em;
        border-left: .2em solid bisque;
        border-right: .2em solid bisque;
        padding: 0 .3em;
      }
    }
  }
}

</style>
