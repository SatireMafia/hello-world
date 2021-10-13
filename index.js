//this file connects to a rippple client and displays the message connected

const client = require('rippled-ws-client')
new client('wss://fh.xrpl.ws').then(connection => {

    console.log('connected')
    connection.send({
        command: 'account_info',
        account: 'rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY'
}).then(reply => {
        connection.close()
        const balance = parseInt(reply.account_data.Balance)/1000000
        console.log(balance)    

    })
})


