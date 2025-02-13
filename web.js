var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.logger());
app.use('/', express.static(__dirname));
app.listen(port, function() {
    console.log('Server started on ' + port);
});
