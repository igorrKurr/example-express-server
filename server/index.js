var express = require('express'),
    cors = require('cors'),
    app = express();

app.use(cors());

app.get('/data', function(req, res){
  var data = {
    "users": [
      {
        "id": 1,
        "name": "Lev",
        "surname": "Tolstoy",
        "address": {
          "country": "UKR",
          "city": "Kiev"
        }
      },
      {
        "id": 2,
        "name": "Lev",
        "surname": "Prostoy",
        "address": {
          "country": "USA",
          "city": "NYC"
        }
      }
    ]
  };
  res.send(data);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
