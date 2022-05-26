<template>
  <nav class="p-0 nav-bg">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" class="p-0">
        <!-- <b-navbar-brand :to="localePath('/')" class="navbar-logo"
          ><img src="~assets/images/logo.png" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink to="about_us">
              about
            </NuxtLink>
            <!-- <NuxtLink
              :to="/about_us">
              <div>About</div>
            </NuxtLink> -->
            <!-- <nuxt-link
              :to="localePath(encodeURI('/من-نحن'))"
              v-if="$i18n.locale === 'ar'"
            >
              <div class="nav-item">{{ $t("menu.about") }}</div>
            </nuxt-link>
            <nuxt-link :to="localePath('/services')">
              <div class="nav-item">{{ $t("menu.services") }}</div>
            </nuxt-link>
            <nuxt-link :to="localePath('/clinics')">
              <div class="nav-item">{{ $t("menu.clinics") }}</div>
            </nuxt-link>
            <nuxt-link :to="localePath('/doctors')">
              <div class="nav-item">{{ $t("menu.doctors") }}</div>
            </nuxt-link>
            <nuxt-link :to="localePath('/blog')" v-if="$i18n.locale == 'ar'">
              <div class="nav-item">{{ $t("menu.blog") }}</div>
            </nuxt-link>
            <nuxt-link :to="localePath('/offers')">
              <div class="nav-item">{{ $t("menu.offers") }}</div>
            </nuxt-link> -->
            <a
              href="https://booking.andalusia-dentalcenters.com/"
              target="_blank"
            >
              <div class="nav-item">Book now </div>
            </a>
            <!-- <nuxt-link :to="localePath('/contact-us')">
              <div class="nav-item">{{ $t("menu.contact") }}</div>
            </nuxt-link> -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="position-relative srch">
              <input
                type="text"
                class="form-control"
                placeholder="Search" />
              <i role="button" class="fas fa-search"></i>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </nav>
</template>

<script src="./nav-menu.js"></script>
