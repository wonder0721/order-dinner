<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
  width: 100%;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
  export default {
    data () {
      return {
        radio1: '1',
      };
    }
  }
</script>
