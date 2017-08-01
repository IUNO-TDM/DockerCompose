/**
 * Created by beuttlerma on 12.06.17.
 */

String.prototype.format = function () {
    var args = [].slice.call(arguments);
    return this.replace(/(\{\d+\})/g, function (a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
    });
};

var self = {

};

self.LOG_LEVEL = 'info';

var username = 'docker';
var password = 'docker';
var host = 'auth-db';
var port = '5432';
var database = 'oauthdb';


self.DB_CONNECTION_STRING = 'postgres://{0}:{1}@{2}:{3}/{4}'.format(username, password, host, port, database);


module.exports = self;