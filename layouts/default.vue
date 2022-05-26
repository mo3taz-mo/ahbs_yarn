<template>
  <client-only>
    <div id="main-content">
      <topHeader />
      <headerApp />
      <navMenu />
      <Nuxt />
      <footerApp v-if="name == 'ABC'" />
    </div>
  </client-only>

</template>

<script>
import topHeader from '~/components/shared/top-header/top-header.vue'
import headerApp from '~/components/shared/header-app/header-app.vue'
import footerApp from '~/components/shared/footer-app/footer-app.vue'
import navMenu from '~/components/shared/nav-menu/nav-menu.vue'
export default {
  data() {
    return {
      name: (process.client) ?  JSON.parse(localStorage.getItem('siteName')): '',
    };
  },
  components: {
    topHeader,
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
