const connection = require('./connection');

const orm = {};

// Using callbacks.
orm.getAllPartyNames = (cb) => {
    const query = 'SELECT party_name FROM parties';

    connection.query(query, (err, res) => {
        if (err) throw err;

        cb(res);
    });
};

// Using promises.
orm.getAllClients = () => new Promise((resolve, reject) => {
    const query = 'SELECT client_name FROM parties_db.clients;';

    connection.query(query, (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    });
});

// Using promises in ES5.
orm.getGrownupParties = function () {
    return new Promise((resolve, reject) => {
        var query = 'SELECT party_name FROM parties WHERE ?;';

        connection.query(query, { 'party_type': 'grown-up' }, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};

orm.logClientParties = () => {
    const query = 'SELECT clients.client_name, parties.party_name FROM clients LEFT JOIN parties ON clients.id = parties.client_id;'

    connection.query(query, { 'party_type': 'grown-up' }, (err, res) => {
        if (err) throw err;

        console.log(res);
    });
};

orm.connection = connection;

module.exports = orm;