module.exports = middleware => {
    return (req, res, next) => {
        if(req.user.admin) {
            middleware(res, req, next)
        } else {
            res.status(401).send('Usuário não é administrador!')
        }
    }
}