var express = require('express'),
  consolidate = require('consolidate'),
  ObjectID = require('mongodb').ObjectID,
  MongoClient = require('mongodb').MongoClient,
  bodyParser = require('body-parser');
//npm install handlebars
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

var db;

app.engine('hbs', consolidate.handlebars);
app.set('views', 'views');
app.set('view engine', 'hbs');

app.use('/static', express.static('public'));

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) throw err;
  //---------------------------------
  //Nombre de la base de datos
  //---------------------------------
  db = client.db('tienda');
});
//---------------------------------
//Nombre de la coleccion
//---------------------------------
var dbName = 'products';
var dbVenta = 'ventas';

app.get('/', function (req, res) {

  var prod = db.collection(dbName).find();

  if(req.query.name){
    
  }

  prod.toArray((err, result) => {
    console.log(result);
    res.render('index', {
      productos: result
    })
  })
});

app.get('/productos/:id', (req, res) => {
  var id = req.params.id;

  db.collection(dbName).find({
    "_id": ObjectID(id)
  }).toArray((err, result) => {
    res.render('producto', {
      name: result[0].name,
      data: result[0].data,
      price: result[0].price
    })
  });
});

app.get('/checkout', (req, res) => {
  res.render('checkout');
});

app.get('/buyedProducts', (req, res) => {
  var arreglo = req.query.ids.split(',');
  arreglo = arreglo.map(function (id) {
    return new ObjectID(id);
  });
  db.collection('products')
    .find({
      _id: {
        $in: arreglo
      }
    })
    .toArray((err, result) => {
      res.send(result);
    });
});

app.post('/submit-data', (req, res) => {
  console.log("Triggered");
  console.log(req.body);

  if (req.body.pago)
    var pago = req.body.pago;
  else
    return;
  if (req.body.name)
    var name = req.body.name;
  else
    return;
  if (req.body.cedula)
    var cedula = req.body.cedula;
  else
    return;
  if (req.body.direccion)
    var direccion = req.body.direccion;
  else
    return;

  try {
    db.collection(dbVenta).insertOne({
      nombre: name,
      direccion: direccion,
      cc: cedula,
      pago: pago
    });
    res.redirect('gracias');
  } catch (e) {
    print(e);
  }
});

app.get('/test/:id', (req, res) => {
  res.send("Muchas gracias por la compra");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//npm init
//npm install express handlebars consolidate 
//mongo/mongod/mongodb
//Node index
