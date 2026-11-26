import { useState } from "react";

import { Button } from "@/components/ui/button";

function Square({ value, onSquareClick, className }) {
    const classNames = ["square", className].filter((c) => c).join(" ");

    return (
        <button className={classNames} onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay, currentIndex }) {
    function handleClick(i, row, col) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }

        onPlay(nextSquares, row, col, nextSquares[i], i);
    }

    const winner = calculateWinner(squares);

    let status;

    if (winner) {
        status = "Winner: " + winner.player;
    } else if (squares.every((squareValue) => squareValue !== null)) {
        status = "Draw!";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const rows = [];

    for (let row = 0; row < 3; row++) {
        const rowSquares = [];

        for (let col = 0; col < 3; col++) {
            const index = row * 3 + col;

            const classNames = [
                winner && winner.line.includes(index) && "winner",
                index === currentIndex && "current",
            ]
                .filter(Boolean)
                .join(" ");

            rowSquares.push(
                <Square
                    className={classNames}
                    key={index}
                    value={squares[index]}
                    onSquareClick={() => handleClick(index, row, col)}
                />
            );
        }

        rows.push(
            <div className="board-row" key={row}>
                {rowSquares}
            </div>
        );
    }

    return (
        <>
            <div className="status">{status}</div>
            {rows}
        </>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return {
                player: squares[a],
                line: [a, b, c],
            };
        }
    }
    return null;
}

function Game() {
    const [history, setHistory] = useState([
        {
            row: -1,
            col: -1,
            squares: Array(9).fill(null),
        },
    ]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);

    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove] && history[currentMove].squares;
    const currentIndex = history[currentMove] && history[currentMove].index;

    function handlePlay(nextSquares, row, col, player, index) {
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            { squares: nextSquares, row, col, player, index },
        ];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((historyItem, move) => {
        let description;

        if (move > 0) {
            description =
                "Go to move #" +
                move +
                ` (${historyItem.row}, ${historyItem.col}) ${historyItem.player}`;
        } else {
            description = "Go to game start";
        }

        return (
            <li key={move}>
                {move && move === currentMove ? (
                    `You are at move #${move} (${historyItem.row}, ${historyItem.col}) ${historyItem.player}`
                ) : (
                    <Button onClick={() => jumpTo(move)}>{description}</Button>
                )}
            </li>
        );
    });

    if (!isAscending) {
        moves.reverse();
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    currentIndex={currentIndex}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <button onClick={() => setIsAscending(!isAscending)}>
                    Sort {isAscending ? "descending" : "ascending"}
                </button>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default function TicTacToe() {
    return <Game />;
}
