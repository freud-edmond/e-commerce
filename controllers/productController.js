const  productController = {
    showHome : (req ,res) =>{
        res.render('app')
    },
 
 
 
}
 
module.exports = productController// const fs = require('fs');
// const path = require('path');

// const dataPath = path.join(__dirname, '../data/products.json');

// function getProducts() {
//   const data = fs.readFileSync(dataPath);
//   return JSON.parse(data);
// }

// exports.showHome = (req, res) => {
//   res.render('app.ejs', { title: 'Accueil' });
// };

// exports.showCategory = (req, res) => {
//   const { type } = req.params;
//   const products = getProducts();
//   const items = products[type] || [];
//   res.render('category', { title: `Catégorie ${type}`, type, items });
// };

// exports.showProduct = (req, res) => {
//   const { id } = req.params;
//   const products = getProducts();
//   let found = null;

//   for (const category in products) {
//     found = products[category].find(prod => prod.id == id);
//     if (found) break;
//   }

//   if (found) {
//     res.render('product', { title: found.nom, product: found });
//   } else {
//     res.status(404).send('Produit non trouvé');
//   }
// };
