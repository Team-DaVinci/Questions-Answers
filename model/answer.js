module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('answer', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING,

      primaryKey: true
    },
    date: {
      type: DataTypes.STRING,

    },
    name: {
      type: DataTypes.STRING,

    },
    email: {
      type: DataTypes.STRING,

    },
    helpfulness: {
      type: DataTypes.INTEGER,

    },

    reported: {
      type: DataTypes.STRING,

    }
  });

  return Answer;
};