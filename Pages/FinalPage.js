import { expect } from '@playwright/test';

class FinalPage {

    constructor(page){

        this.page = page;

        this.completeHeader = page.locator('.complete-header');

        this.completeText = page.locator('.complete-text');

        this.backHomeButton = page.locator('#back-to-products');
    }

    async verifyOrderSuccess(){

        await expect(this.completeHeader)
            .toContainText('Thank you for your order!');
    }

    async verifyDispatchMessage(){

        await expect(this.completeText)
            .toContainText(
                'Your order has been dispatched'
            );
    }

    async clickBackHome(){

        await this.backHomeButton.click();
    }
}

export default FinalPage;