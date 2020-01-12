const { body, param, query } = require('express-validator');

const findByIdRules = () => {
    return [
        param('id').notEmpty().withMessage('required')
                    .isInt().withMessage('not integer')
                    .isLength({min:1}).withMessage('min 1'),    ]
}

const createRules = () => {
    return [
        body('name').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isLength({max:255}).withMessage('max 255'),           

        body('country').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isLength({max:255}).withMessage('max 255'),
        
        body('painter').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isLength({max:255}).withMessage('max 255'),              
        
        body('date').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isISO8601().withMessage('date no valid (YYYY-MM-DD)')
    ]
};

const editRules = () => {
    return [
        param('id').notEmpty().withMessage('required')
                    .isInt().withMessage('not integer')
                    .isLength({min:1}).withMessage('min 1'),

        body('name').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isLength({max:255}).withMessage('max 255'),           

        body('country').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isLength({max:255}).withMessage('max 255'),
        
        body('painter').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isLength({max:255}).withMessage('max 255'),              
        
        body('date').notEmpty().withMessage('required')
                    .isString().withMessage('not string')
                    .isISO8601().withMessage('date no valid (YYYY-MM-DD)')
    ]
};

const deleteRules = () => {
    return [
        param('id').notEmpty().withMessage('required')
                    .isInt().withMessage('not integer')
                    .isLength({min:1}).withMessage('min 1'),    ]
}

const listRules = () => {
    return [
        query('columns').optional()
                        .isString().withMessage('not string')
                        .isLength({max:255}).withMessage('max 255'),  
    ];
}

module.exports = {  createRules,
                    findByIdRules,
                    editRules,
                    deleteRules,
                    listRules,
                 }