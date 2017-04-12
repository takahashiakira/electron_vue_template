<template>
  <div>
    <img src="./assets/logo.png" alt="electron-vue">
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
  </div>
</template>

<script>
  import CurrentPage from './CurrentPage';
  import Links from './Links';
  import Versions from './Versions';
  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
    },
    name: 'landing-page',
  };
</script>

<style lang="postcss" scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
