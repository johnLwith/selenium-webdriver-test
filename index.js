/// <reference path="./typings/node.d.ts" />
/// <reference path="./typings/selenium-webdriver.d.ts" />
var seleniumWebdriver = require('selenium-webdriver');
var By = seleniumWebdriver.By;
var until = seleniumWebdriver.until;
var driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.get('http://www.bing.com');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('go')).click();
driver.wait(until.titleIs('webdriver - 必应'), 1000);
driver.quit();
console.log(10);
