'use client'

import {useRouter} from "next/navigation";

export default function DetailLink() {
    let router = useRouter();   // 클라이언트 컴포넌트에서 사용 가능
    return (
        <button onClick={()=>{ router.push('/list') }}> 버튼 </button>
    )
}

/**
 * router.back() : 이전 페이지로 이동
 * router.forward() : 다음 페이지로 이동
 * router.refresh() : 새로고침
 * router.prefetch() : 미리 로딩 <Link> 태그에 prefetch 기능이 내장 되어 있음.
 */