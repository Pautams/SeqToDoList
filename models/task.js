const {task} = require("sequelize");
const instance = require ("../connection");

const task = instance.sequelize.define("task", {
    id: {
        type: task.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      code: {
        type: task.STRING,
        allowNull: false
      },
      taskName:{
          type: task.STRING,
          allowNull: false
      },
      taskDescription:{
          type: task.STRING,
          allowNull: false
      },
      taskStatus:{
          type: task.STRING,
          allowNull: false
      }

},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "task"
}
)
exports.model = task;