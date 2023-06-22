module.exports = {
  HOST: "svc.sel4.cloudtype.app",
  USER: "root",
  PORT: "31270",
  PASSWORD: "3152",
  DB: "testdb",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
