import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
	if (req.method === 'GET') {
		const post_id = req.query.post_id;
		if (post_id) {
			const db = (await connectDB).db('forum');
			const result = await db.collection('comment').find({post_id: new ObjectId(post_id)}).toArray();
			console.log(result);

			return res.status(200).json(result);
		} else {
			return res.status(500).json({message: '게시글을 확인해 주세요.'});
		}
	}
}