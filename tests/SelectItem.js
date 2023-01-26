this.SelectItem = $page("Select Item ", {
  selectLink: "a[aria-label='Majestic International Long-Sleeve V-Neck T-Shirt']",
  // selectLink: "a[aria-label='Brooks Brothers Non-Iron Stretch Solid Dress Shirt']",
  itemSelectAs: function () {
    this.selectLink.click();
  },
});
