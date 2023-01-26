
this.ProceedCheckout = $page("ProceedCheckout ", {
    proceed: "button[name='Proceed to checkout']",
    proceedAs: function () {
        this.proceed.click();
      },
  });
  