import { expect } from '@playwright/test';

class LoginPage{
    constructor(page){
        this.page = page;

        this.usernameInput = page.locator('[data-test="username"]');

        this.passwordInput = page.locator('[data-test="password"]');

        this.loginButton = page.locator('[data-test="login-button"]');

        this.erroMessage = page.locator('[data-test="error"]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userName, password){
        await this.usernameInput.fill(userName);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }

    async verifyLoginSuccess() {

        await expect(this.page)
            .toHaveURL(/inventory.html/);
    }

    async verifyErrorMessage(message) {

        await expect(this.erroMessage)
            .toContainText(message);                     
    }
}

export default LoginPage;