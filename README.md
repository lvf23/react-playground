# React Playground

This project implements the tic-tac-toe game from the React tutorial, built with React and Vite. It also demonstrates navigation between pages with React Router, serving as a hands-on playground for learning React concepts.

## Features

- Alternating turns between players X and O.
- Win and draw detection.
- Highlights the winning line and the selected move.
- Navigable move history showing each move's player and position.
- Sorts the move history in ascending or descending order.
- Navigation between the home page and the tic-tac-toe page.

> Positions use zero-based indices: the top-left square is `(0, 0)`.

## Routes

- `/`: Home page.
- `/tictactoe`: Tic-tac-toe game.

## Requirements

- Node.js
- npm

## Getting started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will show the local URL to open in your browser.

## Available commands

| Command           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Starts the development server.                            |
| `npm run build`   | Creates a production build in `dist/`.                    |
| `npm run preview` | Previews the production build. Run `npm run build` first. |
| `npm run lint`    | Runs ESLint.                                              |
| `npm run format`  | Formats files with Prettier.                              |

## Main project files

- `src/App.jsx`: page navigation and route configuration.
- `src/pages/Home.jsx`: home page component.
- `src/pages/TicTacToe.jsx`: game components, rules, and move history.
- `src/styles.css`: board styles and highlights.
- `src/main.jsx`: initializes the React application and configures `BrowserRouter`.
- `index.html`: HTML page that loads the application.

## Technologies

- React
- React Router
- Vite
- JavaScript
- CSS

## Changelog and Versioning

This project uses [SemVer](https://semver.org) for versioning. For the versions available, see the [CHANGELOG.md](./CHANGELOG.md).

## License

This project is licensed under the [MIT License](LICENSE).
