const Page = require('./page')
let DepositPopUp = require('./deposit.popup');

class WalletPage extends Page {

    get buttonDeposit(){
        return $('span[class="moon-arrow_deposit"]');
    }

    async clickOnCurrency(currency) {
        if($('label[for="' + currency + '"]').waitForClickable({timeout: 3000}))
            await $('label[for="' + currency + '"]').click();
        else
            throw new Error(`Couldn't click on ${currency} label`);
    }

    async clickOnDepositButton(){
        if(this.buttonDeposit.waitForClickable({timeout: 3000}))
             this.buttonDeposit.click();
        return DepositPopUp;
    }

}

module.exports = new WalletPage();
