const Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "detalhes_produto",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      productId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      unitPrice: {
        type: DataTypes.STRING(255),
        allowNull: false,
  
      },
      quantity: {
        type: DataTypes.STRING(255),
        allowNull: false,
     
      },
    },
    {
      sequelize,
      tableName: "detalhes_produto",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
  
      ],
    }
  );
};
