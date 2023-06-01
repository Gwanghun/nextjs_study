'use client'

import {useEffect, useState} from "react";

export default function Comment( props ){
    let [comment, setComment] = useState('');
    let [data, setData] = useState([]);

    function getComment(){
      let body = {
        post_id: props.post_id
      }
      const queryString = new URLSearchParams(body).toString();
      const url = `/api/get/comment?${queryString}`;
      fetch(url)
        .then(r=>r.json())
        .then((res) => {
          console.log(res);
          setData(res);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // 코드 보관함, ajax 요청, 타이머 등
    // 1. html 로드/재랜더링될 때 마다 실행 됨.
    // 2. html 보여준 후에 실행됨.
    useEffect(()=>{
      getComment();
    },[])

    return (
        <div>
            <hr/>
            <div> 댓글목록보여줄 부분 </div>
            {
              data.length > 0 ?
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <p> {item.content} </p>
                  </div>
                )
              })
              : "댓글이 없습니다."
            }
            <input type="text" id={'comment'} onChange={(e)=>{ setComment(e.target.value) }}/>
            <button onClick={()=>{
                let body = {
                    content: comment,
                    post_id: props.post_id
                }
                fetch('/api/post/comment', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {'Content-Type': 'application/json'}
                }).then((res)=>{
                    if( res.status === 200 ){
                        document.querySelector('#comment').value = '';
                        getComment();
                    }
                    else {
                        alert('댓글 전송 실패');
                        return false;
                    }
                })
            }}> 댓글전송 </button>
        </div>
    )
}