function Navbar({ isDark, onToggleDark }) {
  return (
    <nav className="w-full bg-card-light dark:bg-card-dark border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-2xl">science</span>
            <span className="font-bold text-lg tracking-tight">
              AMARA<span className="text-primary">.AI</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Help"
            >
              <span className="material-icons-round text-gray-500 dark:text-gray-400">help_outline</span>
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
            >
              <span className="material-icons-round text-gray-500 dark:text-gray-400">dark_mode</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-green-300 flex items-center justify-center text-white font-bold text-sm shadow-md">
              SK
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
