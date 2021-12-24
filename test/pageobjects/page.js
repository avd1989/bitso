const timeout = 5000;
const LoginPage = require('./login.page');

module.exports = class Page {   
    
    open(path) {
        browser.setTimeouts(timeout, timeout, timeout)
        browser.maximizeWindow()
        return browser.url(path)
    }

    async logout(){
        if(await $('div=Profile').waitForClickable({timeout: 3000}))
            await $('div=Profile').click();
        if(await $('li[href="/logout"]').waitForClickable({timeout: 3000}))    
            await $('li[href="/logout"]').click();
    }
}
