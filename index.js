// const express = require('express');
// const app = express();
// const productRoutes = require('./routes/productRoutes');

// app.set('view engine', 'ejs');
// app.set('views', __dirname, 'views');
// app.use(express.static(__dirname +'public'));
// app.use('/', productRoutes);
const express = require('express');
const app = express();
const router = require("./routes/productRoutes");
 
app.use(router);
 
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
