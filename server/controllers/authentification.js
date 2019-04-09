exports.signup = (req, res, next) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.send({ email, password });
};
