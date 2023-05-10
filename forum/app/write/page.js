export default function Write() {
    return (
        <div className="p-20">
            <h4> 글쓰기 </h4>
            <form action="/api/post/new" method="POST">
                <div>
                    <input type="text" name="title" placeholder="제목"/>
                </div>
                <div>
                    <textarea name="content" placeholder="내용"></textarea>
                </div>
                <div>
                    <button type="submit"> 글쓰기 </button>
                </div>
            </form>
        </div>
    );
}
