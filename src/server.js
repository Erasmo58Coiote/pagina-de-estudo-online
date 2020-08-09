const express = require('express')
const server = express()

const {  pageLandimg, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

.use(express.urlencoded({extended: true}))

.use(express.static("public"))

.get("/" , pageLandimg)
.get("/study" , pageStudy)
.get("/give-classes" , pageGiveClasses)
.get("/save-classes" , saveClasses)

.listen(5501)


