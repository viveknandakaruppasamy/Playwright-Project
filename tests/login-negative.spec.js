import { test } from '../fixtures/baseTest';
import LoginPage from '../Pages/LoginPage';

import { loginData } from '../Test Data/loginData';

test('Verify Invalid login shows error message', async ({

    loginPage

}) => {

    await loginpage.goto();

    await loginpage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await loginpage.verifyErrorMessage(
        'Epic sadface'
    );
});