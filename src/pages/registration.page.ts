import { Locator, Page } from "@playwright/test";

export class RegistrationPage {
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly phoneNumberInput: Locator;
    private readonly occupationSelect: Locator;
    private readonly genderMaleRadioButtons: Locator;
    private readonly genderFemaleRadioButtons: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    private readonly ageRadioButton: Locator;
    private readonly registerButton: Locator;
    private readonly loginLink: Locator;
    private readonly registerLink: Locator;

    private readonly registerSuccess: Locator;

    constructor(page: Page) {
        this.firstNameInput = page.locator('input[id="firstName"]');
        this.lastNameInput = page.locator('input[id="lastName"]');
        this.emailInput = page.locator('input[id="userEmail"]');
        this.phoneNumberInput = page.locator('input[id="userMobile"]');
        this.occupationSelect = page.locator('select[class*="custom-select"]');
        this.genderMaleRadioButtons = page.locator('input[value*="Male"]');
        this.genderFemaleRadioButtons = page.locator('input[value*="Female"]');
        this.passwordInput = page.locator('input[id="userPassword"]');
        this.confirmPasswordInput = page.locator('input[id="confirmPassword"]');
        this.ageRadioButton = page.locator('input[type*="checkbox"]');
        this.registerButton = page.locator('input[type*="submit"]');
        this.loginLink = page.locator('a[class*="text-reset"]');
        this.registerLink = page.locator('a[href*="#/auth/register"]');
        this.registerSuccess = page.locator('h1[class*="headcolor"]');
    }

    getFirstNameInput(): Locator { return this.firstNameInput }
    getLastNameInput(): Locator { return this.lastNameInput }
    getEmailInput(): Locator { return this.emailInput }
    getPhoneNumberInput(): Locator { return this.phoneNumberInput }
    getOccupationSelect(): Locator { return this.occupationSelect }
    getGenderMaleRadioButton(): Locator { return this.genderMaleRadioButtons }
    getGenderFemaleRadioButton(): Locator { return this.genderFemaleRadioButtons }
    getPassword(): Locator { return this.passwordInput }
    getConfirmPasswordInput(): Locator { return this.confirmPasswordInput }
    getAgeRadioButton(): Locator { return this.ageRadioButton }
    getRegisterButton(): Locator { return this.registerButton }
    getLoginLink(): Locator { return this.loginLink }
    getRegisterLink(): Locator { return this.registerLink }
    getRegisterSuccess(): Locator { return this.registerSuccess }
}