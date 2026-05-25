import { LoginModel } from '../model/login.model'
import { LoginPage } from "../pages/login.page";

export class DashboardBehaviour {
    private model: LoginModel
    private pageLogin: LoginPage

    constructor(model: LoginModel, page: LoginPage) {
        this.model = model;
        this.pageLogin = page;
    }

    async validateDashboardPage() {

    }
}