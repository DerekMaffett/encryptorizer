// (function(exports) {

  var encoder = {
    setMessage: function() {
      return $('#message').val();
    },

    getPassword: function() {
      return prompt('Please enter a password for encryption');
    },

    setUrl: function(message, password) {
      return window.location.href + 'decoder.html?message=' +
        this.encrypt(message, password);
    },

    replaceMessageWithUrl: function(url) {
      $('#message').val('Your message has been encrypted with the given ' +
        'password. Please retrieve it at:' + '\n\n' + url);
    },

    encrypt: function(message, password) {
      cypher = CryptoJS.AES.encrypt(message, password)
      console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, password).toString(CryptoJS.enc.Utf8))
      return cypher
    },

    protect: function() {
      var message = this.setMessage()
      var url = this.setUrl(message, this.getPassword())
      this.replaceMessageWithUrl(url)
    }
  }


// module.exports = encoder;

// })(this);
