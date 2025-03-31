import { useState } from "react"
import "./comment.css";
import Commentsform from "./comments_form";

export default function Comment(){
    
    let [comments,setcomments] = useState([{
        username : "gsx",
        remark : "great",
        rating : 1
    }]);

    let addNewcomment = (comment) =>{
        setcomments((currcomments) => [...currcomments, comment]);
        console.log("add new comment");
    };


    return (
        <>
        <div>
            <h3>ALL COMMENTS </h3>
            {comments.map((comments,idx) => (
                <div className="comment" key={idx}>
                <span>{comments.remark}</span>
                &nbsp;
                <span>(rating = {comments.rating})</span>
                &nbsp;
                <p>- {comments.username}</p>
            </div>
            )
            
            )}
            
        </div>
        <hr></hr>
        <Commentsform addNewcomment={addNewcomment}/>
        </>
    );
}