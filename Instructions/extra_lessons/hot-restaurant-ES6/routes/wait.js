const { Router } = require('express');

const createWaitRoutes = (data) => {
  const waitRoutes = Router();

  waitRoutes.get('/', (req, res) => {
    res.send(data.wait);
  });

  return waitRoutes;
};

module.exports = createWaitRoutes;
