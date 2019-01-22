const { db, Vegetable, Gardener } = require('./models');

Vegetable.create({ name: 'carrot', color: 'orange', plantedOn: new Date() })
  .then(vegetable => {
    return Gardener.create({
      name: 'jon',
      age: 34,
      favoriteVegetableId: vegetable.id,
    });
  })
  .catch(error => {
    console.log(error);
  });

db.sync({ force: false })
  .then(console.log('Database Synced!'))
  .catch(err => {
    console.log('Disaster!');
    console.log(err);
  })
  .finally(() => {
    db.close();
  });
