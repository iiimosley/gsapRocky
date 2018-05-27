<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: { Navbar },
}
</script>

<style>
@import './assets/lib.css';
@import url('https://fonts.googleapis.com/css?family=Poppins|Raleway');
div {
  font-family: 'Raleway', Helvetica, sans-serif;
}
</style>
