load("pages/LoginPage.js");




const capabilities1 = {
  desiredCapabilities: {
    os: "Windows",
    osVersion: "11",
    browserVersion: "103.0",
    buildName: "galen-multiple-build",
    sessionName: "test 1",
  },
  browser: "chrome",
};
const capabilities2 = {
  desiredCapabilities: {
    os: "Windows",
    osVersion: "10",
    browserVersion: "102.0",
    buildName: "galen-multiple-build",
    sessionName: "test 2",
  },
  browser: "firefox",
};
const capabilities3 = {
  desiredCapabilities: {
    os: "OS X",
    osVersion: "Big Sur",
    browserVersion: "14.1",
    buildName: "galen-multiple-build",
    sessionName: "test 3",
  },
  browser: "safari",
};

const devices = {
  mobile: {
    deviceName: "mobile",
    size: "400x700",
  },
  tablet: {
    deviceName: "tablet",
    size: "600x800",
  },
  desktop: {
    deviceName: "desktop",
    size: "1024x768",
  },
};

const runTest = (capability) => {
  forAll(devices, function (device) {
    const testName = "Test on " + capability.browser + " " + device.deviceName;
  
    test(testName, function () {
      try {
      const driver = createGridDriver(
        "http://krishnakumarsiva_iUIv4K:yGfngNVc55BXYLxNsBtq@hub-cloud.browserstack.com/wd/hub", //Selenium Grid HUB url
        capability
      );
      driver.get("http://testphp.vulnweb.com/login.php");
      resize(driver, device.size);
      checkLayout(driver, "specs/demo.gspec", [device.deviceName]);
      const Login = new LoginPage(driver);
      
        if (device.deviceName === "tablet") {
          Login.loginWrong("test", "test");
        } else {
          Login.loginAs("test", "test");
        }
        driver.quit();
      } catch (error) {
        this.report.error(error);
        driver.quit();
      }
    });
  });
};

runTest(capabilities1);
runTest(capabilities2);
runTest(capabilities3);
