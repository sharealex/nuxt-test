<template>
  <div>
    <Header></Header>
    <br>
    <nuxt />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'

  export default {
    components: {
      Header
    }
  }

</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }
  * {
    outline: none;
    user-select: none;
  }
</style>
