const { Router } = require('express');
const createTablesRoutes = require('./tables');
const createWaitRoutes = require('./wait');

const createAPIRoutes = (data) => {
  const api = Router();

  api.use('/tables', createTablesRoutes(data));
  api.use('/waitlist', createWaitRoutes(data));

  api.post('/clear', (req, res) => {
    /* eslint-disable */
    data.wait = [];
    data.tables = [];
    res.json([true]);
  });

  return api;
};

module.exports = createAPIRoutes;
