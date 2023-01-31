// this.LoginPage = $page("Login page", {
//   email: "input[name='uname']",
//   password: "input[name='pass']",
//   submitButton: "input[value='login']",
//   loginAs: (userName, password) => {
//     this.email.typeText(userName);
//     this.password.typeText(password);
//     this.submitButton.click();
//   },
// });

this.LoginPage = function (driver) {
  GalenPages.extendPage(this, driver, "Login page", {
    email: "input[name='uname']",
    email2: "input[name='unamee']",
    password: "input[name='pass']",
    submitButton: "input[value='login']",

    loginAs: function (userName, password) {
      this.email.typeText(userName);
      this.password.typeText(password);
      this.submitButton.click();
    },
    loginWrong: function (userName, password) {
      this.email2.typeText(userName);
      this.password.typeText(password);
      this.submitButton.click();
    },
  });
};
