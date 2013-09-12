var convict = require('convict');

var conf = convict({
    ip: {
        doc: "The IP address to bind.",
        format: "ipaddress",
        default: "127.0.0.1",
        env: "IP_ADDRESS"
    },
    port: {
        doc: "The port to bind.",
        format: "port",
        default: 1234,
        env: "PORT"
    }
});
try {
    conf.loadFile("./config.json");
} catch(e){
    console.log("Using default configuration settings.");
    console.log("Create ./config.json to change from the defaults, or set environment variables.");
}
conf.validate();
module.exports = conf;
