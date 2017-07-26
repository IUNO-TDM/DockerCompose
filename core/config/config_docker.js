
String.prototype.format = function () {
    var args = [].slice.call(arguments);
    return this.replace(/(\{\d+\})/g, function (a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
    });
};

var self = {};


// ---- Database Credentials ----

var username = 'docker';
var password = 'docker';
var host = 'core-db';
var port = '5432';
var database = 'MarketplaceCore';

// ---- CONFIGURATION EXPORT ----

self.HOST_SETTINGS = {
    OAUTH_SERVER: {
        PROTOCOL: 'http',
        HOST: 'oauth',
        PORT: 3006
    }
};

self.DB_CONNECTION_STRING = 'postgres://{0}:{1}@{2}:{3}/{4}'.format(username, password, host, port, database);
self.LOG_LEVEL = 'debug';
self.OAUTH_CREDENTIALS = {
    CLIENT_ID: 'bdb4c297-45bd-437e-ac90-9179eea41730',
    CLIENT_SECRET: 'IsSecret'
};

module.exports = self;