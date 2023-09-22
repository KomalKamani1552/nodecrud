
module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                mobile: Number,
                email: String,
                name: String,
                password: String,
              
            }

        )
    );

    return User;

};
