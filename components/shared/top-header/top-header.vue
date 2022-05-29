<template>
  <div class="top-header">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" class="p-0">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
              <a class="nav-item" v-for="(site, index) in allSites"
              :id="site.name"
              :key="index"
              :href="`http://${site.baseURL}`" target="_parent"><span>{{site.name}}</span></a>
          </b-navbar-nav>
          <a v-if="false" href="#">{{$t('welcome')}}</a>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topHeader',
  data(){
    return {
      siteName: (process.client) ?  JSON.parse(localStorage.getItem('siteName')): '',
      allSites: (process.client) ? JSON.parse(localStorage.getItem('allSites')): {},
    }
  },
}
</script>

<style lang="scss" scoped>
.top-header {
  background-color: var(--thirdColor);
  width: 100%;
  height: 55px;
  & span {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      line-height: .25em;
      margin: 18px 0;
      display: inline-block;
  }
}
.nav-item {
  padding: 0 10px;
}
.navbar-nav {
  .group-active-link {
    border-bottom: 2px solid red !important;
  }
}
</style>
