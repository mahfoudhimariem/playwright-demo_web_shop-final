import BaseAction from '../../utils/basePage';
import { Page, expect } from '@playwright/test';
import { ShoppingWishlistLocators } from '../../locators/e2e/ShoppingWishlistLocators';

export class WishListPage extends BaseAction {
  constructor(page: Page) {
    super(page);
  }
  public async AddProduct() {
   
    const steps = [
        ShoppingWishlistLocators.btnjewelry,
        ShoppingWishlistLocators.btnProduct,
        ShoppingWishlistLocators.btnAddWishlist,
        ShoppingWishlistLocators.btnWishlist,
       
    ];

    for (const locator of steps) {
        await this.clickElements(locator);
    }
}
public async verifyProductWishlist(expectedProduct: string) {

  const productLocator = this.page.locator(ShoppingWishlistLocators.product, { 
    hasText: expectedProduct 
  });

  await expect(productLocator).toBeVisible();
}


public async remove() {
   
    const move = [
        ShoppingWishlistLocators.removeCart,
        ShoppingWishlistLocators.btnUpdate,
    ];

    for (const locator of move) {
        await this.clickElements(locator);
    }
}
public async verifyWishList(expectedProduct: string) {

  const cartMsgLocator = this.page.locator(ShoppingWishlistLocators.Wislist, { 
    hasText: expectedProduct 
  });

  await expect(cartMsgLocator).toBeVisible();

}
}