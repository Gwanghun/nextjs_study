import {connectDB} from '@/util/database';
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";
import ListItem from "@/app/list/ListItem";

export const revalidate = 20;
export const dynamic = 'force-dynamic'      // 다이나믹 랜더링으로 변경

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