function ToDoItem({ 
    todo, 
    onDelete, 
    onToggleComplete, 
    isEditing, 
    editValue, 
    setEditValue, 
    onStartEditing, 
    onSaveEdit, 
    onCancelEdit,
    darkMode
  }) {

    if (!todo) return null;
  
    const handleEditInputKeyPress = (e) => {
      if (e.key === 'Enter') {
        onSaveEdit();
      } else if (e.key === 'Escape') {
        onCancelEdit();
      }
    };
  
    const itemClasses = darkMode
      ? "p-3 bg-gray-700 border border-gray-600 rounded-lg shadow-sm"
      : "p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm";
  
    const editInputClasses = darkMode
      ? "flex-grow p-1 border border-gray-600 bg-gray-800 text-white rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      : "flex-grow p-1 border border-gray-300 rounded mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  
    const textClasses = todo.completed
      ? `ml-3 line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`
      : `ml-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`;
  
    return (
      <li className={itemClasses}>
        {isEditing ? (
          <div className="flex items-center">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleEditInputKeyPress}
              className={editInputClasses}
              autoFocus
            />
            <button 
              onClick={onSaveEdit}
              className="bg-green-500 text-white px-2 py-1 rounded mr-1 text-sm hover:bg-green-600 focus:outline-none"
            >
              Save
            </button>
            <button 
              onClick={onCancelEdit}
              className="bg-gray-500 text-white px-2 py-1 rounded text-sm hover:bg-gray-600 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className={textClasses}>
                {todo.text}
              </span>
            </div>
            <div>
              <button 
                onClick={() => onStartEditing(todo.id, todo.text)}
                className="text-blue-500 hover:text-blue-300 mr-2 focus:outline-none"
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete(todo.id)}
                className="text-red-500 hover:text-red-300 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </li>
    );
  }
  
  export default ToDoItem;