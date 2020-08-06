const db = require("../model");
const Users = db.users;

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.userName) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a User
    const user = new Users({
        userName: req.body.userName,
        password: req.body.password
    });

    // Save Tutorial in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const userName = req.query.userName;
    var condition = userName ? { userName: { $regex: new RegExp(userName), $options: "i" } } : {};

    Users.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const userName = req.params.userName;

    Users.findById(userName)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found User with name " + userName });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with userName=" + userName });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Users.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete User with id=${id}. Maybe user was not found!`
                });
            } else {
                res.send({
                    message: "Users was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published user name
exports.findAll = (req, res) => {
    const userName = req.query.userName;
    let condition = userName ? { userName: { $regex: new RegExp(userName), $options: "i" } } : {};

    Users.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};
