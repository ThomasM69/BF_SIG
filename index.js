const { Client } = require('pg');

console.log('1')

const client = new Client({
    user: 'thomasmabire',
    host: '127.0.0.1',
    database: 'BD',
    password: 'Rbg47dC',
    port: 5432,
});

console.log('11')

client.connect();

const query = `
INSERT INTO unite_d_enregistrement (id_ue, classe, type)
VALUES (1002,'Groupe', 'Fait' )
`;


client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('data ok');
    client.end();
});
