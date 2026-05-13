import { expect } from '@playwright/test';

class OverviewPage{
    constructor(page){

        this.page = page;

        this.productNames = page.locator('.inventory_item_name');

        this.paymentInfo = page.locator('.summary_value_label').nth(0);

        this.shippingInfo = page.locator('.summary_value_label').nth(1);

        this.itemTotal = page.locator('.summary_subtotal_label');

        this.taxTotal = page.locator('.summary_tax_label');

        this.totalPrice = page.locator('.summary_total_label');

        this.finishButton = page.locator('#finish');

    }

    async verifyProductsInCart(productNames){
        await expect(this.productNames)
        .toHaveCount(productNames.length);
    
        await expect(this.productNames)
        .toContainText(productNames);
    
        }

    async verifyPaymentInfo() {
        
        await expect(this.paymentInfo)
        .toContainText('SauceCard #31337');

    }

    async verifyShippingInfo() {

        await expect(this.shippingInfo)
        .toContainText('Free Pony Express Delivery!');

    }

    async verifyItemTotal(expectedItemTotal) {
        
        await expect(this.itemTotal)
        .toContainText(expectedItemTotal);

    }

    async verifyTaxTotal(expectedTax) {
        
        await expect(this.taxTotal)
        .toContainText(expectedTax);

    }

    async verifyTotalPrice(expectedTotal) {
        
        await expect(this.totalPrice)
        .toContainText(expectedTotal);

    }

    async clickFinishButton(){

        await this.finishButton.click();
    }
}

export default OverviewPage;