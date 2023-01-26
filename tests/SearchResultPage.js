this.SearchResultPage = $page("Search Result Page", {
  close: "a[id='closeButton']",
  size: "mat-expansion-panel-header[id='mat-expansion-panel-header-1']",

  filterAs: function () {
    this.close.click();
    this.size.click();
  },
});
