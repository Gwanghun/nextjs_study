import {connectDB} from '@/util/database';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    if( session ){
        req.body.author = session.user.email;
    }
    if( req.method === 'POST' ){
        const data = req.body;

        if( data.title == '' ){
            return res.status(500).json({message: '제목을 입력해 주세요.'});
        }
        if( data.content == '' ){
            return res.status(500).json({message: '내용을 입력해 주세요.'});
        }

        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').insertOne(data);

            if( result.acknowledged === true ) {
                return res.status(200).redirect(302, '/list');
            }
            else {
                return res.status(500).json({message: 'fail'});
            }
        }
        catch (e) {
            return res.status(500).json({message: 'fail'});
        }

    }

}