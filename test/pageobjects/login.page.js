

const Page = require('./page');
let WalletPage  = require('./wallet.page');

class LoginPage extends Page {

    get inputUsername() {
        return $('input[id="client_id"]');
    }

    get inputPassword() {
        return $('input[id="password"]');
    }

    get btnLogin() {
        return $('button[type="submit"]');
    }

    async openLoginPage(){
        await super.open('https://stage.bitso.com/login');
        return this;
    }

    async login (username, password) {
        if(await $('button[class="styles__StyledButton-sc-1mfj3x4-1 RYPaC styles__BannerButton-bsbe12-2 dQUyLo"]').isDisplayed())
            await $('button[class="styles__StyledButton-sc-1mfj3x4-1 RYPaC styles__BannerButton-bsbe12-2 dQUyLo"]').click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
        return WalletPage;
    }
}

module.exports = new LoginPage();
