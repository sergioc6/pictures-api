const repository = require('../repositories/users.Repository');

const list = async () => {
    return await repository.list();
}

const findById = async (id) => {
    return await repository.findById(id);
}

module.exports = { 
    list,
    findById
 };