const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const icecreamData = [
  { name: 'vanilla', price: 10, awesomeness: 3 },
  { name: 'chocolate', price: 4, awesomeness: 8 },
  { name: 'banana', price: 1, awesomeness: 1 },
  { name: 'greentea', price: 5, awesomeness: 7 },
  { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

// Initialize app.
// ---------------

const app = express();

// Set up template engine
// ----------------------

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Configure routes
// ----------------

app.get('/icecream/:name', (req, res) => {
  const { name } = req.params;
  const selectedIcecream = icecreamData.find((icecream => icecream.name === name));

  res.render('icecream', selectedIcecream);
});

app.get('/icecream', (req, res) => {
  res.render('all-icecream', { icecreamData });
});

// Listen for requests.
// --------------------

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line
});
