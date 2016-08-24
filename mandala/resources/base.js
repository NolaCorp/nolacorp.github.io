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
    },
    add: function ( encryption, ip, key, name )
    {
      m.andala.data.push({encryption:encryption, ip:ip, key:key, name:name});
    }
  },
  data: [];
}

return m;
