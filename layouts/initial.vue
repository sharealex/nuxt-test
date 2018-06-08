<template>
  <div>
    <Header></Header>
    <br>
    <nuxt />
    <br>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,Footer
    },
    scrollToTop: true
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
