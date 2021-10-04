<template>
  <div id="app">
    <slider-header/>
    <catalog/>
  </div>
</template>

<script>

import Catalog from "./components/catalog";
import SliderHeader from "./components/slider-header";
export default {
  name: 'App',
  components: {
    SliderHeader,
    Catalog,
  }
}
</script>

<style lang="scss">

:root {
  --font-color: #444444;
  --circle-background-color: #f6f6f6;
  --border-color: #eeeeee;
  --primary-color: #00adef;
}

#app {

  margin: 26px 0 25px 0;

}




</style>
