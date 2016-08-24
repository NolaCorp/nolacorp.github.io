// Base Namespace
var m;

// Data Model
m.odel = 
{
  encryption: "",
  ip: 00.000000,
  key:,
  name: ""
};

// Library / Handler
m.andala = 
{
  functions:
  {
    init: function ()
    {
      // This is your data binder...
      // m.andala.functions.add (this.add) creates data objects based on the model above and inflates. 
    },
    add: function ( encryption, ip, key, name )
    {
      m.andala.data.push({encryption:encryption, ip:ip, key:key, name:name});
    }
  },
  data: [];
}

m.andala.functions.init();

return m;
