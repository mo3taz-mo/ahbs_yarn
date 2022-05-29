export default {
  name: 'headerApp',
  data(){
    return {
      siteName: (process.client) ?  JSON.parse(localStorage.getItem('siteName')): '',
      allSites: (process.client) ? JSON.parse(localStorage.getItem('allSites')): {},
    }
  },
}
