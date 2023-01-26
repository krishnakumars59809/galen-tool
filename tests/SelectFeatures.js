const setQuantity = readFile("config.json");

this.SelectFeatures = $page("Select features ", {
  quantity: "input[name='qty']",
  size: "label[for='0f0-input']",

  addButton: "button[id='addToBag']",
  selectfeaturesAs: function () {
    this.quantity.clear();
    this.quantity.typeText(JSON.parse(setQuantity).quantity);
    this.size.click();
  },
  addcart: function () {
    this.addButton.click();
  },
});
