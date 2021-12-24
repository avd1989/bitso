const LoginPage = require('../pageobjects/login.page');
const LoginData = require('../data/login.data');
const DepositData = require('../data/deposit.data');
const ErrorPopUp = require('../pageobjects/error.popup');
const AddBeneficiariesPage = require('../pageobjects/add.beneficiaries.page');

describe('Bitso deposits', () => {
    DepositData.currencies.forEach(function(currency){
    it('Should log in, go to wallet, try to do a BTC deposit and ensure error msg is displayed', async () => {
        await LoginPage.openLoginPage();
        var walletPage = await LoginPage.login(LoginData.username, LoginData.password);
        await walletPage.clickOnCurrency(currency);
        let depositPopUp = await walletPage.clickOnDepositButton();
        await depositPopUp.clickOnBitsoTransfer();
        expect(await ErrorPopUp.isErrorMsgDisplayed()).toBeTruthy();
        walletPage = await ErrorPopUp.close();
        await browser.pause(5000);
        await walletPage.logout();
    });
 });
});


