const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true })
    .catch(err => {
        const msg = 'Erro! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b', msg, '\x1b[0m')
    })