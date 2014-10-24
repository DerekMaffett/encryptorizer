var decoder = {
  decrypt: function(cypher, password) {
    return CryptoJS.AES.decrypt(cypher, password).toString(CryptoJS.enc.Utf8);
  },

  getCypher: function() {
    return window.location.search.replace(/^\?message=/, '');
  },

  getPassword: function() {
    return prompt('Please input the password matched with this message');
  },

  printDecodedMessage: function(message) {
    $('#message').empty();
    $('#message').append("<div>Here is your message: <p>" + message + '</p></div>');
  },

  decodeMessage: function() {
    var cypher = this.getCypher();
    var message = this.decrypt(cypher, this.getPassword());
    this.printDecodedMessage(message);
  }
}
