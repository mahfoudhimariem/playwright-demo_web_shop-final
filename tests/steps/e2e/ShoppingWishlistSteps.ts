import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ShoppingWishlistPage } from '../../pages/e2e/ShoppingWishlistPage';


   
       
         When('I add {string} to the cart', async function (string) {
            const page = this.page!;
            this.shoppingWishlistPage = new ShoppingWishlistPage(page!);
            await this.shoppingWishlistPage.selectProduct();
           
         });

         Then('I should see {string} in cart', async function (string) {
            const page = this.page!;
            await this.shoppingWishlistPage.verifyProductCart();
          
         });

  

/// scenario 2

        Given('I have {string} in cart', async function (string) {
            const page = this.page!;
            this.shoppingWishlistPage = new ShoppingWishlistPage(page!);
            await this.shoppingWishlistPage.selectProduct();
           
         });

  

         When('I remove {string} from cart', async function (string) {
            const page = this.page!;
            await this.shoppingWishlistPage.removeProduct();
          
         });

  

         Then('the cart should be empty', async function () {
            const page = this.page!;
            await this.shoppingWishlistPage.verifyCart();
           
         });