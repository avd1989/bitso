const LoginPage = require('../pageobjects/login.page');
const LoginData = require('../data/login.data');
const AddBeneficiariesPage = require('../pageobjects/add.beneficiaries.page');

describe('Bitso beneficiaries', () => {
    it('Should log in, go to wallet, try to do a BTC deposit and ensure error msg is displayed', async () => {
        await LoginPage.openLoginPage();
        await LoginPage.login(LoginData.username,LoginData.password);
        await AddBeneficiariesPage.open('https://stage.bitso.com/r/user/beneficiaries/add');
        await AddBeneficiariesPage.enterName("Juan");
        await AddBeneficiariesPage.enterfirstLastName("Piedras");
        await AddBeneficiariesPage.enterSecondLastName("Quiros");
        await AddBeneficiariesPage.enterBirthDate("11", "May", "1988");
        await AddBeneficiariesPage.enterKinship("Friendship");
        await AddBeneficiariesPage.enterBenefitPercentage("50");
        let confirmBeneficiaryPopUp = await AddBeneficiariesPage.clickOnAddButton();
        await confirmBeneficiaryPopUp.enterTransactionPin('wrongPin');
        await confirmBeneficiaryPopUp.clickOnConfirmButton();
        await expect(confirmBeneficiaryPopUp.wrongPinMsg).toBeDisplayed();
    });
});
