const express = require('express')
const app = express()
const axios = require('axios')
const httpClient = axios.create()
const PORT = 3000 


app.get('/users/:username', (req, res) => {
    const options = {
        method: "get",
 //       Accept: "application/vnd.github.v3+json",
        url :`https://api.github.com/users/${req.params.username}?client_id=5d93b449718d554e15e2&client_secret=7b6e0706d103a4dd178ef52ea42b7e9c27b3c7f4
        `
    }
    httpClient(options).then((apiResponse) => {
        const currentUser = apiResponse.data
        res.send(`<h1>${currentUser.login}</h1><h2># of Public Repos: ${currentUser.public_repos}</h2><img src='${currentUser.avatar_url}' />`)
    })
})


app.listen(PORT, (err) => {
    console.log(err || `server running on ${PORT}.`)
})