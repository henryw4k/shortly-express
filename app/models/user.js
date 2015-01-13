var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  // tableName: 'users',
  // defaults: {
  //   username: '',
  //   password: '',
  //   hashPassword: ''
  // },
  // initialize: function(){
  //   this.on('creating', function(model, attrs, options){
  //     bcrypt.hash(password,10,function(err, hash){
  //         model.set('hashPassword',hash);
  //     });
  //   });
  // }
});

module.exports = User;
