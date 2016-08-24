(function() {
"use strict";

// Base Namespace
var m = {};

// Data Model
m.odel = {
  encryption: "MD5",
  ip: "00.000000",
  key: "69f3752989a4188b52b7e169374ca82a",
  name: "Server Name"
};

// Library / Handler
m.andala = {
  functions:
  {
    init: function ()
    {
      // This is your data binder...
      // m.andala.functions.add (this.add) creates data objects based on the model above and inflates.

      return false;
    },
    add: function ( encryption, ip, key, name )
    {
      m.andala.data.push({encryption:encryption, ip:ip, key:key, name:name});
    }
  },
  data: []
};

m.andala.functions.init();

return m;

})();
