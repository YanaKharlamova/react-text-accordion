import React from "react";
import { Data } from "./Data";
import PuzzlePiece from './PuzzlePiece';

const Accordion = () => {
    return (
        <div className="accordion-container">
            {Data.map((puzzle, index) => (
                <PuzzlePiece
                    key={index}
                    puzzleQuestion={puzzle.question}
                    puzzleAnswer={puzzle.answer}
                />
            ))}
        </div>);
};
export default Accordion;
