const jwt = require('jsonWebToken');

function auth(req,res,next) {
    const token = req.header('auth_token');
    if(!token) {
        return res.status(401).send('Access Denied')
    }
    try{
        const verified = jwt.verify(token, process.env.SECRET);
        req.user =verified;
    }
    catch (err) {
        res.status(400).send('Invalied Token')

    }
}