module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            userName: String,
            password: String
        }
    );

    const User = mongoose.model("User", schema);
    return User;
};
