import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage.page';

import HomePage from '../pageobjects/homepage.page';
import searchPage from '../pageobjects/search.page';
import SearchPage from '../pageobjects/search.page';

Given(/^I am on the home page$/, async () => {
    await HomePage.open();
});

When(/^I write (.*)$/, async (dato) => {
    await HomePage.searchProduct(dato)
});

Then(/^I should see a label with results$/, async () => {
    await expect(SearchPage.labelResults).toBeExisting();
    console.log(await SearchPage.labelResults.getText())
});

