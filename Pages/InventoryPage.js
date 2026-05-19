import { expect } from '@playwright/test';

class InventoryPage{
    constructor(page){
        this.page = page;

        this.backpackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

        this.bikeLightAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

        this.cartButton = page.locator('[data-test="shopping-cart-link"]');

        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }

    async addBackpackToCart(){

        await this.backpackAddToCartButton.click();

    }

    async addBikeLightToCart(){

        await this.bikeLightAddToCartButton.click();

    }

    async openCart(){

        await this.cartButton.click();
    }

    async verifyCartCount(count) {

        await expect(this.cartBadge).toHaveText(count);

    }
}

export default InventoryPage;