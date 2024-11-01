// filename: searchSteps.js

const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I am on the Amazon home page', async function () {
    await browser.url('https://www.amazon.in/'); // Navigates to Amazon's homepage
    await browser.pause(1000); // Pauses briefly to allow page to load
});

When('I search for {string}', async function (product) {
    const searchBox = await $('input#twotabsearchtextbox'); // Finds search input box
    await searchBox.setValue(product); // Enters the product name in the search box
    const searchButton = await $('input#nav-search-submit-button'); // Finds search button
    await searchButton.click(); // Clicks the search button
});

Then('I should see search results', async function () {
    const results = await $('#search'); // Selects the search results container
    const isDisplayed = await results.isDisplayed(); // Checks if results are displayed
    assert.strictEqual(isDisplayed, true, 'Search results are not displayed'); // Asserts results are visible
});

Then('the results should contain {string}', async function (product) {
    const resultsText = await $('#search').getText(); // Retrieves the search results text
    assert(resultsText.includes(product), `Expected product "${product}" not found in search results`); // Asserts product is in results
});


Given('I am on a product page', async () => {
    // Navigate to a specific product page
    await browser.url('https://www.amazon.in/s?k=Apple+MacBook+Air+Laptop&crid=2RCIQ1B2JLJ4U&sprefix=%2Caps%2C124&ref=nb_sb_noss_2');
});

When('I click Add to Cart', async function () {
    const addToCartButton = await $('(//button[text()="Add to cart"])[1]'); // Selects the Add to Cart button
    await addToCartButton.click(); // Clicks the button
    await browser.pause(2000); // Pause to allow the action to complete (e.g., cart confirmation popup)
});

Then('the item should be in my cart', async function () {
    const cartIcon = await $('#nav-cart'); // Selects the cart icon
    await cartIcon.click(); // Clicks on the cart icon to view items
    await browser.pause(1000); // Pause to allow cart page to load

    const cartContents = await $('.sc-list-body'); // Selects the cart contents
    const isCartEmpty = await cartContents.isDisplayed();
    assert.strictEqual(isCartEmpty, true, 'The cart is empty'); // Asserts that the cart is not empty

    const itemName = await cartContents.getText(); // Gets the text of items in the cart
    assert(itemName.includes('Apple MacBook Air Laptop'), 'The item was not found in the cart'); // Assert item is in cart
});