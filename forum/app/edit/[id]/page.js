import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Edit(props){
    const client = await connectDB;
    const db = client.db('forum');

    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)});
    console.log(result);

    return (
        <div className="p-20">
            <h4> 글 수정 </h4>
            <form action="/api/post/edit" method="POST">
                <div>
                    <input type="text" name="title" placeholder="제목" defaultValue={result.title}/>
                </div>
                <div>
                    <textarea name="content" placeholder="내용">{result.content}</textarea>
                </div>
                <div>
                    <input type="hidden" name="_id" defaultValue={result._id.toString()}/>
                    <button type="submit"> 글수정 </button>
                </div>
            </form>
        </div>
    );
}