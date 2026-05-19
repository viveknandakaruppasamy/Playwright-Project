import { test } from '../fixtures/baseTest';
import LoginPage from '../Pages/LoginPage';

import { loginData } from '../Test Data/loginData';

test('Verify Invalid login shows error message', async ({

    loginPage

}) => {

    await loginPage.goto();

    await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await loginPage.verifyErrorMessage(
        'Epic sadface'
    );
});