module.exports = app => {
    const users = require("../controller/users.controller");

    let router = require("express").Router();

    // Create a new Users
    router.post("/", users.create);

    // Retrieve all Users
    router.get("/", users.findAll);

    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:userName", users.findOne);

    // Update a Tutorial with id
    //router.put("/:userName", users.update);

    // Delete a Tutorial with id
    router.delete("/:id", users.delete);

    // Create a new Tutorial
    //router.delete("/", tutorials.deleteAll);

    app.use('/api/users', router);
};
