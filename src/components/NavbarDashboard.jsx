function NavbarDashboard({ onToggleDark }) {
  return (
    <nav className="bg-surface-light dark:bg-surface-dark border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <span className="material-icons-round text-primary text-3xl">spa</span>
            <span className="font-bold text-xl tracking-tight">AMARA</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-subtext-light dark:text-subtext-dark">
            <a className="text-primary hover:text-primary-dark transition-colors" href="#">
              Dashboard
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              My Protocol
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Reports
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Community
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-subtext-light dark:text-subtext-dark"
              onClick={onToggleDark}
              aria-label="Toggle dark mode"
            >
              <span className="material-icons-round">dark_mode</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-200 dark:border-gray-600 flex items-center justify-center">
              <span className="material-icons-round text-gray-500 dark:text-gray-400 text-sm">person</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarDashboard;
