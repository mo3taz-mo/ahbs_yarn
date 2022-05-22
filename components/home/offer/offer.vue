<template>
  <div class="offer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-5 col-12">
          <div class="description-offer">
            <div>
              <h2 class="text-capitalize my-2 our-offer-heading">
                our Offer
              </h2>
              <hr />
              <p>description</p>
              <div class="hold-buttons">
                <!-- <span
                  role="button"
                  class="btn-main btn-green"
                  @click="showModal(bannerOffer)"
                  >{{ $t("menu.booknow") }}</span
                >
                <nuxt-link :to="localePath('/offers#offers')" class="btn-main"
                  ><span></span>{{ $t("viewmore") }}</nuxt-link
                > -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6 d-none">
          <div class="percentage-offer">
            <div>
              <h2 class="offer-header">offer</h2>
              <!-- <div class="hold-percentage">
                <span class="percentage"
                  >{{
                    (bannerOffer.price / bannerOffer.discount_price) * 100
                  }}%</span
                >
                <img src="@/assets/images/dental.svg" alt="dental" />
              </div> -->
            </div>
          </div>
        </div>
        <div class="px-0 col-lg-6 col-6">
          <!-- <div class="offer-image">
            <img
              :src="bannerOffer.image"
              :alt="bannerOffer.image_alt"
              :title="bannerOffer.image_title"
              class="img-fluid"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./offer.js"></script>

<style scoped lang="scss">
.offer-image {
  img {
    width: 100%;
    object-fit: cover;
    height: 400px;
    @media (max-width: 768px) {
      display: none;
    }
  }
}
.description-offer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    line-height: 2;
    width: 75%;
    @media (max-width: 1080px) {
      width: 100%;
    }
  }
  @media (max-width: 1080px) {
    display: block;
    text-align: center;
    padding: 1rem;
  }
}
.our-offer-heading {
  font-weight: bolder;
}
hr {
  width: 34.9px;
  height: 2px;
  background-color: #4c892d;
  margin-left: 0;
}
.percentage-offer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .offer-header,
  .percentage {
    color: #94001b;
    text-transform: uppercase;
    font-size: 5rem;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .hold-percentage {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      @media (max-width: 992px) {
        height: 70px;
        object-fit: contain;
      }
    }
  }
}
html:lang(ar) {
  hr {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
