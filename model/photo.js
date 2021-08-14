module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define(
    "photo",
    {
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      indexes: [
        {
          unique: false,
          fields: ["answerId"],
        },
      ],
    }
  );
  return Photo;
};
///
