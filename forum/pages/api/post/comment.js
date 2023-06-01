import {connectDB} from '@/util/database';
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    if( session ){
        req.body.author = session.user.email;
    }
    else {
        return res.status(500).json({message: '로그인 후 이용 가능 합니다.'});
    }
    if( req.method === 'POST' ){
        const data = req.body;

        if( data.content == '' ){
            return res.status(500).json({message: '내용을 입력해 주세요.'});
        }

        try {
            data.post_id = new ObjectId(data.post_id);
            const db = (await connectDB).db('forum');
            const result = await db.collection('comment').insertOne(data);

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