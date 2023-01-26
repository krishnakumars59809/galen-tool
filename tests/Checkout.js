this.Checkout = $page("Checkout ", {
  checkout: "button[routerlink='/cart/cart']",
  checkoutAs: function () {
    this.checkout.click();
  },
});
