const { Model, DataTypes } = require('sequelize');

class voluntarios extends Model {
    static init(sequelize) {
        super.init({
            // nome,email,ponte,geracao,discipulador,endereco,dataNasc,numero,escLider
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            ponte: DataTypes.STRING,
            geracao: DataTypes.STRING,
            discipulador: DataTypes.STRING,
            endereco: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            numero: DataTypes.STRING,
            esc_lider: DataTypes.STRING,
            
           
        }, {
            sequelize,
            freezeTableName: true
        })
    }
}

module.exports = voluntarios;