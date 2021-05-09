const User = require('../models/voluntarios');


module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users)
    },

    async store(req, res) {
        const {nome,email,ponte,geracao,discipulador,endereco,data_nasc,numero,esc_lider} = req.body;


        const user = await User.create({nome,email,ponte,geracao,discipulador,endereco,data_nasc,numero,esc_lider});

        return res.json(user);
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const [updated] = await User.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedUser = await User.findOne({ where: { id: id } });
                return res.status(200).json({ post: updatedUser });
            }
            throw new Error('Post not found');
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            const deleted = await User.destroy({
                where: { id: id }
            });
            return res.json({"Mensagem apagada":"Hoje"})
        } catch (error) {
            return res.status(500).send(error.message);
        }
    },
   async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
};