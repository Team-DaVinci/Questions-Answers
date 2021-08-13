const dbConfig = require('../config/config.js');

const Sequelize = require('sequelize');


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false
  },
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('./product.js')(sequelize, Sequelize);
db.question = require('./question.js')(sequelize, Sequelize);
db.answer = require('./answer.js')(sequelize, Sequelize);
db.photo = require('./photo.js')(sequelize, Sequelize);


db.product.hasMany(db.question, { as: 'results' });

db.question.belongsTo(db.product, {
  foreignKey: 'productId',
  as: 'product',
});


db.question.hasMany(db.answer, { as: 'answers' });

db.answer.belongsTo(db.question, {
  foreignKey: 'questionId',
  as: 'question',
});


db.answer.hasMany(db.photo, { as: 'photos' });

db.photo.belongsTo(db.answer, {
  foreignKey: 'answerId',
  as: 'answer',
});




module.exports = db;