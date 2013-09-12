var config = require('../config');
var request = require('request');
var should = require('should');

var url = "http://" + config.get("ip") + ":" + config.get('port');

describe('The webserver', function(){
    it('should serve the index page', function(done){
        request.get(url,function(e,r,b){
            should.not.exist(e);
            should.exist(b);
            r.should.have.status(200);
            r.should.be.html;
            done();
        });
    });
});
