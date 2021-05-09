const frequencia = require('../models/frequencia');





module.exports = {
    async index(req, res) {
        const catalog = await frequencia.findAll();
        return res.json(catalog)
    },

    async store(req, res) {
        const { id_voluntario,nome,ponte,servindo,data } = req.body;


        const catalog = await frequencia.create({ id_voluntario,nome,ponte,servindo,data });

        return res.json(catalog);
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await frequencia.destroy({
                where: { id: id }
            });
            return res.json({"Mensagem apagada":"Hoje"})
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
};