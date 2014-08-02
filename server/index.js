var express = require('express'),
    cors = require('cors')
    Chance = require('chance'),
    chance = new Chance(),
    app = express();

app.use(cors());

var users = [];
for (var i = 0; i < 20; i++) {
  users.push({
    "id": chance.guid(),
    "name": chance.first(),
    "surname": chance.last(),
    "address": {
      "street": chance.street({short_suffix: true}),
      "city": chance.city()
    }
  });
}

console.log(users);

app.get('/data', function(req, res){
  var data = {"users": users};
  res.send(data);
});

var filterQueryByName = function (query, array) {
  var re = new RegExp(query,'i');

    return array.filter(function(item){
      return re.test(item.name);
    });
}

app.get('/search', function(req, res){
  data = {"users": filterQueryByName(req.query.search, users)};
  res.send(data);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
