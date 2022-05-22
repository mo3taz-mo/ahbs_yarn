<template>
  <div>
    <!-- <videoApp :Video="Video"/> -->
    <video class="video-ctrl" controls autoplay="true" muted loop="loop" ref="video">
      <source :src="video">
    </video>
    <offer />
  </div>
</template>

<script>
import axios from 'axios';

import Offer from '~/components/home/offer/offer.vue'
// import videoApp from '~/components/shared/video-app/video-app.vue'
export default {
  name: 'IndexPage',
  components: {
    Offer
    // videoApp
  },
  data(){
    return {
      siteName: '',
      //video: ,
      video: '',//this.siteName === 'WebSite1' ? 'https://www.w3schools.com/html/movie.mp4' : 'https://admin.andalusia-dentalcenters.com/storage/settings/November2020/2zamKjku9bAQTSLxdkLs.mov'

    }
  },
  mounted() {
    this.$axios.get('/config.json').then(res => {
      debugger
      this.siteName = res.data.SiteName;
      this.video = (this.siteName === 'WebSite1') ? 'https://www.w3schools.com/html/movie.mp4' : 'https://admin.andalusia-dentalcenters.com/storage/settings/November2020/2zamKjku9bAQTSLxdkLs.mov'
    });
  }
}
</script>

<style lang="scss" scoped>
video.video-ctrl {
    width: 100%;
}
.video{
  position: relative;
  height: 100vh;
  overflow: hidden;
  .background-video{
    background: linear-gradient(to right, rgba(67, 66, 63, 0.45), rgba(67, 66, 63, 0.45));
    position: absolute;
    background-size: 105% 100%;
    z-index: 2;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1080px) {
      background-size: cover;
    }
    .main-header{
      color: #fff;
      text-transform: capitalize;
      width: 75%;
      margin: 0 auto;
      text-align: center;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .video-icon{
      display: block;
      margin: 1rem auto;
      width: 40px;
      height: 40px;
      object-fit: contain;
      border-radius: 50%;
      cursor: pointer;
      transition: all ease-in-out .3s;
      &:hover{
        box-shadow:0 0 6px 3px #fff;
      }
    }
  }
  .video-ctrl {
    outline: none;
    width: 100% !important;
    height: 100%;
    object-fit: cover;
  }
}
</style>
