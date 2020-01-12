const repository = require('../repositories/pictures.Repository');

const list = async (req, res, next) => {
    let response = await repository.list(req.query.filters, req.query.columns);
    res.send(response);
}

const create = async (req, res, next) => {
    const { name, country, painter, date } = req.body
    response = await repository.insertGetId(name, country, painter, date);
    const id = response.id;
    res.send({id, name, country, painter, date});
}

const findById = async (req, res, next) => {
    response = await repository.findById(req.params.id);
    res.send(response);
}

const edit = async (req, res, next) => {
    const id = req.params.id;
    const { name, country, painter, date } = req.body
    response = await repository.update(id, name, country, painter, date);
    res.send(response);
}

const deleteById = async (req, res, next) => {
    const id = req.params.id;
    response = await repository.deleteById(id);
    res.send({rows_deleted : response});
}

module.exports = {
    list,
    edit,
    create,
    findById,
    deleteById,
}