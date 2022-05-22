<template>
  <div>
    <footer>
      <img
        src="@/assets/images/onlineconsultation-bg.png"
        alt="logo"
        class="img-fluid img-logo-footer"
      />
      <div class="hold-btns">
        <button class="toggle-btn">
          contact us
        </button>
      </div>
      <transition-group name="slide-fade" class="fix-animation">
        <div key="1" v-if="false" class="siteMap-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 px-lg-0">
                <div class="site-map">
                  <div class="hold-links">
                    <div class="row">
                      <div class="col-6">
                        <h5 class="text-capitalize">{{ $t("site_map") }}</h5>
                        <!-- <ul class="mt-2 links">
                          <li>
                            <nuxt-link :to="localePath('/')">{{
                              $t("menu.home")
                            }}</nuxt-link>
                          </li>
                          <li v-if="$i18n.locale === 'en'">
                            <nuxt-link :to="localePath('/about_us')">
                              <div class="nav-item">{{ $t("menu.about") }}</div>
                            </nuxt-link>
                          </li>
                          <li v-if="$i18n.locale === 'ar'">
                            <nuxt-link :to="localePath(encodeURI('/من-نحن'))">
                              <div class="nav-item">{{ $t("menu.about") }}</div>
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link :to="localePath('/services')">{{
                              $t("menu.services")
                            }}</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link :to="localePath('/clinics')">{{
                              $t("menu.clinics")
                            }}</nuxt-link>
                          </li>
                          <li>
                            <nuxt-link :to="localePath('/contact-us')">{{
                              $t("menu.contact")
                            }}</nuxt-link>
                          </li>
                        </ul> -->
                      </div>
                      <div class="col-6">
                        <h5 class="invisible">{{ $t("site_map") }}</h5>
                        <!-- <ul class="mt-2 links">
                          <li>
                            <nuxt-link :to="localePath('/doctors')"
                              ><div class="nav-item">
                                {{ $t("menu.doctors") }}
                              </div></nuxt-link
                            >
                          </li>
                          <li v-if="$i18n.locale == 'ar'">
                            <nuxt-link :to="localePath('/blog')"
                              ><div class="nav-item">
                                {{ $t("menu.blog") }}
                              </div></nuxt-link
                            >
                          </li>
                          <li>
                            <nuxt-link :to="localePath('/offers')"
                              ><div class="nav-item">
                                {{ $t("menu.offers") }}
                              </div></nuxt-link
                            >
                          </li>
                          <li>
                            <a
                              href="https://booking.andalusia-dentalcenters.com/"
                              target="_blank"
                              ><div class="nav-item">
                                {{ $t("menu.booknow") }}
                              </div></a
                            >
                          </li>
                        </ul> -->
                      </div>
                    </div>
                  </div>
                  <div class="subscribe">
                    <h4>{{ $t("subscribe") }}</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 px-lg-0">
                <img
                  src="@/assets/images/footer-img.jpg"
                  alt="footer-img"
                  class="img-fluid siteMap-img"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- <div
          key="2"
          v-if="true"
          class="contact-us-footer"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-12 px-lg-0">
                <div class="site-map">
                  <div class="hold-links">
                    <div class="row">
                      <div class="col-12">
                        <h5 class="text-capitalize">{{ $t("contacts") }}</h5>
                        <ul class="mt-2 contacts">
                          <li>
                            <span
                              :class="$i18n.locale == 'ar' ? 'ml-2' : 'mr-2'"
                              ><i class="fas fa-map-marker-alt"></i
                            ></span>
                            <a
                              href="https://www.google.com/maps?cid=9172036206807217811"
                              target="_blank"
                              >{{ contactUs.address }}</a
                            >
                          </li>
                          <li>
                            <span
                              :class="$i18n.locale == 'ar' ? 'ml-2' : 'mr-2'"
                              ><i class="fas fa-map-marker-alt"></i
                            ></span>
                            <a
                              href="https://www.google.com/maps?cid=10583981543852079481"
                              target="_blank"
                              >{{ contactUs.address_two }}</a
                            >
                          </li>
                          <li>
                            <span
                              :class="$i18n.locale == 'ar' ? 'ml-2' : 'mr-2'"
                              ><i class="fas fa-envelope"></i
                            ></span>
                            <a :href="`mailto:${contactUs.email}`">{{
                              contactUs.email
                            }}</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="subscribe">
                    <h4>{{ $t("query") }}</h4>
                    <ul class="mt-2 contacts">
                      <li>
                        <span :class="$i18n.locale == 'ar' ? 'ml-2' : 'mr-2'"
                          ><i class="fas fa-phone-alt"></i
                        ></span>
                        <a :href="`tel:${contactUs.phone}`" class="phone-ar">{{
                          contactUs.phone
                        }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-12 px-lg-0">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1lH6tundP8-eLtThBoYay22lHS-mfi5GX&hl=en"
                  width="100%"
                  height="100%"
                ></iframe>
              </div>
            </div>
          </div>
        </div> -->
      </transition-group>
    </footer>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <ul class="footer-social col-12">
            <li>
              <a href="#" target="_blank"
                ><i class="fab fa-facebook-square"></i
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="fab fa-youtube"></i
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="fab fa-twitter-square"></i
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
          </ul>
          <div class="col-12 text-center">
            <!-- <Copyright /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./footer-app.js"></script>

<style lang="scss" scoped>
$small: 768px;
footer {
  /*background: rgb(36, 68, 23);*/
  /*background: linear-gradient(0deg, rgba(36, 68, 23, 1) 0%, rgba(65, 124, 32, 1) 100%);*/
  /*height: 400px;*/
  position: relative;
  overflow: hidden;
  padding-top: 3rem;
  .fix-animation {
    height: 408px;
    display: block;
    overflow: hidden;
    @media (max-width: 1080px) {
      height: auto;
    }
  }
  iframe {
    @media (max-width: 1080px) {
      height: 400px;
    }
  }
  .hold-btns {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    z-index: 22;
    .toggle-btn {
      letter-spacing: 1px;
      margin-right: 1rem;
      background: #5d5d5d;
      color: #fff;
      border-radius: 0.25rem;
      padding: 0.5rem;
      border: none;
      width: 135px;
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      transition: all linear 0.3s;
      &:last-of-type {
        margin-right: 0;
      }
    }
    .btn-active {
      background: #4c892d;
    }
    @media (max-width: 1080px) {
      position: relative;
      transform: translate(0) rotate(0);
      top: 0;
      left: 0;
      margin-bottom: 3rem;
    }
  }

  .img-logo-footer {
    position: absolute;
    left: -18%;
    top: -13%;
    height: 670px;
  }

  .siteMap-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
  }

  .site-map {
    background: #1b1a1a;
    padding: 3rem;
    height: 100%;
    .hold-links {
      border-bottom: 1px solid #4c892d;
      padding-bottom: 2rem;
    }
    @media (max-width: 1080px) {
      padding: 2rem;
    }
  }

  h5 {
    color: #ffc258;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .active-link,
  .exact-active-link {
    all: unset !important;
    color: #fff !important;
  }

  .map {
    @media screen and (max-width: $small) {
      margin-bottom: 20px;
    }
  }

  .links {
    li {
      margin-bottom: 0.75rem;
      font-weight: bold;
      font-size: 0.78rem;
      text-transform: capitalize;
      a {
        color: #fff;
        @media (max-width: 1080px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .contacts {
    li {
      color: #fff;
      margin-bottom: 1.3rem;
      span {
        background-color: #5f945c;
        border-radius: 50%;
        width: 35px;
        height: 35px;
        display: inline-block;
        text-align: center;
        line-height: 35px;
        i {
          font-size: 1.3rem;
          position: relative;
          top: 2px;
          @media (max-width: 1080px) {
            font-size: 1rem;
          }
        }
      }
      a {
        color: #fff;
        @media (max-width: 1080px) {
          font-size: 0.8rem;
        }
      }
    }
  }

  .form-control {
    background-color: #5f945c;
    color: #fff;
    border: none;
    border-radius: 2px;
    font-size: 0.9rem;
    width: 100%;
    height: 45px;

    &::placeholder {
      color: #fff;
      opacity: 0.8;
    }
  }

  .subscribe {
    h4 {
      color: #fff;
      text-transform: capitalize;
      font-size: 0.9rem;
      margin: 1rem 0;
    }
  }

  .newsletter {
    width: 65%;
    position: relative;
    @media screen and (max-width: $small) {
      margin-top: 15px;
    }
    @media (max-width: 1080px) {
      width: 100%;
    }
    .newsletter-btn {
      position: absolute;
      right: 5px;
      top: 3px;
      background-color: #205b02;
      color: #fff;
      border-radius: 3px;
      padding: 0px 5px;
      font-size: 25px;
    }

    span:lang(ar) {
      left: 39px;
      right: auto;
    }
  }

  .copyright {
    color: #fff;
    font-size: 0.95rem;
    border-top: 2px solid #326225;
    padding-top: 20px;
    @media screen and (max-width: $small) {
      font-size: 0.8rem;
      text-align: center;
    }
  }
}
.footer-bottom {
  background: #2d2d2d;
  margin-top: -2rem;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-social {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0.7rem;
    }
    @media screen and (max-width: $small) {
      margin: auto;
    }
    a {
      color: #fff;
      font-size: 1.2rem;
      transition: all linear 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
footer:lang(ar) {
  text-align: right;
  .hold-btns {
    .toggle-btn {
      margin-right: 0;
      margin-left: 1rem;
      &:last-of-type {
        margin-left: 0;
      }
    }
    @media (max-width: 1080px) {
      right: 0;
    }
  }
  .newsletter {
    @media screen and (max-width: $small) {
      margin-top: 15px;
    }
    @media (max-width: 1080px) {
      width: 100%;
    }
    .newsletter-btn {
      right: auto;
      left: 5px;
    }
    span:lang(ar) {
      left: auto;
      right: 39px;
    }
  }
}

.newsletter-btn:lang(ar) {
  left: 39px;
  right: auto !important;
}
</style>
