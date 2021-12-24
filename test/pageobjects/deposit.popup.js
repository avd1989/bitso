const Page = require('./page')
class DepositPopUp extends Page {
    
    get bitsoTransfer(){
        return $('h4*=Bitso Transfer')
    }

    async clickOnBitsoTransfer() {
        if(await this.bitsoTransfer.waitForClickable({timeout:3000}))
            await this.bitsoTransfer.click();
        else   
            console.log('COULD NOT CLICK ON BITSO TRANSFER')
    }

}

module.exports = new DepositPopUp();