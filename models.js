const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false,
});

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
});

const Plot = db.define('plot', {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN,
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  plantedOn: Sequelize.DATE,
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);

Vegetable.belongsToMany(Plot, { through: 'vegetablePlot' });
Plot.belongsToMany(Vegetable, { through: 'vegetablePlot' });

Gardener.belongsTo(Vegetable, { as: 'favoriteVegetable' });

module.exports = { db, Plot, Gardener, Vegetable };
