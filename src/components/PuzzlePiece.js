import React, { useState } from "react";

const PuzzlePiece = ({ puzzleQuestion, puzzleAnswer }) => {
    const [clicked, setClicked] = useState(false);
    const handleShowAnswer = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <div className="puzzle">
                <h1 className="puzzle-question">{puzzleQuestion}</h1>
                <button className="show-button" onClick={handleShowAnswer}>Show/ Hide answer</button>
            </div>
            { clicked && <div className="puzzle-answer">{puzzleAnswer}</div>}
        </>
    );
};

export default PuzzlePiece;
