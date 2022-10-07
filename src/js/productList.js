

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
        const img = template.querySelector(".card_image");
        img.setAttribute("src", product.Image);

        const brand = template.querySelector(".card__brand");
        brand.textContent = product.Brand.Name;

        const name = template.querySelector(".card__name");
        name.textContent = product.Name;

        const price = template.querySelector(".product-card__price");
        price.textContent = product.ListPrice;
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