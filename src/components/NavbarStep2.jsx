function NavbarStep2({ onBack }) {
  return (
    <nav className="sticky top-0 z-50 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={onBack}
              aria-label="Go back"
            >
              <span className="material-icons-round text-gray-500 dark:text-gray-400">arrow_back</span>
            </button>
            <span className="font-bold text-xl tracking-tight text-text-main-light dark:text-text-main-dark">PROTOCOL</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex flex-col items-end mr-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Step 2 of 4</span>
              <span className="text-sm text-text-sub-light dark:text-text-sub-dark">Health Metrics</span>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm">
              <span className="material-icons-round text-gray-400 dark:text-gray-300">person</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarStep2;
