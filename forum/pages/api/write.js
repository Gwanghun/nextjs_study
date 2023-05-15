import {connectDB} from '@/util/database';
import {redirect} from "next/navigation";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {session} from "next-auth/core/routes";
export default async function handler(req, res) {
    let data = req.body;
    let saession = await getServerSession(req, res, authOptions);
    if( saession ){
        data.authoer = session.user.email;
    }
    console.log('api/write.js')
    if( req.method === 'POST' ){


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