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

<style lang="scss" scoped>
@import "assets/scss/variable.scss";
$small: 900px;
.nav-bg {
  height: 50px;
  background: red;
  // background: linear-gradient(
  //   90deg,
  //   rgba(69, 132, 43, 1) 0%,
  //   rgba(69, 132, 43, 1) 62%,
  //   rgba(35, 66, 22, 1) 100%
  // );
  @media screen and (max-width: $small) {
    height: auto;
  }

  a {
    line-height: 50px;
    color: #fff;
    font-weight: 600;
    margin-right: 30px;
    text-transform: uppercase;
    font-size: 14px;
    @media screen and (max-width: 1024px) {
      margin-right: 5px;
    }
    @media screen and (max-width: $small) {
      margin-right: 0px;
    }
  }

  a:lang(ar) {
    margin-left: 60px;
    margin-right: 0px;
    @media screen and (max-width: 1024px) {
      margin-left: 40px;
    }
    @media screen and (max-width: $small) {
      text-align: right;
      margin-left: 0px;
    }
  }
}

::v-deep {
  .navbar-dark .navbar-nav .nav-link {
    color: unset !important;
  }

  .navbar-brand {
    width: 80% !important;
    margin-left: 0px !important;
    margin-right: 0px !important;

    img {
      width: 80%;
      filter: brightness(0) invert(1);
    }
  }

  .navbar-toggler {
    padding: 5px;
    border: none;
    color: #fff;
  }
}

.srch {
  @media screen and (max-width: $small) {
    margin-bottom: 10px;
  }

  input {
    background-color: unset;
    border: 1px solid #93a19b;
    color: #fff;

    &::placeholder {
      color: #a7b1a4;
    }
  }

  i {
    position: absolute;
    top: 10px;
    right: 15px;
    color: #fff;
  }

  i:lang(ar) {
    left: 15px;
    right: auto;
  }
}

.navbar-nav {
  a {
    &:hover {
      color: #ffc96c;
      transition: all 0.9s ease 0s;
    }
  }
}

.navbar-logo {
  @media screen and (max-width: 768px) {
    max-width: 180px;
    height: auto;
    padding: 5px 0;
    display: block;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
}
</style>
