const Sequelize = require("sequelize");
const sequelize = new Sequelize("expense_tracker", "root", "yash@7890", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
