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
        const template = document.querySelector(".product-template");
        list.map((product) => {
            const templateClone = template.cloneNode(true);
            this.listElement.appendChild(templateClone);
        })
    }


    
}