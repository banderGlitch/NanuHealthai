import ProtocolOverviewHeader from "./ProtocolOverviewHeader";

const OBJECTIVES = [
  {
    icon: "local_fire_department",
    iconBg: "bg-red-50 dark:bg-red-900/20",
    iconColor: "text-red-600 dark:text-red-400",
    progressBg: "bg-red-500",
    badge: "High Priority",
    title: "Inflammation Control",
    target: "CRP < 1.0 mg/L",
    progress: 75,
    current: "3.2 mg/L",
    currentColor: "text-red-500",
  },
  {
    icon: "water_drop",
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    progressBg: "bg-blue-500",
    title: "Glucose Stability",
    target: "Avg 85-95 mg/dL",
    progress: 90,
    current: "98 mg/dL",
    currentColor: "text-blue-500",
  },
  {
    icon: "bedtime",
    iconBg: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "text-purple-600 dark:text-purple-400",
    progressBg: "bg-purple-500",
    title: "Deep Sleep Restoration",
    target: "> 90 mins/night",
    progress: 45,
    current: "42 mins",
    currentColor: "text-purple-500",
  },
  {
    icon: "monitor_heart",
    iconBg: "bg-orange-50 dark:bg-orange-900/20",
    iconColor: "text-orange-600 dark:text-orange-400",
    progressBg: "bg-orange-500",
    title: "Lipid Optimization",
    target: "TG/HDL < 1.5",
    progress: 60,
    current: "2.1",
    currentColor: "text-orange-500",
  },
];

function ProtocolOverview({ userName = "Shashank Kumar", onBackToDashboard, onViewWeek1Plan, onOpenChat, onToggleDark }) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-main-light dark:text-text-main-dark min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <ProtocolOverviewHeader onBackToDashboard={onBackToDashboard} onToggleDark={onToggleDark} />

      <main className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-8 gap-8 relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl dark:bg-primary/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5 pointer-events-none" />
        {/* Header Section: Protocol Summary */}
        <section className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-green-800 dark:text-green-300 text-xs font-bold uppercase tracking-wide">
                Active Protocol
              </span>
              <span className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Started Oct 12, 2023</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Metabolic Reset + Energy Optimization
            </h1>
            <p className="text-text-sub-light dark:text-text-sub-dark text-lg">
              Designed for <span className="font-bold text-text-main-light dark:text-white">{userName}</span> by Amara AI
            </p>
          </div>
          {/* Progress Snapshot */}
          <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm min-w-[240px] flex items-center gap-4">
            <div className="relative size-16">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="text-gray-200 dark:text-gray-700"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="100, 100"
                  strokeWidth="3.5"
                />
                <path
                  className="text-primary"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="6, 100"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-text-main-light dark:text-white">
                6%
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Total Completion</span>
              <span className="text-lg font-bold text-text-main-light dark:text-white">Day 5 of 90</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          <div className="flex flex-col gap-2 rounded-2xl p-5 bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Duration</p>
            <p className="text-text-main-light dark:text-white text-2xl font-bold">90 Days</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl p-5 bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Current Phase</p>
            <div className="flex items-center gap-2">
              <span className="text-text-main-light dark:text-white text-2xl font-bold">Reset</span>
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl p-5 bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Focus Area</p>
            <p className="text-text-main-light dark:text-white text-2xl font-bold">Gut Health</p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl p-5 bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-text-sub-light dark:text-text-sub-dark text-sm font-medium">Next Milestone</p>
            <p className="text-text-main-light dark:text-white text-2xl font-bold">Oct 24</p>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Left Column: Primary Objectives */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-white">Primary Health Objectives</h2>
              <button
                type="button"
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                View Full Report
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {OBJECTIVES.map((obj) => (
                <div
                  key={obj.title}
                  className="group p-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-card-light dark:bg-card-dark hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${obj.iconBg} p-2 rounded-lg ${obj.iconColor}`}>
                      <span className="material-icons-round">{obj.icon}</span>
                    </div>
                    {obj.badge && (
                      <span className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-text-sub-light dark:text-text-sub-dark">
                        {obj.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-text-main-light dark:text-white mb-1">{obj.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm text-text-sub-light dark:text-text-sub-dark">Target:</span>
                    <span className="text-base font-semibold text-text-main-light dark:text-white">{obj.target}</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div
                      className={`h-1.5 rounded-full ${obj.progressBg}`}
                      style={{ width: `${obj.progress}%` }}
                    />
                  </div>
                  <p className={`text-xs text-right mt-1 font-medium ${obj.currentColor}`}>Current: {obj.current}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-text-sub-light dark:text-text-sub-dark rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-700">
                #MetabolicHealth
              </span>
              <span className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-text-sub-light dark:text-text-sub-dark rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-700">
                #Longevity
              </span>
              <span className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-text-sub-light dark:text-text-sub-dark rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-700">
                #GutMicrobiome
              </span>
              <span className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 text-text-sub-light dark:text-text-sub-dark rounded-xl text-sm font-medium border border-gray-100 dark:border-gray-700">
                #CircadianRhythm
              </span>
            </div>
          </div>

          {/* Right Column: Protocol Phases */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-text-main-light dark:text-white">Protocol Phases</h2>
            <div className="relative flex flex-col gap-0 border-l-2 border-gray-200 dark:border-gray-700 ml-3.5">
              <div className="relative pl-8 pb-10">
                <div className="absolute -left-[9px] top-1 bg-background-light dark:bg-background-dark p-1">
                  <div className="size-4 rounded-full bg-primary border-2 border-white dark:border-gray-900 shadow-sm" />
                </div>
                <div className="flex flex-col gap-1 p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-text-main-light dark:text-white">Phase 1: Reset</h3>
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Current
                    </span>
                  </div>
                  <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Days 1 - 30</p>
                  <p className="text-sm text-text-main-light dark:text-text-main-dark mt-2">
                    Elimination of inflammatory triggers and gut restoration focus.
                  </p>
                </div>
              </div>
              <div className="relative pl-8 pb-10">
                <div className="absolute -left-[9px] top-1 bg-background-light dark:bg-background-dark p-1">
                  <div className="size-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900" />
                </div>
                <div className="flex flex-col gap-1 opacity-70">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-white">Phase 2: Build</h3>
                  <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Days 31 - 60</p>
                  <p className="text-sm text-text-main-light dark:text-text-main-dark mt-1">
                    Introduction of complex nutrients and strength training integration.
                  </p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute -left-[9px] top-1 bg-background-light dark:bg-background-dark p-1">
                  <div className="size-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900" />
                </div>
                <div className="flex flex-col gap-1 opacity-50">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-white">Phase 3: Sustain</h3>
                  <p className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark">Days 61 - 90</p>
                  <p className="text-sm text-text-main-light dark:text-text-main-dark mt-1">
                    Long-term habit formation and metabolic flexibility.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Assistant CTA Box */}
            <div className="mt-auto p-5 rounded-2xl bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <span className="material-icons-round">smart_toy</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-text-main-light dark:text-white">Ask Amara AI</p>
                  <p className="text-xs text-text-sub-light dark:text-text-sub-dark">Always here to help clarify.</p>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Why is my sleep goal 90m?"
                  className="w-full text-sm pl-4 pr-10 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-primary text-text-main-light dark:text-white placeholder-gray-400 cursor-pointer"
                  onFocus={onOpenChat}
                  onClick={onOpenChat}
                  readOnly
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-primary hover:text-primary-dark transition-colors"
                  onClick={onOpenChat}
                >
                  <span className="material-icons-round text-lg">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <section className="mt-8 flex flex-col md:flex-row items-center justify-between p-6 rounded-2xl bg-card-light dark:bg-card-dark border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none relative z-10">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="hidden sm:flex size-12 rounded-full bg-primary/10 items-center justify-center text-primary">
              <span className="material-icons-round">calendar_month</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-text-main-light dark:text-white">Ready for Week 1?</h3>
              <p className="text-sm text-text-sub-light dark:text-text-sub-dark">
                Your daily tasks and meal plans are ready for review.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/30"
            onClick={onViewWeek1Plan}
          >
            <span>View This Week&apos;s Plan</span>
            <span className="material-icons-round text-lg">arrow_forward</span>
          </button>
        </section>
      </main>
    </div>
  );
}

export default ProtocolOverview;
