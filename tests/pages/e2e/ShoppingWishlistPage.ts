import BaseAction from '../../utils/basePage';
import { Page, expect } from '@playwright/test';
import { ShoppingWishlistLocators } from '../../locators/e2e/ShoppingWishlistLocators';

export class ShoppingWishlistPage extends BaseAction {
  constructor(page: Page) {
    super(page);
  }
  public async selectProduct() {
   
    const steps = [
        ShoppingWishlistLocators.btnComputers,
        ShoppingWishlistLocators.btnDesktops,
        ShoppingWishlistLocators.productLink,
        ShoppingWishlistLocators.productOption,
        ShoppingWishlistLocators.btnAddCart,
        ShoppingWishlistLocators.shoppingCart
    ];

    for (const locator of steps) {
        await this.clickElements(locator);
    }
}

public async verifyProductCart(expectedProduct: string) {

  const productLocator = this.page.locator(ShoppingWishlistLocators.productName, { 
    hasText: expectedProduct 
  });

  await expect(productLocator).toBeVisible();

}

public async removeProduct() {
   
    const move = [
        ShoppingWishlistLocators.btnRemove,
        ShoppingWishlistLocators.btnUpDateCart,
    ];

    for (const locator of move) {
        await this.clickElements(locator);
    }
}
public async verifyCart(expectedProduct: string) {

  const cartMsgLocator = this.page.locator(ShoppingWishlistLocators.cartMsg, { 
    hasText: expectedProduct 
  });

  await expect(cartMsgLocator).toBeVisible();

}

  }
   
