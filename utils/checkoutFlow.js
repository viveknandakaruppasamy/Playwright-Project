export async function completeCheckoutFlow({

    inventoryPage,
    cartPage,
    checkoutPage,
    overviewPage

}) {

    await inventoryPage.addBackpackToCart();

    await inventoryPage.addBikeLightToCart();

    await inventoryPage.openCart();

    await cartPage.clickCheckoutButton();

    await checkoutPage.fillCheckoutDetails(
        'John',
        'Doe',
        '600001'
    );

    await checkoutPage.clickContinueButton();

    await overviewPage.clickFinishButton();
}