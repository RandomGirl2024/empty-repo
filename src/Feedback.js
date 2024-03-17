import { useState } from "react";
function Feedback(){
    const [score, setScore] = useState(10);
    const [comment, setComment] =  useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Number(score) <= 5 && comment.length <=10){
            alert("Please provide more details");
            setScore(10);
            setComment("");

            return;
        }
    }
    return (
        <div>
            <h4></h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="score">Score: {score}</label>
                <input type="range" min={0} max={10} value={score}
                onChange={(e)=>setScore(e.target.value)}/>
                <textarea value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Feedback;