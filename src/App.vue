<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height:100%;
  margin: 0;
  padding: 0;
}
body:-webkit-scrollbar{
  display: none;
}
#app {
  height:100vh;
  overflow: hidden;
}
</style>
