const Tasks = (sequelize, DataTypes) => (
  sequelize.define('Tasks', {
    tasks: DataTypes.STRING,
    deadline: DataTypes.DATE,
  }));

module.exports = Tasks;
