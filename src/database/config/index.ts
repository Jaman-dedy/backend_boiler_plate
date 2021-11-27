const config = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    port: process.env.DB_PORT_DEV || 1433,
    dialect: process.env.DB_DIALECT || "postgres",
    seederStorage: "sequelize",
    pool: {
      max: 10,
      min: 0,
      idle: 25000,
      acquire: 25000,
      requestTimeout: 300000,
    },
    dialectOptions: {
      options: { encrypt: true },
    },
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    port: process.env.DB_PORT_TEST || 1433,
    dialect: process.env.DB_DIALECT || "postgres",
    seederStorage: "sequelize",
    pool: {
      max: 10,
      min: 0,
      idle: 25000,
      acquire: 25000,
      requestTimeout: 300000,
    },
    dialectOptions: {
      options: { encrypt: true },
    },
    logging: false,
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 1433,
    dialect: process.env.DB_DIALECT || "postgres",
    seederStorage: "sequelize",
    pool: {
      max: 10,
      min: 0,
      idle: 25000,
      acquire: 25000,
      requestTimeout: 300000,
    },
    dialectOptions: {
      options: { encrypt: true },
    },
    logging: false,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT_DEV || 1433,
    dialect: process.env.DB_DIALECT || "postgres",
    seederStorage: "sequelize",
    pool: {
      max: 10,
      min: 0,
      idle: 25000,
      acquire: 25000,
      requestTimeout: 300000,
    },
    dialectOptions: {
      options: { encrypt: true },
    },
    logging: false,
  },
};

module.exports = config;
