import { test, expect } from '../fixtures/baseTest';
import InventoryPage from '../Pages/InventoryPage';

test('Valid Inventory test', async ({

    loginPage,
    inventoryPage
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

});