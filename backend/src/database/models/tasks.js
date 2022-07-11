const Tasks = (sequelize, DataTypes) => {
  const Task = sequelize.define('Tasks', {
    task: DataTypes.STRING,
    deadline: DataTypes.DATE,
  }, {
    tableName: 'Tasks',
    underscored: true,
  });
  return Task;
};

module.exports = Tasks;
