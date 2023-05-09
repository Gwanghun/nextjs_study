import {connectDB} from '@/util/database';
import {ObjectId} from "mongodb";
export default async function Detail(props) {
    const client = await connectDB;
    const db = client.db('forum');

    let result = await db.collection('post').findOne({_id: new ObjectId('6451a0e5238ff2a0365a29e7')})

    console.log(props)

    return (
        <div>
            <h4> 상세페이지 </h4>
            <h4> {result.title} </h4>
            <p> {result.content} </p>
        </div>
    )
}