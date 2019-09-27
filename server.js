const
   express = require('express'),
   template = (src) => `
      <!Doctype HTML>
      <html>
      <meta>
         <meta charset="UTF-8"></meta>
         <title> Юзаю вебпак </title>      
      </head>
      <body>
         <script src="${src}"></script>
      </body>
      </html>
   `;
   
app = express();
 
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
   res.send(template('./home.js'));
});

app.get('/about', (req, res) => {
   res.send(template('./about.js'));
});

app.get('/contact', (req, res) => {
   res.send(template('./contact.js'));
});
   
app.listen('8080', () => {console.log('express listening on port 8080')});