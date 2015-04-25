define(['./opts'], function (opts) {
  var data = {
    matrix:  [
      [1, 1, 1, 1],
      [2, 2, 2, 2]
    ],
    opts: opts
  };
  
  
  //Use a resolver to have a better control of the data we send
  function get(param) {
    var s = param,
      o = data;
    
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
  }
  //We only expose the get setting
  return {'get' : get};
});