var dns = require('dns');
var w3 = dns.lookup('seller.indiamart.com', function (err, addresses, family) {
  console.log(family);
  console.log(addresses);
});

var w4 = dns.reverse('35.190.81.165',function(err,host){
  console.log(host);

})