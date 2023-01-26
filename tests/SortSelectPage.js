this.SortSelectPage = $page("Sort Select Page", {
  close: "div[id='onetrust-close-btn-container']",
  sortSelect:"mat-option[id='mat-option-10']",
  sortSelectAs: function () {
    this.close.click();
    this.sortSelect.click();
  },
});
