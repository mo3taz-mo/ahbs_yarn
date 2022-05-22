<template>
  <div id="main-content">
    <headerApp />
    <navMenu />
    <Nuxt />
    <footerApp />
  </div>
</template>

<script>
import headerApp from '~/components/shared/header-app/header-app.vue'
import footerApp from '~/components/shared/footer-app/footer-app.vue'
import navMenu from '~/components/shared/nav_menu/nav-menu.vue'
export default {
  data() {
    return {
    };
  },
  components: {
    headerApp,
    footerApp,
    navMenu,
  },
  methods: {

  },
  created() {

  },
};
</script>

<style scoped lang="scss">

</style>
