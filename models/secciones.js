"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define(
    "profesor",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      apellido: { 
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      ci: {
        allowNull: false,
        type: DataTypes.STRING(10),
      },
      correo: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(40)

      },
      fk_estudiantes: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "estudiantes",
          key: "id",
        }
      }
    },
    {
      timestamps: false,
      tableName: "estudiantes",
    }
  );

  profesor.getProfesores = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  profesor.associate = function (models) {
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return profesor;
};

