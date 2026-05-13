class LoginPage{
    constructor(page){
        this.page = page;

        this.usernameInput = page.locator('#user-name');

        this.passwordInput = page.locator('#password');

        this.loginButton = page.locator('#login-button');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(userName, password){
        await this.usernameInput.fill(userName);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}

export default LoginPage;