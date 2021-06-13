const {Builder, By, Key, until} = require("selenium-webdriver");
const fs = require("fs");
const path = require("path");

(async function(){
    try{
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize()
        await driver.get("http://google.com");
        let url = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        console.log(url, title)
        await driver.findElement(By.name("q")).sendKeys("Selenium Web Automation", Key.RETURN);
        let encodedString = await driver.takeScreenshot()
        fs.writeFileSync(path.join(__dirname, "abc.png"), encodedString, {encoding: "base64"})
    
    }catch(e){
        console.log(e.message);
    }
})()