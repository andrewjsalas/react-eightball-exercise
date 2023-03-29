import React, { useState } from "react";
import "../static/eightball.css"

function Answer(array) {
    const randomAnswer = Math.floor(Math.random() * array.length);
    return array[randomAnswer];
}

function EightBall(props) {
    const [msg, setMsg] = useState("Ask a question.");
    const [color, setColor] = useState("black");
    const [reset, setReset] = useState(false);

    function handleClick() {
        const { msg, color } = Answer(props.answers);
        setMsg(msg);
        setColor(color);
        setReset(false);
    }

    function handleReset() {
        setMsg("Ask a question.");
        setColor("black");
        setReset(true);
    }

    return (
        <div className="eightball-container">
            <h1 className="eightball-header">Ask the Magic Eight Ball a Question!</h1>
            <h2 className="eightball-subheader">Click to generate an answer!</h2>
            <div 
                className="eightball"
                onClick={handleClick}
                style={{ backgroundColor: color }}
            >
                <b className="eight-ball-msg">{msg}</b>
            </div>
                <button 
                    className="reset-button" 
                    onClick={handleReset}
                >
                    Reset
                </button>
        </div>
    );
}

EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};


export default EightBall;