var express = require('express');
var router = express.Router();
const auth = require('../middlewares/authUser');
const service = require ('../services/pictures.Service');
const picturesValidator = require('../validators/pictures.Validator');
const validator = require('../validators/validator');

/* GET pictures listing. */
router.get('/',
    (req, res, next) => auth.checkUserHeader(req, res, next),
    picturesValidator.listRules(),
    validator.validate,
    (req, res, next) => service.list(req, res, next)
);

/* GET picture by id. */
router.get('/:id',
    (req, res, next) => auth.checkUserHeader(req, res, next),
    picturesValidator.findByIdRules(),
    validator.validate,
    (req, res, next) => service.findById(req, res, next)
);

/* POST insert new picture. */
router.post('/', 
    (req, res, next) => auth.checkUserHeader(req, res, next),
    picturesValidator.createRules(),
    validator.validate,
    (req, res, next) => service.create(req, res, next)
);

/* PUT edit picture. */
router.put('/:id',
    (req, res, next) => auth.checkUserHeader(req, res, next),
    picturesValidator.editRules(),
    validator.validate,
    (req, res, next) => service.edit(req, res, next)
);

/* DELETE picture */
router.delete('/:id', 
    (req, res, next) => auth.checkUserHeader(req, res, next),
    picturesValidator.deleteRules(),
    validator.validate,
    (req, res, next) => service.deleteById(req, res, next)
);

module.exports = router;