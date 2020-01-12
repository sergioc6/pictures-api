var express = require('express');
var router = express.Router();
const service = require('../services/users.Service');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let response = await service.list();
  res.send(response);
});

/* GET user by Id. */
router.get('/:id', async (req, res, next) => {
  let response = await service.findById(req.params.id);
  res.send(response);
});

module.exports = router;
