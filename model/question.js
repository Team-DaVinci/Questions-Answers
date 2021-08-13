module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,

    },
    date: {
      type: DataTypes.BIGINT,
      get() {
        const dateVal = this.getDataValue('date');
        return dateVal ? new Date(Number(dateVal)).toISOString() : null;

      }
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
      type: DataTypes.BOOLEAN,

    }
  });

  return Question;
};