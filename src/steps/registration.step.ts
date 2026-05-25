import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();
import { RegistrationBehaviour } from "../behaviour/registration.behaviour";
import { RegistrationModel } from "../model/registration.model";
import { RegistrationPage } from "../pages/registration.page";

var registration_model: RegistrationModel;
var registration_page: RegistrationPage;
var registration_behaviour: RegistrationBehaviour;

Given("the user click on Register here", async ({ page }) => {
    registration_model = new RegistrationModel("Male", "Doctor","")
    registration_page = new RegistrationPage(page)
    registration_behaviour = new RegistrationBehaviour(registration_model, registration_page)
    await registration_behaviour.clickOnRegisterHereLink() });

When("the user enters all information with gender {string} and occupation {string} and phone {string}", async ({ page }, gender: string, occupation: string, phone: string) => {
    registration_model = new RegistrationModel(gender, occupation, phone)
    registration_page = new RegistrationPage(page)
    registration_behaviour = new RegistrationBehaviour(registration_model, registration_page)
    await registration_behaviour.fillRegistrationForm()
});
When("the user clicks on register button", async ({ page }) => {await registration_behaviour.clickOnRegisterButton()});
Then("the user should be registered", async ({ page }) => { await registration_behaviour.validateRegistration("Account Created Successfully") });

