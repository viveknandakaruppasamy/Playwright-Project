import { test as base, expect } from '@playwright/test';

import LoginPage from '../Pages/LoginPage';

import InventoryPage from '../Pages/InventoryPage';

import CartPage from '../Pages/CartPage';

import CheckoutPage from '../Pages/CheckoutPage';

import OverviewPage from '../Pages/OverviewPage';

import FinalPage from '../Pages/FinalPage';




export const test = base.extend({

    loginPage: async ({page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({page}, use) => {
        await use(new CheckoutPage(page));
    },

    overviewPage: async ({page}, use) => {
        await use(new OverviewPage(page));
    },

    finalPage: async ({page}, use) => {
        await use(new FinalPage(page));
    }


});

export { expect };
