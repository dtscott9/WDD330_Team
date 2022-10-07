import { renderListWithTemplate } from './utils.js';

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
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

    renderList(list) {
        const template = document.getElementById('product-card-template');
        list.forEach(product => {
        const clone = template.content.cloneNode(true);
        const hydratedTemplate = this.prepareTemplate(clone, product);
        this.listElement.appendChild(hydratedTemplate);
        })
    } 
}