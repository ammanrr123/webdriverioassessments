const Page = require('./page');

class SearchPage extends Page {
    // Elements
    get searchBox() { return $('#twotabsearchtextbox') }
    get searchButton() { return $('#nav-search-submit-button') }
    get searchResults() { return $$('.s-result-item') }
    get addToCartButton() { return $('#add-to-cart-button') }
    get cartCount() { return $('#nav-cart-count') }

    // Actions
    async search(keyword) {
        await this.searchBox.setValue(keyword);
        await this.searchButton.click();
    }

    async getSearchResults() {
        return await this.searchResults;
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async getCartItemCount() {
        return await this.cartCount.getText();
    }

    open() {
        return super.open('https://www.amazon.in/');
    }
}

module.exports = new SearchPage();