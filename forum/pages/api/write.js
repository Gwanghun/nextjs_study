import {connectDB} from '@/util/database';
import {redirect} from "next/navigation";
export default async function handler(req, res) {
    console.log('api/write.js')
    if( req.method === 'POST' ){
        const data = req.body;

        const client = await connectDB;
        const db = client.db('forum');
        const result = await db.collection('post').insertOne(data);

        if( result.acknowledged === true ) {
            return res.status(200).json({message: 'success'});
        }
        else {
            return res.status(500).json({message: 'fail'});
        }
    }

}