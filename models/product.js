const fs = require('fs');
const path = require('path');
const db = require('../util/database')
/*const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);*/

/*const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};*/

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    /*this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });*/
  }

  static fetchAll() {
    //getProductsFromFile(cb);
    return db.execute('SELECT * FROM products');
  }
  static findById(id) {
    /*getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })*/
    return db.execute('SELECT * FROM products WHERE id = ?', [id]);

  }
  /*static deleteProductById(id) {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return;
      }

      const products = JSON.parse(fileContent);
      const updatedProducts = products.filter(product => product.id !== id);

      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
        console.log(err);
      });
    });
  }*/
};
