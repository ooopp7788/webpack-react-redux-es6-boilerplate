var glob = require('glob'); //glob模块的功能：返回匹配指定模式的文件名或目录。
var path = require('path');

/*
pickFiles({
  id: /([^\/]+).js$/,
  pattern: './src/base/*.js',
});
*/

exports.pickFiles = function(options) {
  var files = glob.sync(options.pattern);
  return files.reduce(function(data,filename) {
    var matched = filename.match(options.id);
    var name = matched[1];
    data[name] = path.resolve(__dirname, filename);
    return data;
  }, {});
}

exports.fullPath = function(dir) {
  return path.resolve(__dirname, dir);
}

exports.getIP = function(dir) {
  var os = require('os');
  var IPV4 = '127.0.0.1';
  var interfaces = os.networkInterfaces();
  for(var key in interfaces) {
    interfaces[key].some(function(details) {
      if (details.family == 'IPv4' && key == 'en0') {
       IPv4 = details.address;
       return true;
     }
   });
  }
  return IPV4;
}
