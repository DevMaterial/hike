/* jshint esversion: 6 */
var ejs = require('ejs'),
    express = require('express'),
    nodemailer = require('nodemailer'),
    em = require('./app/scripts/emailt'),
    app = express(),
    bodyParser = require('body-parser');

require('dotenv').config();

app.set('port', (process.env.PORT || 4000));

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname));
app.set('view engine', 'ejs');


app.get('/', function(req,res){
  res.render('index');
});

app.get('/index', function(req,res){
  res.render('index');
});

app.get('/mountains', function(req,res){
  res.render('mountains');
});

app.get('/gear', function(req,res){
  res.render('gear');
});

app.get('/newsletter', function(req,res){
  res.render('newsletter');
});

app.post(['/gear', '/', '/index', '/mountains', '/newsletter'], urlencodedParser, function(req, res){
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.TOKEN_1,
          pass: process.env.TOKEN_2
      }
  });
  // setup email data with unicode symbols
  let mailOptions = {
      from: process.env.TOKEN_1, // sender address
      to: req.body.email, // list of receivers
      subject: 'Hike ✔', // Subject line
      text: 'Im slippin inspiration in yo inbox.', // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  if (req.path === '/newsletter'){
    res.render('newsletter-success', {data: req.body});
  } else {
    var data = {
      text: 'An email has been delivered to your inbox'
    };
    res.render(req.path.replace(/\//g, ''), {data: data});
  }
});

//APPAREL//

app.get('/product/shirt', function(req,res){
  var data = {
    title: 'Shirt',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$20.00',
    image: '../app/img/utilities/shirt.jpeg'
  };
  res.render('product', {data: data});
});

app.get('/product/hat', function(req,res){
  var data = {
    title: 'Hat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$12.00',
    image: '../app/img/utilities/hat.jpeg'
  };
  res.render('product', {data: data});
});

app.get('/product/jacket', function(req,res){
  var data = {
    title: 'Jacket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$60.00',
    image: '../app/img/utilities/jacket.jpeg'
  };
  res.render('product', {data: data});
});

app.get('/product/pants', function(req,res){
  var data = {
    title: 'Pants',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$50.00',
    image: '../app/img/utilities/pants.jpeg'
  };
  res.render('product', {data: data});
});

app.get('/product/shoes', function(req,res){
  var data = {
    title: 'Shoes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$40.00',
    image: '../app/img/utilities/shoes.jpeg'
  };
  res.render('product', {data: data});
});

app.get('/product/jacket2', function(req,res){
  var data = {
    title: 'Jacket2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$10.00',
    image: '../app/img/utilities/jacket2.jpeg'
  };
  res.render('product', {data: data});
});

//CAMP//

app.get('/product/blanket', function(req,res){
  var data = {
    title: 'Blanket',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$140.00',
    image: '../app/img/utilities/blanket.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/lantern', function(req,res){
  var data = {
    title: 'Lantern',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$90.00',
    image: '../app/img/utilities/lantern.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/survival', function(req,res){
  var data = {
    title: 'Survival Kit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$110.00',
    image: '../app/img/utilities/survival.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/axe', function(req,res){
  var data = {
    title: 'Axe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$85.00',
    image: '../app/img/utilities/axe.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/tent', function(req,res){
  var data = {
    title: 'Tent',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$40.00',
    image: '../app/img/utilities/tent.jpeg'
  };
  res.render('product', {data: data});
});

app.get('/product/sleeping-bag', function(req,res){
  var data = {
    title: 'Sleeping Bag',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$160.00',
    image: '../app/img/utilities/sleeping-bag.jpg'
  };
  res.render('product', {data: data});
});

//UTILITIES//

app.get('/product/pack', function(req,res){
  var data = {
    title: 'Pack',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$75.00',
    image: '../app/img/utilities/pack.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/canteen', function(req,res){
  var data = {
    title: 'Canteen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$25.00',
    image: '../app/img/utilities/canteen.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/flint', function(req,res){
  var data = {
    title: 'Flint',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$30.00',
    image: '../app/img/utilities/flint.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/knife', function(req,res){
  var data = {
    title: 'Knife',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$70.00',
    image: '../app/img/utilities/knife.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/hook', function(req,res){
  var data = {
    title: 'Hook',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$60.00',
    image: '../app/img/utilities/hook.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/log', function(req,res){
  var data = {
    title: 'Adventure Log',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$9.00',
    image: '../app/img/utilities/log.jpg'
  };
  res.render('product', {data: data});
});

//UTILITIES//

app.get('/product/fishing-pod', function(req,res){
  var data = {
    title: 'Fishing Pod',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$30.00',
    image: '../app/img/utilities/fishing-pod.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/hobo-eat-kit', function(req,res){
  var data = {
    title: 'Utensils',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$22.00',
    image: '../app/img/utilities/hobo-eat-kit.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/whistle', function(req,res){
  var data = {
    title: 'Whistle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$34.00',
    image: '../app/img/utilities/whistle.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/matches', function(req,res){
  var data = {
    title: 'Matches',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$17.00',
    image: '../app/img/utilities/matches.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/tweezers', function(req,res){
  var data = {
    title: 'Tweezers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$25.00',
    image: '../app/img/utilities/tweezers.jpg'
  };
  res.render('product', {data: data});
});

app.get('/product/flashlight', function(req,res){
  var data = {
    title: 'Adventure Log',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: '$60.00',
    image: '../app/img/utilities/flashlight.jpg'
  };
  res.render('product', {data: data});
});

app.listen(app.get('port'), function(err) {
  console.log("Started listening on " + app.get('port'));
});
