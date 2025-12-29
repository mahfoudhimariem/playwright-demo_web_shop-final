import BaseAction from '../../utils/basePage';
import { Page, expect } from '@playwright/test';
import { ProductSearchLocators } from '../../locators/e2e/ProductSearchLocators';


export class ProductSearchPage extends BaseAction {
  constructor(page: Page) {
    super(page);
  }

  public async searchProduct(product: string) {
    await this.fillText(ProductSearchLocators.searchLink, product);
    await this.clickElements(ProductSearchLocators.btnSearch);
  }

  public async verifyProduct(product: string) {
  
    // locator pour tous les titres de produits
    const titlesLocator = this.page.locator('h2.product-title a');

    // attendre que la liste de résultats soit visible
    await titlesLocator.first().waitFor({ state: 'visible' });

    // récupérer tous les textes des titres
    const titles = await titlesLocator.allTextContents();
    console.log('Products found:', titles); 

    // vérifier qu'au moins un titre contient le mot demandé
    const containsKeyword = titles.some(text =>
        text.toLowerCase().includes(product.toLowerCase())
    );

    expect(containsKeyword).toBe(true);
}

  }

