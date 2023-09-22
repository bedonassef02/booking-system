const dotenv = require('dotenv');
const morgan = require('morgan')
const app = require('./app')

dotenv.config()
require('./database/db.connection')


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port ' + port);
});