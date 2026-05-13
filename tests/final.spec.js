import { test, expect } from '../fixtures/baseTest';

test('Valid Overview test', async ({

    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
    overviewPage,
    finalPage

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

    await checkoutPage.fillCheckoutDetails(
            'John',
            'Doe',
            '600001'
    );

    await checkoutPage.clickContinueButton();



    await overviewPage.verifyProductsInCart([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light'
    ]);

    await overviewPage.verifyPaymentInfo(
        'SauceCard #31337'
    );

    await overviewPage.verifyShippingInfo(
        'Free Pony Express Delivery!'
    );

    await overviewPage.verifyItemTotal(
        '$39.98'
    );

    await overviewPage.verifyTaxTotal(
        '$3.20'
    );

    await overviewPage.verifyTotalPrice(
        '$43.18'
    );

    await overviewPage.clickFinishButton();

    await finalPage.verifyOrderSuccess();

    await finalPage.verifyDispatchMessage();

    await finalPage.clickBackHome();

    await expect(page)
    .toHaveURL(/inventory.html/);

});