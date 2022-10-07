import { renderListWithTemplate } from './utils.js';

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
        this.products = [];
        this.init()
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    prepareTemplate(template, product) {
        template.querySelector('a').href +=  product.Id;
        // fill in the rest of the data here...
        template.querySelector('img').src = product.Image;
        template.querySelector('img').alt += product.Name;
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card__price').textContent += product.FinalPrice;  
        return template;
    }
 
    // Filter here
    
    renderList(list) {
        // make sure the list is empty
        this.listElement.innerHTML = '';
        //get the template
        const template = document.getElementById('product-card-template');
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    } 
}