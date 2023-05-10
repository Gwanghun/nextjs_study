import {connectDB} from '@/util/database';
export default async function handler(req, res) {
    console.log('api/test.js')
    if( req.method === 'POST' ){
        const client = await connectDB;
        const db = client.db('forum');

        let result = await db.collection('post').find().toArray();

        return res.status(200).json(result);
    }

}