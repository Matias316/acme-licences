module.exports = {
    storage: 'C:\\Users\\antinanc\\acme-licences\\acme.sqlite',
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };