const usersService = require('../services/users.Service');

const checkUserHeader = async (req, res, next) => {
    let id = req.header('X-HTTP-USER-ID');
    if (!id) {
        res.status(401).send({ 'error': 'User Id not provider'});
        return;
    }
    if (!Number.isInteger(id*1)) {
        res.status(401).send({ 'error': 'User Id must be integer'});
        return;
    }
    let user = await usersService.findById(id);
    if (!user) {
        res.status(401).send({ 'error': 'User Id not exists'});
        return;
    }

    next();
}

module.exports = {
    checkUserHeader
};