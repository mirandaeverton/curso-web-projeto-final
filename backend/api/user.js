module.exports = app => {
    const save = (req, res) => {
        res.send('User saved')
    }

    return { save }
}