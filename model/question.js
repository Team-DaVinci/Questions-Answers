module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {

    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING,
      
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
      type: DataTypes.STRING,

    },
    reported: {
      type: DataTypes.STRING,

    }
  });

  return Question;
};