// Load CSS Variables for whole web app.
if(process.client) {
  if(JSON.parse(localStorage.getItem('siteName')) == "AKW") {
    import('~/assets/styles/css/variables/akw.css');
  } else if (JSON.parse(localStorage.getItem('siteName')) == "ABC") {
    import('~/assets/styles/css/variables/abc.css');
  } else if (JSON.parse(localStorage.getItem('siteName')) == "ADC") {
    import('~/assets/styles/css/variables/adc.css');
  } else {
    ''
  }
}


// if (window.location.href == 'http://specific-page.com') {
//   document.querySelectorAll('#myDiv .existingClass').forEach(function(ele, idx) {
//     ele.classList.add('newClass');
//   });
// };

import axios from 'axios';
import Offer from '~/components/home/offer/offer.vue'
import carousel from '~/components/home/carousel/carousel.vue'
export default {
  name: 'IndexPage',
  components: {
    Offer,
    carousel
  },
  data(){
    return {
      siteName: (process.client) ?  JSON.parse(localStorage.getItem('siteName')): '',
      video: (process.client) ? JSON.parse(localStorage.getItem('siteVideo')): '',
    }
  },
  methods: {
    setData() {
      this.$axios.get('/config.json').then(res => {
        localStorage.setItem('siteName', JSON.stringify(res.data.SiteName));
        localStorage.setItem('siteVideo', JSON.stringify(res.data.SiteVideo));
        localStorage.setItem('siteApi', JSON.stringify(res.data.SiteAPI));
        localStorage.setItem('allSites', JSON.stringify(res.data.AllSites));
        localStorage.setItem('siteLang', JSON.stringify(res.data.SiteLang));
      });
    },
    checkLinks() {
      let sites = JSON.parse(localStorage.getItem('allSites'));
      if(sites == undefined || sites == '') {
        ''
      } else {
        for (let i = 0; i < sites.length; i++) {
          if(window.location.host == sites[i].baseURL) {
            document.getElementById(sites[i].name).classList.add("group-active-link");
          } else {
            document.getElementById(sites[i].name).classList.remove("group-active-link");
          }
        }
      }

    }
  },
  created() {
    this.setData();
  },
  mounted() {
    this.checkLinks();
  },
}
