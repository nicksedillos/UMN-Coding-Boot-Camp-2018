const { Router } = require('express');

const createTablesRoutes = (data) => {
  const tablesRoutes = Router();

  tablesRoutes.get('/', (req, res) => {
    res.json(data.tables);
  });

  tablesRoutes.post('/', (req, res) => {
    if (data.tables.length < 5) {
      data.tables.push(req.body);
      res.send([true]);
    } else {
      data.wait.push(req.body);
      res.send([false]);
    }
  });

  return tablesRoutes;
};

module.exports = createTablesRoutes;
