import ProductData from "./productData";

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    prepareTemplate(template, product) {
        template.querySelector('a').href +=  product.Id;
        // fill in the rest of the data here... 
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