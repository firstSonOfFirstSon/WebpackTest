const express = require('express');

app = express();
 
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});
   
app.listen('8080', () => {console.log('express listening on port 8080')});