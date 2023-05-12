'use client'

import Link from "next/link";

export default function ListItem( { result }){

	return (
		<div className="list-item">
			{
        result.map((item, index) => {
          return (
            <div className="list-item" key={index}>
              <Link href={`/detail/${item._id}`}>
                  <h4>{item.title}</h4>
              </Link>
              <Link href={`/edit/${item._id}`}> ✏️ </Link>
              <span onClick={(e)=>{
								fetch(`/api/post/delete`, {
									method: 'POST',
									body: JSON.stringify({_id: item._id})
								}).then((res)=>{
									return res.json();
								}).then((res)=>{
									e.target.parentElement.style.opacity = 0;
									setTimeout(()=>{
										e.target.parentElement.style.display = 'none';
									}, 1000)
								})
	              // fetch(`/api/abc/kim`)
              }}> ❌ </span>
              <p>{item.content}</p>
            </div>
          )
        })
      }
		</div>
	)
}