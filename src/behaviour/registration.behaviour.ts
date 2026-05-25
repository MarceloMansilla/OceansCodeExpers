import { expect } from '@playwright/test';
import { RegistrationModel } from '../model/registration.model'
import { RegistrationPage } from "../pages/registration.page";

export class RegistrationBehaviour {
    private model: RegistrationModel
    private page: RegistrationPage

    constructor(model: RegistrationModel, page: RegistrationPage) {
        this.model = model;
        this.page = page;
    }

    async fillRegistrationForm() {
        await this.page.getFirstNameInput().fill(this.model.getFirstName())
        await this.page.getLastNameInput().fill(this.model.getLastName())
        await this.page.getEmailInput().fill(this.model.getEmail())
        await this.page.getPhoneNumberInput().fill(this.model.getPhoneNumber())
        await this.page.getOccupationSelect().selectOption(this.model.getOccupation())
        if (this.model.getGender() === 'Male') {
            await this.page.getGenderMaleRadioButton().click()
        } else {
            await this.page.getGenderFemaleRadioButton().click()
        }
        await this.page.getPassword().fill(this.model.getPassword())
        await this.page.getConfirmPasswordInput().fill(this.model.getconfirmPassword())
        await this.page.getAgeRadioButton().click()

    }

    async clickOnRegisterButton() { await this.page.getRegisterButton().click() }
    async clickOnRegisterHereLink() { await this.page.getRegisterLink().click() }
    async validateRegistration(data: string) { await expect(this.page.getRegisterSuccess()).toHaveText(data);
   }
}