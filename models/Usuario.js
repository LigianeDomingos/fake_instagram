let Usuario = (sequelize, DataTypes ) =>{
    return sequelize.define(    
        // colunas
        'Usuario',
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome:{ 
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName:"usuarios",
        timestamps:false
    }

    )

}

module.exports = Usuario;