import { test, expect } from '../fixtures/baseTest';

test('valid Login test', async ({
  loginPage
}) => {

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

});