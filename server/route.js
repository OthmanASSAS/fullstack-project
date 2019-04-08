module.exports = (app) => {
    app.get('/', (req, res, next)=> {
        res.send({serverData:['Stratocaster', 'Gibson', 'Ibanez']})
    })
}