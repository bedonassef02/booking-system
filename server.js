const app = require('./app')

const dbConnection = require('./database/db.connection')


const port = process.env.PORT || 3000;

dbConnection.then(
    console.log('connecting to database successfully'),
    app.listen(port, () => {
        console.log('listening on port ' + port);
    })
).catch((err) => {
    console.error('db connection error: ' + err);
})