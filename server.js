const express = require('express');
const app = express();
const Product = require('./Model/Product');
const Category = require('./Model/Category');
const helmet = require('helmet');
const cors = require('cors');

// Multipurpose HTTP headers
app.use(helmet());

// Will want to have more specific CORS config
app.use(cors());

app.get('/api/menu/:category', (req, res) => {
  const capitalizedCategory = req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);
  console.log(capitalizedCategory);
  Category.query().findOne('category.name', capitalizedCategory).modify('selectName').withGraphJoined('subcategories(selectName).products(productListSelects)')
  .then(test => res.json(test));
})

app.listen(3020, () => {
  console.log('test at port 3020')
});


// Product.query().findById(1).modify('productListSelects').withGraphJoined(
//   'selectedToppings(selectIdAndName).selectedIngredients(selectIdAndName)'
// ).then(test => console.log('test', test, 'testToppings', test.selectedToppings[0]));

// knex.select('o.id', 'o.name')
// .from({o: 'option'})
// .leftJoin({os: 'option_set'}, 'os.option_id', 'o.id')
// .leftJoin({c: 'choice'}, 'c.id', 'os.choice_id')
// .leftJoin({cs: 'choice_set'}, 'cs.choice_id', 'c.id')
// .leftJoin({f: 'fields'}, 'f.id', 'cs.fields_id')
// .leftJoin({p: 'product'}, 'p.fields_id', 'f.id')
// .where('p.id', 14)
// .then((foo) => {
//   console.log('foo', foo);
// });

// knex.select('ing.id', 'ing.name')
// .from({ing: 'ingredient'})
// .leftJoin({ings: 'ingredient_set'}, 'ings.ingredient_id', 'ing.id')
// .leftJoin({t: 'topping'}, 't.id', 'ings.topping_id')
// .leftJoin({ts: 'topping_set'}, 'ts.topping_id', 't.id')
// .leftJoin({f: 'fields'}, 'f.id', 'ts.fields_id')
// .leftJoin({p: 'product'}, 'p.fields_id', 'f.id')
// .where('p.id', 14)
// .then((foo) => {
//   console.log('foo', foo);
// });
