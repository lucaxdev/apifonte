const { Model, DataTypes } = require('sequelize');

class frequencia extends Model {
    static init(sequelize) {
        super.init({

            nome: DataTypes.STRING,
            id_voluntario: DataTypes.STRING,
            nome:DataTypes.STRING,
            ponte:DataTypes.STRING,
            servindo:DataTypes.STRING

        }, {
            sequelize,
            freezeTableName: true
        })
    }
}

module.exports = frequencia;