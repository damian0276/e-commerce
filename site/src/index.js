const express = require("express");
const app = express();
const path = require("path");

//settings//
//Para indicarle express la carpeta donde se encuentran los archivos estáticos
app.use(express.static(path.resolve(__dirname, '..', 'public')));
// Uso de EJS
app.set('view engine','ejs');


//Uso  a las rutas
const webRoutes = require('./routes/web');
const adminRoutes = require('./routes/admin')                                                                                                        



//llamo a las rutas
app.use(webRoutes);
app.use(adminRoutes);


//



// configuro el puerto por si el servidor ya me asigna uno//
app.set('port', process.env.PORT || 3030);

// Aca levanto el servidor 
app.listen(app.get('port'), ()=> console.log('Servidor funcionando en el puerto',app.get('port')));