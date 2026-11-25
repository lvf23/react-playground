import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/tictactoe">Tic Tac Toe</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>
        </div>
    );
}
