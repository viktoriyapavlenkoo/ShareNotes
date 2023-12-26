const Sequelize = require("sequelize");

const sequelize =  new Sequelize("reactjs", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./Notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}