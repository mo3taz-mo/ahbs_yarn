<template>
  <nav class="p-0 nav-bg">
    <div class="container">
      <b-navbar toggleable="lg" type="dark" class="p-0">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink to="about_us">
              About
            </NuxtLink>
            <NuxtLink to="contact_us">
              Contact Us
            </NuxtLink>
            <a
              v-if="siteName == 'ADC'"
              href="https://booking.andalusia-dentalcenters.com/"
              target="_blank"
            >
              <div class="nav-item">Book now </div>
            </a>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto" v-if="siteName == 'ADC'">
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
