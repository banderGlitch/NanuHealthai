function LandingNavbar({ onToggleDark, onGetStarted }) {
  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 dark:bg-card-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="material-icons-round text-primary text-3xl">bolt</span>
            <span className="font-bold text-xl tracking-tight">PROTOCOL</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#how-it-works">
              How it Works
            </a>
            <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#science">
              Science
            </a>
            <a className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary dark:hover:text-primary transition-colors" href="#reviews">
              Reviews
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="text-sm font-medium text-muted-light dark:text-muted-dark hover:text-primary"
              onClick={onGetStarted}
            >
              Log in
            </button>
            <button
              type="button"
              className="bg-primary hover:bg-opacity-90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
              onClick={onGetStarted}
            >
              Get Started
            </button>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-muted-light dark:text-muted-dark transition-colors"
              onClick={onToggleDark}
              aria-label="Toggle theme"
            >
              <span className="material-icons-round text-xl dark:hidden">dark_mode</span>
              <span className="material-icons-round text-xl hidden dark:block">light_mode</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default LandingNavbar;
