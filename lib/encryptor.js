(function(exports) {

  var encoder = {
    setMessage: function() {

    },
    getPassword: function() {

    },
    setUrl: function() {

    },
    replaceMessageWithUrl: function () {

    },
    encrypt: function() {
      cypher = CryptoJS.AES.encrypt(this.message, this.password)
      console.log("Verified: " +
        CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
      return cypher
    },
    protect: function() {
      this.setMessage()
      this.getPassword()
      this.setUrl()
      this.replaceMessageWithUrl()
    }
  }

module.exports = encoder;

})(this);
