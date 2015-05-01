define(['./opts'], function (opts) {
  var data = {
    matrix:  [
      [1, 1, 1, 1],
      [2, 2, 2, 2]
    ],
    crane: {
      basex : 0,
      firstrotate: 0,
      secondrotate: -0.9,
      thirdrotate: 0.9
    },
    ship: {
      basex : 0,
      basez : -300
    },
    cabinCamera: false,
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
  //Use a resolver to have a better control of the data we send
  function set(param, val) {
    var s = param,
      o = data;
    
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            //If we're on the last parent, assign the value
            if(i == n - 1){
              o[k] = val;
            } else {
              //Otherwise, keep looing for o
              o = o[k];
            }
            
        } else {
            return;
        }
    }
  }
  
  function increment(param, diff) {
    this.set(param, this.get(param) + diff);
  }
  //We only expose the get setting
  return {'get' : get, 'set' : set, 'increment' : increment};
});