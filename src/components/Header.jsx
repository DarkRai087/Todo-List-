function Header({ darkMode }) {
    const titleClasses = darkMode ? "text-3xl font-bold text-white" : "text-3xl font-bold text-gray-800";
    const subtitleClasses = darkMode ? "text-gray-300 mt-2" : "text-gray-600 mt-2";
  
    return (
      <div className="text-center">
        <h1 className={titleClasses}>To-Do List</h1>
        <p className={subtitleClasses}>Keep track of your tasks</p>
        <p className={subtitleClasses}>By Parth Pandey For Intershall</p>
      </div>
    );
  }
  
  export default Header;