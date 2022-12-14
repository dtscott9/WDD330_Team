const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'

function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw { name: 'servicesError', message: res };
    }
  }

export default class ExternalServices {
    constructor() {
    
    }

    getData(category) {
      return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson).then((data) => data.Result);
    }

    async findProductById(id) {
        //const products = await this.getData()
        return await fetch(baseURL + `product/${id}`).then(convertToJson)
          .then((data) => data.Result);
    }

    async checkout(data) {
      const URL = baseURL + "checkout";
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }

      return await fetch(URL, options).then(convertToJson);
    }
}