function ProtocolOverviewHeader({ onBackToDashboard, onToggleDark }) {
  return (
    <header className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-card-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="material-icons-round text-primary text-3xl">spa</span>
            <span className="font-bold text-xl tracking-tight text-text-main-light dark:text-text-main-dark">Amara AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors"
              onClick={onBackToDashboard}
            >
              Dashboard
            </button>
            <button
              type="button"
              className="text-sm font-medium text-primary font-bold"
              onClick={onBackToDashboard}
            >
              My Protocol
            </button>
            <a className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors" href="#">
              Reports
            </a>
            <a className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors" href="#">
              Settings
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
            >
              Check In
            </button>
            {onToggleDark && (
              <button
                type="button"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors"
                onClick={onToggleDark}
                aria-label="Toggle theme"
              >
                <span className="material-icons-round text-xl dark:hidden">dark_mode</span>
                <span className="material-icons-round text-xl hidden dark:block">light_mode</span>
              </button>
            )}
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600">
              <span className="material-icons-round text-gray-500 dark:text-gray-400 text-sm">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ProtocolOverviewHeader;
