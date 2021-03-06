const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// création de model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// ne pas faire de arrow function
userSchema.pre("save", function(next) {
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
