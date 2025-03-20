import { useState, useEffect } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setInputValue('');
    }
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    if (editingId === id) {
      setEditingId(null);
    }
  };


  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };


  const startEditing = (id, text) => {
    setEditingId(id);
    setEditValue(text);
  };


  const saveEdit = () => {
    if (editValue.trim() !== '') {
      setTodos(todos.map(todo => 
        todo.id === editingId ? { ...todo, text: editValue } : todo
      ));
      setEditingId(null);
      setEditValue('');
    }
  };


  const cancelEdit = () => {
    setEditingId(null);
    setEditValue('');
  };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const mainClasses = darkMode
    ? "min-h-screen bg-gray-900 text-white py-6 flex flex-col justify-center sm:py-12"
    : "min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12";

  const cardClasses = darkMode
    ? "relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20"
    : "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20";

  const inputClasses = darkMode
    ? "flex-grow p-2 border border-gray-600 bg-gray-700 text-white rounded-1 focus:outline-none focus:ring-0 focus:ring-blue-500"
    : "flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-0 focus:ring-blue-500";

  return (
    <div className={mainClasses}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className={cardClasses}>
          <div className="absolute right-4 top-4">
            <button 
              onClick={toggleDarkMode} 
              className={`rounded-full p-2 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <Header darkMode={darkMode} />
          
          <div className="mt-4">
            <div className="flex mt-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new task..."
                className={inputClasses}
              />
              <button 
                onClick={addTodo}
                className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
              >
                Add
              </button>
            </div>
            
            <ToDoList 
              todos={todos}
              onDelete={deleteTodo}
              onToggleComplete={toggleComplete}
              editingId={editingId}
              editValue={editValue}
              setEditValue={setEditValue}
              onStartEditing={startEditing}
              onSaveEdit={saveEdit}
              onCancelEdit={cancelEdit}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;