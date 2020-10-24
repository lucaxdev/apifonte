const { Model, DataTypes } = require('sequelize');

class voluntarios extends Model {
    static init(sequelize) {
        super.init({
            
            nome: DataTypes.STRING,
            ponte: DataTypes.STRING,
            aniversario: DataTypes.STRING,
            telefone: DataTypes.STRING,
            faltas: DataTypes.STRING,
        }, {
            sequelize,
            freezeTableName: true
        })
    }
}

module.exports = voluntarios;