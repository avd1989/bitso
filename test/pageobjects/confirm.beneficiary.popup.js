const Page = require('./page')

class ConfirmBeneficiaryPopUp extends Page{

    get transactionPin(){
        return $('input[id="pin"]');
    }

    get confirmButton(){
        return $('button*=Confirm');
    }

    get wrongPinMsg(){
        return $('div*=Incorrect PIN');
    }

    async enterTransactionPin(pin){
        if(await this.transactionPin.waitForClickable({timeout:3000})){
            await this.transactionPin.click();
            await this.transactionPin.setValue(pin);
        }
    }

    async clickOnConfirmButton(){
        if(await this.confirmButton.waitForClickable({timeout:3000}))
            await this.confirmButton.click();
    }
}

module.exports = new ConfirmBeneficiaryPopUp();