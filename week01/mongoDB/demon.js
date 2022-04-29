const {MongoClient} = require('mongodb');

async function main(){
const uri  = 'mongodb+srv://mmxchris:17o1w0rf@cluster0.rw494.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);

try{
await client.connect();

await listDatabases(client);

} catch (e) {
    console.log(e);
} finally {
    await client.close();
}

}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`-${db.name}`);
    });
    
}