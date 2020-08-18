const transactionsRoutes = require('./transactions');

module.exports = (app) => {
  app.get('/', (req, res, next) => {
    res.status(200).send('Service running...');
  });

  app.use('/transactions', transactionsRoutes);

  app.use((req, res, next) => {
    res.status(404).send('404 - Not found');
  });
};
