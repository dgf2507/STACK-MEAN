

require('./database.js');

//Para acceder al archivo app.js  
const app = require('./app');




app.listen(app.get('port'));


console.log('server on port', app.get('port'));