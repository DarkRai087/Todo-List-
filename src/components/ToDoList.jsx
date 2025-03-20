import ToDoItem from './ToDoItem';

function ToDoList({ 
  todos, 
  onDelete, 
  onToggleComplete, 
  editingId, 
  editValue, 
  setEditValue, 
  onStartEditing, 
  onSaveEdit, 
  onCancelEdit,
  darkMode
}) {

  const todoItems = Array.isArray(todos) ? todos : [];

  const headingClasses = darkMode 
    ? "text-xl font-semibold text-gray-200 mb-3" 
    : "text-xl font-semibold text-gray-700 mb-3";

  const emptyMessageClasses = darkMode
    ? "text-center text-gray-400 mt-6"
    : "text-center text-gray-500 mt-6";

  return (
    <div className="mt-6">
      <h2 className={headingClasses}>Your Tasks</h2>
      
      {todoItems.length === 0 ? (
        <p className={emptyMessageClasses}>No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-2">
          {todoItems.map(todo => (
            <ToDoItem 
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggleComplete={onToggleComplete}
              isEditing={editingId === todo.id}
              editValue={editValue}
              setEditValue={setEditValue}
              onStartEditing={onStartEditing}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
              darkMode={darkMode}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;