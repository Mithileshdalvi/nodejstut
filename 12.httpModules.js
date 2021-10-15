const http = require('http')

//req represents the incoming requests 
//res represents the response to it
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<h1>HELO JANTA!!</h1>
        <a href="/about">about page</a>`)
    }
    if (req.url === "/about") {
        res.end('oK bYE THEN')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page u looking for</p>
        <a href="/">back home</a>
    `)
}) 

//specific port that server will listen to
server.listen(5000)