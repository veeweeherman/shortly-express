var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
    tableName: 'users',
    // initialize: 
    links: function() {
        return this.hasMany(Link);
    }

});

module.exports = User;