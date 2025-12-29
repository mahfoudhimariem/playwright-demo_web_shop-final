import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { WishListPage } from '../../pages/e2e/WishListPage';



When('I add {string} to wishlist', async function (string) {
           const page = this.page!;
           this.wishListPage = new WishListPage(page!);
           await this.wishListPage.AddProduct();
         });


Then('I should see {string} in wishlist', async function (string) {
          const page = this.page!;
          await this.wishListPage.verifyProductWishlist() 
         });


Given('{string} is in wishlist', async function (string) {
           const page = this.page!;
           this.wishListPage = new WishListPage(page!);
           await this.wishListPage.AddProduct();
           
         });


When('I remove {string} from wishlist', async function (string) {
          const page = this.page!;
          await this.wishListPage.remove();
         });


Then('wishlist should be empty', async function () {
           const page = this.page!;
          await this.wishListPage.verifyWishList();
         });