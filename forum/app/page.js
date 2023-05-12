import {connectDB} from "@/util/database";

export const revalidate = 60;

export default async function Home() {
    const client = await connectDB;
    const db = client.db('forum');

    let result = await db.collection('post').find().toArray()
    // console.log(result)

    // 캐싱 기능
    // await fetch('/URL', {cache: 'force-cache'}) // no-store, {cache: 'force-cache'}, {cache: 'no-cache'}
    // { next: { revalidate: 60 } }

    return (
        <div>안녕</div>
    )
}
