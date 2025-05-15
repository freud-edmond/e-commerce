const fs = require('fs');
const path = require('path');

// Charger les produits une seule fois
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../products.json')));

// Page d'accueil : afficher les catégories
exports.showHome = (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.render('index', { categories });
};

// Page de catégorie : afficher les produits d'une catégorie
exports.showCategory = (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(p => p.category === category);
  res.render('category', { category, products: filteredProducts });
};

// Page d’un produit : afficher les détails
exports.showProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).send('Produit non trouvé');
  }
  res.render('product', { product });
};
