var webdriver1 = require('selenium-webdriver'), By = webdriver1.By, until = webdriver1.until;
var driver = new webdriver1.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://www.bing.com');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('go')).click();
driver.wait(until.titleIs('webdriver - 必应'), 1000);
driver.quit();
console.log('end');
