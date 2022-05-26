
import axios from "axios";
let link = process.client ? JSON.parse(localStorage.getItem("siteApi")) : "";
export default {
  name: "offer",
  data() {
    return {
      posts: [],
    };
  },
  components: {},
  methods: {},
  created() {
    this.$axios.get(link).then((res) => {
      this.posts = res.data;
      console.table(res.data);
    });
  },
};
