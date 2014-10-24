var encoder = require('../lib/encryptor.js');
var should = require('chai').should();
var $ = require('jquery');
// var page = require('webpage').create();

describe('encryptor functions', function() {
  describe('#setMessage', function() {
    it('should return a message as input', function() {
      $('#message').val('here is a message');
      encoder.setMessage().should.equal('here is a message');
    })
  })
})
