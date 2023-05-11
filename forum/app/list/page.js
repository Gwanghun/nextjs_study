import {connectDB} from '@/util/database';
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function List(){
    const client = await connectDB;
    const db = client.db('forum');

    let result = await db.collection('post').find().toArray();
    // console.log(result[0])

    return (
        <div className="list-bg">
            {
                result.map((item, index) => {
                    return (
                        <div className="list-item" key={index}>
                            <Link href={`/detail/${item._id}`}>
                                <h4>{item.title}</h4>
                            </Link>
                            <Link href={`/edit/${item._id}`}> ✏️ </Link>
                            {/*<DetailLink></DetailLink>*/}
                            <p>{item.content}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}