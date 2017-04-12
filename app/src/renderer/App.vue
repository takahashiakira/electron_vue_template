<template>
  <div id="#app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  };
</script>

<style>
  @import "./styles/all.css";

  html, body {
    height: 100%;
  }

  .app {
    height: 100%;
    font-size: $text_size;
    line-height: 1.6;
    background-color: rgba(229, 229, 229, 0.4);
    padding: 200px 0 0;
    text-align: center;
  }
</style>
