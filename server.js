import express from 'express'
import http from 'http'

const HOST = "localhost"
const PORT = 5000

const app = express()
const server = http.createServer(app)

app.use(express.static("./public"))

server.listen(PORT, HOST, () => {
  console.log(`start server in http://${HOST}:${PORT}`)
})