const Page = require('./page')
const ConfirmBeneficiaryPopUp = require('./confirm.beneficiary.popup')

class AddBeneficiariesPage extends Page {
    get name(){
        return $('input[id="first_name"]');
    }

    get firstLastName(){
        return $('input[id="last_name"]');
    }
    
    get secondLastName(){
    return $('input[id="second_last_name"]');
    }

    get kinship(){
        return $('input[id="relationship"]');
    }

    get benefitPercentage(){
        return $('input[id="percentage"]');
    }

    get addButton(){
        return $('button[data-testid="add-beneficiary-button"]');
    }

    async enterName(name){
        await this.name.waitForClickable({timeout: 3000});
        await this.name.setValue(name);
    }

    async enterfirstLastName(firstLastName){
        await this.firstLastName.waitForClickable({timeout: 3000});
        await this.firstLastName.setValue(firstLastName);
    }

    async enterSecondLastName(secondLastName){
        await this.secondLastName.waitForClickable({timeout: 3000});
        await this.secondLastName.setValue(secondLastName);
    }

    async enterBirthDate(day, month, year){
        await $('input[id="day"]').click();
        await $('input[id="day"]').setValue(day);
        browser.keys("\uE007"); 
        await $('input[id="month"]').click();
        await $('input[id="month"]').setValue(month);
        browser.keys("\uE007"); 
        await $('input[id="year"]').click();
        await $('input[id="year"]').setValue(year);
        browser.keys("\uE007"); 
    }

    async enterKinship(kinship){
        await $('label[for="relationship"]').click();
        switch (kinship) {
            case "Relative":
                await browser.keys("\uE015");
                break;
            case "Acquaintance":
                await browser.keys("\uE015");
                await browser.keys("\uE015");
                break;
            case "Friendship":
                await browser.keys("\uE015");
                await browser.keys("\uE015");
                await browser.keys("\uE015");
                break;
            default:
                throw new Error('No valid value passed through parameters');
        }
        await browser.pause(5000);
        await browser.keys("\uE007"); 
    }

    async enterBenefitPercentage(benefitPercentage){
        await this.benefitPercentage.scrollIntoView(true);
        await this.benefitPercentage.waitForClickable({timeout: 3000});
        await this.benefitPercentage.setValue(benefitPercentage);
    }

    async clickOnAddButton(){
        await this.addButton.scrollIntoView(true);
        await this.addButton.waitForClickable({timeout: 3000});
        await this.addButton.click();
        return ConfirmBeneficiaryPopUp;
    }
}

module.exports = new AddBeneficiariesPage();