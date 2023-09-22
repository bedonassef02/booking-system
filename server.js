const dotenv = require('dotenv');
const morgan = require('morgan')
const app = require('./app')

dotenv.config()

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