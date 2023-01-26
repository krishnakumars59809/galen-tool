
this.Close = $page("closed ", {
  closed: "a[id='closeButton']",
  closeCookies: "div[id='onetrust-close-btn-container']",

  // color: "label[for='0c0-input']",
  closeAs: function () {
    this.closed.click();
    this.closeCookies.click();
  },
});
