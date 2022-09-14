const dns = require("dns");

dns.lookup("google.com", (err, address, family) => {
    if(err) console.log(err);
    console.log('address: %s, family: IPV%s', address, family);
});

dns.resolve4("yahoo.com", (err, addressess) => {
    if(err) throw err;
    console.log(`address: ${JSON.stringify(addressess)}`);

    addressess.forEach((a) => {
        dns.reverse(a, (err, hostname) => {
            if(err) throw err;
            console.log(`reverse for ${a}: ${JSON.stringify(hostname)}`);
        });
    });
});

console.log("getServers: ");
console.log(dns.getServers());

dns.lookupService("142.250.199.174", 22, (err, hostname, service) => {
    if(err) throw err;
    console.log(hostname);
    console.log(service);
});

// console.log(dns.resolveSoa());

// rTypes - 'A', 'AAA', 'CNAME', 'MX', 'NS'
// errorCodes: NODATA, SERVFAIL, REFUSED, TIMEOUT, BADQUERY