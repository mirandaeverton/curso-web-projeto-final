const schecule = require('node-schedule')

module.exports = app => {
    schecule.scheduleJob('*/1 * * * *', async function () {
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const { Stat } = app.api.stat

        const lastStat = await Stat.findOne({}, {},
            { sort: { 'createdAt' : -1 } })
        
            const stat = new Stat({
                users: usersCount.count,
                categories: categoriesCount.count,
                articles: articlesCount.count,
                createdAt: new Date()
            })

        const usersChanged = !lastStat || stat.users !== lastStat.users
        const categoriesChanged = !lastStat || stat.categories !== lastStat.categories
        const articlesChanged = !lastStat || stat.articles !== lastStat.articles

        if(usersChanged || categoriesChanged || articlesChanged) {
            stat.save().then(() => console.log('[Stats] Estatísticas atualizadas'))
        }
    })
}