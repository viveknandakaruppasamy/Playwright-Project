import { expect } from '@playwright/test';

class CartPage{
    constructor(page){

        this.page = page;

        this.productNames = page.locator('.inventory_item_name');

        this.continueButton = page.locator('#continue-shopping'); 

        this.cartButton = page.locator('.shopping_cart_link');

        this.checkoutButton = page.locator('#checkout');

    }

    async verifyProductsInCart(productNames){

        await expect(this.productNames)
            .toHaveCount(productNames.length);

        await expect(this.productNames)
            .toContainText(productNames);

    }

    async clickContinueButton(){

        await this.continueButton.click();

    }

    async openCart(){

        await this.cartButton.click();

    }

    async clickCheckoutButton(){

        await this.checkoutButton.click();

    }

}

export default CartPage;