
// load("LoginPage.js");
// load("LogoutPage.js");

// load("HomePage.js");
// load("SearchResultPage.js");
// load("SelectPage.js");
// load("SortSelectPage.js");
// load("SelectItem.js");
load("Close.js");
load("SelectFeatures.js");
load("Checkout.js");
load("ProceedCheckout.js");


// import Search from"./search.json" assert {type:'json'};

// console.log("SearchKeyWord",SearchKeyWord)

// load("AddToCart.js");

// forAll(
//   [
//     ["mobile", "400x700"],
//     ["tablet", "600x800"],
//     ["desktop", "1024x768"],
//   ],
//   (deviceName, size) => {
//     test("Home page on " + deviceName + " device", function () {
//       const driver = createDriver("http://DXL.com ","1024x768");
//       const loginPage=new LoginPage(driver).waitForIt( {time: "30s"});
//       loginPage.loginAs("t-shirt");
//       //  checkLayout(driver, "specs/home.gspec", [deviceName]);
//       // const logoutpage=new LogoutPage(driver);
//       // logoutpage.logoutAs();
//       // driver.quit();
//     });
//   }
// );
// const driver=createDriver("http://testphp.vulnweb.com/login.php","1024x768");
// const loginPage=new LoginPage(driver).waitForIt();
// loginPage.loginAs("test","test");
// test("Home page", function() {
//    driver = createDriver("https://www.radiustheme.com/demo/wordpress/themes/homlisti/home-5",
//                             "1024x768");
//   checkLayout(driver, "specs/home.gspec", ["all", "desktop"]);
// });
test("Home page on " + "desktop" + " device", function () {
  const driver = createDriver("https://www.dxl.com/undershirts/majestic-international-long-sleeve-v-neck-t-shirt-/cat140154/B9629 ", "1024x768");
  // const homePage = new HomePage(driver).waitForIt();
  // homePage.searchAs();
  // const searchResultPage = new SearchResultPage(driver).waitForIt();
  // searchResultPage.filterAs();
  // const selectPage = new SelectPage(driver).waitForIt();
  // selectPage.sizeSelectAs();
  // const sortselectPage = new SortSelectPage(driver).waitForIt();
  // sortselectPage.sortSelectAs();
  // const selectItem = new SelectItem(driver).waitForIt();
  // selectItem.itemSelectAs();
  // // checkLayout(driver, "specs/home.gspec", ["all", "desktop"])

 
  const Features = new SelectFeatures(driver).waitForIt();
  Features.selectfeaturesAs();
  
  const close = new Close(driver).waitForIt();
  close.closeAs();
  const addtocart = new SelectFeatures(driver).waitForIt();
  addtocart.addcart();
  const checkouts = new Checkout(driver).waitForIt();
  checkouts.checkoutAs();
  checkLayout(driver, "specs/home.gspec", ["all", "desktop"])
  const proceedCheckout = new ProceedCheckout(driver).waitForIt();
  proceedCheckout.proceedAs();
  
  // const Addcart = new AddToCart(driver).waitForIt();
  // Addcart.addCardAs();
  // checkLayout(driver, "specs/home.gspec", ["all", "desktop"])
  // driver.quit();SelectFeatures
});
