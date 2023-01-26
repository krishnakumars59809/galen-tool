
const searchWord = readFile("config.json");

this.HomePage = $page("Home Page", {
  search: "input[name='Search']",
  searchButton: "button[id='searchBtn']",

  searchAs: function () {
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    this.searchButton.click();
  },
});
