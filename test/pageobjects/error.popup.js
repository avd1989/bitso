const Page = require('./page');
const WalletPage = require('./wallet.page');

class ErrorPopUp extends Page {

    get errorMsg() {
        return $('h3*=Oops! Something went wrong');
    }

    get xButton(){
        return $('span[data-testid="modal-close"]');
    }

    async isErrorMsgDisplayed(){
        return await this.errorMsg.waitForDisplayed({timeout:3000});
    }

    async close(){
        if(await this.xButton.waitForClickable({timeout: 3000}))
           await this.xButton.click();
        else
            throw new Error("Couldn't click on X button of the pop up");
        await browser.keys('\uE00C');
        return WalletPage;
    }
}

module.exports = new ErrorPopUp();