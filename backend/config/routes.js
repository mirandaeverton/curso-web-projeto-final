module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signIn)
    app.post('/validateToken', app.api.auth.validateToken)
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route('/categories')
        .post(app.api.category.save)
        .get(app.api.category.get)

    app.route('/categories/tree')
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .put(app.api.category.save)
        .get(app.api.category.getById)
        .delete(app.api.category.remove)

    app.route('/articles')
        .post(app.api.article.save)
        .get(app.api.article.get)

    app.route('/articles/:id')
        .put(app.api.article.save)
        .get(app.api.article.getById)
    
    app.route('/categories/:id/articles')
        .get(app.api.article.getByCategory)
}