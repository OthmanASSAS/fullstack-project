const AuthentificationController = require("./controllers/authentification");
require("./services/passport");
const passport = require("passport");

const requireToken = passport.authenticate("jwt", { session: false });

module.exports = app => {
    app.post("/signup", AuthentificationController.signup);
    app.get('/ressourceSecrete', requireToken, (req, res)=>{
        res.send({code:42})
    })
};
