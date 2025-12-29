import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../utils/custom-world';
import { ProductSearchPage } from '../../pages/e2e/ProductSearchPage';




When('I search for {string}', async function (this: CustomWorld, product: string) {
           const page = this.page!;
           this.productSearchPage = new ProductSearchPage(page!);
           await this.productSearchPage.searchProduct(product);
         });


         Then('I should see search results containing {string}', async function (this: CustomWorld, product: string) {
           const page = this.page!;
           await this.productSearchPage!.verifyProduct(product);
    });


         