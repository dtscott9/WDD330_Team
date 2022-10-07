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
        return template;
    }

    renderList(list) {
        
    } 
}