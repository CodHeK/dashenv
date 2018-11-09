const fs = require('fs');

module.exports = function extract(path, callback) {
  var env = {};
  fs.readFile(path, function(err, buf) {
    var data = buf.toString();
    data = data.split("\n");
    data.forEach(function(i) {
      if(i !== '') {
        var key = i.split("=")[0], value = i.split("=")[1];
        env[key] = value;
      }
    });
    callback(env);
  });
}
