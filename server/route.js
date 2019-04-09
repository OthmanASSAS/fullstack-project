const AuthentificationController = require('./controllers/authentification')

module.exports = (app) => {
  
    app.post('/signup', AuthentificationController.signup);
}