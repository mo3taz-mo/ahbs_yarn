import('~/components/shared/nav-menu/nav-menu.scss');
export default {
  name: "nav-menu",
  data() {
    return {
      siteName: (process.client) ?  JSON.parse(localStorage.getItem('siteName')): '',
    };
  },
};
