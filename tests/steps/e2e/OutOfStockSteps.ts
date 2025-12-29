 import { Given, When, Then } from '@cucumber/cucumber';
import { OutOfStockPage } from '../../pages/e2e/OutOfStockPage';
import { CustomWorld } from '../../utils/custom-world';
 
        Given('I navigate to a product out of stock', async function (this: CustomWorld) {
          const page = this.page!;
          this.outOfStockPage = new OutOfStockPage(page!);
          await this.outOfStockPage.navigateProduct();

         });

         When('I try to add it to cart', async function (this: CustomWorld) {
          await this.outOfStockPage!.addProduct();
           
         });

         Then('out of stock message should be displayed', async function (this: CustomWorld) {
          await this.outOfStockPage!.productAvailibility();
         
         });