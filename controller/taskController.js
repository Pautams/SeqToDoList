const task = require("../models/task");

exports.createTask = async (req,res) => {

    let data = await account.model.create({
        code: req.body.code,
        task: req.body.taskName,
        description: req.body.taskDescription,
    })
    console.log("Task created");
    res.redirect("/index");
}
exports.deleteTask = async (req,res) => {

    let data = await task.model.destroy({
        where: {
            id: req.query.id
        }
    })
    console.log ("task deleted");
}

exports.updateTask = async (req,res) => {

    let data = await task.model.update({
        where: {
            id: req.query.id
        }
    })
    console.log("Task Updated Successfully");
}