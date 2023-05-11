import {connectDB} from '@/util/database';
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";
import ListItem from "@/app/list/ListItem";

export default async function List(){
    const client = await connectDB;
    const db = client.db('forum');

    let result = await db.collection('post').find().toArray();
    // console.log(result[0])

    return (
        <div className="list-bg">
            <ListItem result={result}></ListItem>
        </div>
    )
}