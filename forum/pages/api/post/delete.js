import {connectDB} from '@/util/database';
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    if( req.method === 'POST' ){
        const data = JSON.parse(req.body);

        if( data._id === '' ){
            return res.status(500).json({message: '게시글을 확인해 주세요.'});
        }

        try {
            const db = (await connectDB).db('forum');
            const result = await db.collection('post').deleteOne({_id: new ObjectId(data._id)});
            console.log(result);

            if( result.acknowledged === true && result.deletedCount === 1 ) {
                // return res.status(200).redirect(302, '/list');
                return res.status(200).json({message: 'success'});
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