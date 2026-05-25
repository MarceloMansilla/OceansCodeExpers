import { Locator, Page } from "@playwright/test";

export class DashboardPage {
    private readonly header_side_bar: Locator

    constructor(page: Page) { this.header_side_bar = page.locator('section[id*="sidebar"] > p'); }
    
    getHeaderSideBar(): Locator { return this.header_side_bar }
}