function Week1ProtocolHeader({ onBack, onOpenChat, onToggleDark }) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-card-dark px-6 lg:px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-text-main-light dark:text-white">
        <span className="material-icons-round text-primary text-3xl">local_florist</span>
        <h2 className="text-text-main-light dark:text-white text-lg font-bold leading-tight tracking-tight">
          Amara Health
        </h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-8">
          <button
            type="button"
            className="text-sm font-medium text-text-main-light dark:text-white hover:text-primary transition-colors"
            onClick={onBack}
          >
            Dashboard
          </button>
          <button
            type="button"
            className="text-primary text-sm font-bold border-b-2 border-primary pb-0.5"
            onClick={onBack}
          >
            My Protocol
          </button>
          <a className="text-sm font-medium text-text-main-light dark:text-white hover:text-primary transition-colors" href="#">
            Community
          </a>
          <a className="text-sm font-medium text-text-main-light dark:text-white hover:text-primary transition-colors" href="#">
            Settings
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group"
            onClick={onOpenChat}
          >
            <span className="material-icons-round text-primary text-xl group-hover:scale-110 transition-transform">chat</span>
            <span className="text-sm font-bold text-text-main-light dark:text-white">Chat with Amara AI</span>
          </button>
          {onToggleDark && (
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-text-sub-light dark:text-text-sub-dark transition-colors"
              onClick={onToggleDark}
              aria-label="Toggle theme"
            >
              <span className="material-icons-round dark:hidden">dark_mode</span>
              <span className="material-icons-round hidden dark:block">light_mode</span>
            </button>
          )}
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-300 dark:border-gray-600 flex items-center justify-center">
            <span className="material-icons-round text-gray-500 dark:text-gray-400">person</span>
          </div>
        </div>
      </div>
      <button type="button" className="md:hidden p-2 text-text-main-light dark:text-white">
        <span className="material-icons-round">menu</span>
      </button>
    </header>
  );
}

export default Week1ProtocolHeader;
