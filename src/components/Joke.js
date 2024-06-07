import React from "react";
import ReactDOM from "react-dom";
export default function Joke(props){
    const [isShown, setIsShown]=React.useState(false)
    function toggle(){
        setIsShown((prevIsShown) => !prevIsShown)
    }
    return (
        <div>
            <h4>Setup:{props.Setup}</h4>
            <button onClick={toggle}>{isShown?"Hide":"Show"} Punchline</button>
            {isShown && <p>Punchline:{props.Punchline}</p>}
            <hr />
        </div> 

        // <div>
        //     <h4>Setup:{props.Setup}</h4>
        //     <p>Punchline:{props.Punchline}</p>
        //     <p><span>Upvotes:{props.upVotes}  Downvotes:{props.downVotes}</span></p>
        //     <hr />
        // </div>    
    )
}