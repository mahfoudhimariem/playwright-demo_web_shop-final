import BaseAction from '../../utils/basePage';
import { Page, expect } from '@playwright/test';
import { outofstockLocators } from '../../locators/e2e/out-of-stockLocators';

export class OutOfStockPage extends BaseAction {
  constructor(page: Page) {
    super(page);
  }
  public async navigateProduct() {
      await this.clickElements(outofstockLocators.jewelryLink);
  }
  public async addProduct() {
      await this.clickElements(outofstockLocators.productLink);
    }
    public async productAvailibility() {
       await this.waitFor(outofstockLocators.availabilityText);
           const availabilityTextVisible = await this.page.locator(outofstockLocators.availabilityText).isVisible();
           expect(availabilityTextVisible).toBeTruthy();
         }
        
}
