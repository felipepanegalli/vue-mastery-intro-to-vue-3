const app = Vue.createApp({
  data: function () {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inventory: 30,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'blue' },
        { id: 2235, color: 'green' },
      ],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
