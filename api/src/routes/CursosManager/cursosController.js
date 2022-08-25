const { Cursos } = require('../../db');

const getCursos = async (req, res, next) => {
    try {
        const cursos = await Cursos.findAll();
        res.status(200).send(cursos);
    } catch (error) {
        next(error);
    }
};

const postCursos = async (req, res, next) => {
    const { name, description, image } = req.body.body;
    try {
        const cursoExistente = await Cursos.findOne(
            { where: { name: name } }
        );
        if (cursoExistente) {
            res.status(400).json({
                message: 'El curso ya existe'
            });
        } else {
            const curso = await Cursos.create({
                name,
                description,
                image
            });
            res.status(201).send(curso);
        }
    } catch (error) {
        next(error);
    }
};

const updateCursos = async (req, res, next) => {
    const { name, description, image } = req.body;
    const { id } = req.params;
    try {

        if(!name || !description || !image) {
            res.status(500).send({
                message: 'No se puede actualizar el curso'
            });
        } else if (typeof name === 'number' || typeof description === 'number' || typeof image === 'number') {
            res.status(500).send({
                message: 'Los datos no pueden ser números'
            });
        } else {
            const curso = await Cursos.findByPk(id);
            if (curso) {
                await curso.update({
                    name,
                    description,
                    image
                });
                res.status(200).send(curso);
            } else {
                res.status(404).send({
                    message: 'El curso no existe'
                });
            }
        }
    } catch (error) {
        next(error);
    }
};

const deleteCursos = async (req, res, next) => {
    const { id } = req.params;
    try {
        const curso = await Cursos.destroy({
            where: {
                id
            }
        });
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getCursos,
    postCursos,
    updateCursos,
    deleteCursos,
};