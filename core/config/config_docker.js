
String.prototype.format = function () {
    var args = [].slice.call(arguments);
    return this.replace(/(\{\d+\})/g, function (a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
    });
};

var self = {};
self.LOG_LEVEL = 'info';

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
        HOST: 'auth',
        PORT: 3006
    },
    PAYMENT_SERVICE: {
        PROTOCOL: 'http',
        HOST: 'payment_core',
        PORT: 8080
    },
    BIT_COIN_VAULT: {
        PROTOCOL: 'http',
        HOST: 'vault',
        PORT: 8081
    }
};

self.DB_CONNECTION_STRING = 'postgres://{0}:{1}@{2}:{3}/{4}'.format(username, password, host, port, database);
self.LOG_LEVEL = 'debug';
self.OAUTH_CREDENTIALS = {
    CLIENT_ID: 'adb4c297-45bd-437e-ac90-9179eea41745',
    CLIENT_SECRET: 'IsSecret'
};

self.USER = {
    uuid: 'adb4c297-45bd-437e-ac90-9179eea41735',
    roles: ['MarketplaceCore']
};



module.exports = self;