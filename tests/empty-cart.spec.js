import { test, expect } from '../fixtures/baseTest';

test('Verify empty cart page', async ({

    loginPage,
    inventoryPage,
    page

}) => {

    await loginPage.goto();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.openCart();

    await expect(
        page.locator('.cart_item')
    ).toHaveCount(0);
    
});