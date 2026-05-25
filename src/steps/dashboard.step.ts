import { createBdd } from "playwright-bdd";
import { expect } from '@playwright/test';
const { Then } = createBdd();

Then("the user should see the homepage", async ({ page }) => { await expect(page).toHaveURL("/client/#/dashboard/dash"); });
