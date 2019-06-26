const orm = require('./config/orm');

// Using callbacks.
orm.getAllPartyNames((parties) => {
    parties.forEach(party => { console.log(party.party_name); });
    console.log('------------------------------------');
});

// Using promises.
orm.getAllClients()
    .then((clients) => {
        clients.forEach(client => { console.log(client.client_name); });
        console.log('------------------------------------');
    });

// Using promises with async/await.
const logGrownupParties = async () => {
    const parties = await orm.getGrownupParties();
    parties.forEach(party => { console.log(party.party_name); });
    console.log('------------------------------------');
}

logGrownupParties();

orm.connection.end();