const express = require('express')
const app = express()  
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': '21',
        'birthLocation': 'London, England',
        'birthName': 'Sir Savage the 21st'
    },
    'chance the rapper': {
        'age': '21',
        'birthLocation': 'Chicago, Illnois',
        'birthName': 'Chancellor Bennett'
    },
    'unknown': {
        'age': 0,
        'birthLocation': 'unknown',
        'birthName': 'unknown'
    }

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    let rapper = rappers[rapperName]
    if (rapper) {
        response.json(rapper)
    }
    else {
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`${PORT} is the port we're on.`)
} )