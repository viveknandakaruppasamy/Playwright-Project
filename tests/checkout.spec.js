import { test, expect } from '../fixtures/baseTest';

test('Valid Checkout test', async ({

    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage

}) => {

    await loginPage.goto();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await inventoryPage.verifyCartCount('2');

    await inventoryPage.openCart();

    await cartPage.verifyProductsInCart([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light'
    ]);

    await cartPage.clickContinueButton();

    await expect(page).toHaveURL(/inventory.html/);

    await cartPage.openCart();

    await cartPage.clickCheckoutButton();

    await expect(page).toHaveURL(/checkout-step-one.html/);

    await checkoutPage.fillCheckoutDetails(
            'John',
            'Doe',
            '600001'
    );

    await checkoutPage.clickContinueButton();
});