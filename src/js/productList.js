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
<<<<<<< HEAD
        const img = template.querySelector(".card_image");
        img.setAttribute("src", product.Image);

        const brand = template.querySelector(".card__brand");
        brand.textContent = product.Brand.Name;

        const name = template.querySelector(".card__name");
        name.textContent = product.Name;

        const price = template.querySelector(".product-card__price");
        price.textContent = product.ListPrice;
=======
        // fill in the rest of the data here...
        template.querySelector('img').src = product.Image;
        template.querySelector('img').alt += product.Name;
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card__price').textContent += product.FinalPrice;  
>>>>>>> a723fe8f3b2aaf4e2663d35667ee2d7eb448f6a5
        return template;
    }

    renderList(list) {
        // make sure the list is empty
        this.listElement.innerHTML = '';
        //get the template
        const template = document.getElementById('product-card-template');
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
    } 
}