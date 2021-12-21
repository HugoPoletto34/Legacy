import { Db, MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB;

let cachedDb: Db;
let cachedClient: MongoClient;


if (!process.env.MONGO_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (!process.env.MONGO_DB) {
  throw new Error('Please add your Mongo DB name to .env.local')
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri);

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db }
}

export default connectToDatabase;
