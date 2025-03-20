# React To-Do List App

A simple and elegant To-Do List application built with React and styled with Tailwind CSS. This application allows users to add, delete, edit, and mark tasks as completed.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as completed
- ✅ Delete tasks
- ✅ Edit existing tasks
- ✅ Responsive design with Tailwind CSS

## Project Structure

The application consists of the following components:

- **App**: Main component that manages the application state
- **Header**: Displays the application title and branding
- **ToDoList**: Container for rendering all to-do items
- **ToDoItem**: Individual to-do item with completion and delete functionality

## Technologies Used

- React (Vite)
- Tailwind CSS
- JavaScript ES6+

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (normally comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you use yarn
   yarn install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
# or if you use yarn
yarn dev
```

The application will be available at http://localhost:5173 (or another port if 5173 is already in use).

## Building for Production

To create a production build:

```bash
npm run build
# or if you use yarn
yarn build
```

The build files will be located in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
# or if you use yarn
yarn preview
```

## Usage Instructions

1. **Adding a task**: Type your task in the input field and press Enter or click the "Add" button.
2. **Completing a task**: Click the checkbox next to a task to mark it as completed.
3. **Editing a task**: Click the edit (pencil) icon next to a task to enter edit mode, then update the text and save.
4. **Deleting a task**: Click the delete (trash) icon next to a task to remove it from the list.

## Project Structure

```
react-todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ToDoList.jsx
│   │   └── ToDoItem.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```
