// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses } = require('./pages')



// Configurar nunjucks (Template Engine)
const nunjuncks = require('nunjucks')
nunjuncks.configure('src/views', {
    express : server,
    nocache : true
})

//Inicio e configuração do servidor
server
// receber os dados do req
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scrips, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do Servidor
.listen(5500)