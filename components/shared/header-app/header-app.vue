<!-- Please remove this file from your project -->
<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-3 d-none d-sm-block">
          <NuxtLink to="/" class="hold-logo"
            ><img src="~assets/images/logo.png" alt="logo"
          /></NuxtLink>
        </div>
        <div class="col-md-2 div3"></div>
        <div class="col-lg-7 col-12 mt-1">
          <div class="right my-1">
            <span class="dark" role="button">
              <i class="fas fa-sun"></i> Dark Mode</span
            >
            <span class="hotline" role="button"
              ><a href="#"
                ><i class="fas fa-phone-alt"></i>
                <i class="fas fa-phone"></i>
                HotLine
              </a></span
            >
            <span class="zoom" role="button">A-</span>
            <span class="zoom zoom-active" role="button">A</span>
            <span class="zoom" role="button">A+</span>
            <span class="lang" role="button">
              <a href="#">
                <img src="~assets/images/en-flag.png" />
              </a>
            </span>
            <span class="login d-none">
              <i class="fas fa-sign-in-alt"></i>
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./header-app.js"></script>
<style lang="scss" scoped>
  @import "assets/styles/scss/variables/variable.scss";
  //@import "static/config.json";
  $small: 768px;
  .zoom-active {
    background-color: rgb(132, 132, 132);
    color: $blackColor;
  }
  span {
    padding: 0px 8px;
    @media screen and (max-width: $small) {
      padding: 0px;
    }
  }
  .dark {
    color: #737373;
    font-size: 17px;
    @media screen and (max-width: $small) {
      display: none;
    }
    i {
      color: #000;
      font-size: 22px;
    }
  }
  .hotline {
    color: $blackColor;
    font-weight: bold;
    font-size: 25px;
    @media screen and (max-width: $small) {
      font-size: 17px;
    }
    a {
      color: $blackColor;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .zoom {
    width: 30px;
    height: 30px;
    color: #737373;
    border: 1px solid #737373;
    font-weight: bold;
    display: inline-block;
    font-size: 16px;
    padding: 0px 3px;
    text-align: center;
    line-height: 30px;
    @media screen and (max-width: $small) {
      display: none;
    }
  }
  .lang {
    position: relative;
    top: -2px;
    @media screen and (max-width: $small) {
      top: 0px;
    }
    img {
      border-radius: 3px;
      @media screen and (max-width: $small) {
        width: 80%;
      }
    }
  }
  .right {
    text-align: right;
    @media screen and (max-width: $small) {
      display: flex;
      justify-content: space-between;
      margin: 5px 0px !important;
    }
  }
  .hold-logo {
    display: block;
    height: 100%;
    margin: 0.5rem 0;
    @media screen and (max-width: 768px) {
      display: none;
    }

    img {
      height: 50px;
      width: 100%;
      object-fit: contain;
      display: block;
    }
  }
  .right:lang(ar) {
    text-align: left;
  }
  .active-link,
  .exact-active-link {
    background-color: transparent !important;
  }
  .div3 {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
</style>

