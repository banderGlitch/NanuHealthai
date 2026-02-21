import { useState } from "react";
import Week1ProtocolHeader from "./Week1ProtocolHeader";

const WEEKLY_GOALS = [
  { id: "sleep", title: "Sleep before 11:30 PM", subtitle: "Circadian reset", checked: false },
  { id: "hydration", title: "3L Hydration", subtitle: "Mineral water preferred", checked: true },
  { id: "food", title: "No Processed Foods", subtitle: "Single ingredient foods only", checked: false },
  { id: "steps", title: "7k Steps Daily", subtitle: "Low intensity movement", checked: false },
];

const METRICS = [
  { icon: "bedtime", iconBg: "bg-indigo-100 dark:bg-indigo-900/30", iconColor: "text-indigo-600 dark:text-indigo-400", name: "Sleep Duration", sub: "Avg. hours / night", baseline: "5.8h", target: "6.5h", change: "+12%", progress: 60, progressColor: "bg-indigo-500" },
  { icon: "favorite", iconBg: "bg-rose-100 dark:bg-rose-900/30", iconColor: "text-rose-600 dark:text-rose-400", name: "HRV", sub: "Heart Rate Variability", baseline: "35ms", target: "40ms", change: "+14%", progress: 85, progressColor: "bg-rose-500" },
  { icon: "directions_walk", iconBg: "bg-amber-100 dark:bg-amber-900/30", iconColor: "text-amber-600 dark:text-amber-400", name: "Daily Movement", sub: "Steps count", baseline: "4,000", target: "7,000", change: "+75%", progress: 45, progressColor: "bg-amber-500" },
];

const FOCUS_AREAS = [
  { icon: "bedtime", iconColor: "text-indigo-500", title: "Sleep Hygiene", items: ["Magnesium glycinate (400mg) before bed", "Blackout curtains / Eye mask mandatory"], dotColor: "bg-indigo-500" },
  { icon: "restaurant", iconColor: "text-green-500", title: "Nutrition", items: ["Increase protein to 30g per meal", "Remove all seed oils & fried foods"], dotColor: "bg-green-500" },
  { icon: "directions_walk", iconColor: "text-amber-500", title: "Movement", items: ["No intense HIIT or heavy lifting this week", "Zone 2 walking & Mobility flow only"], dotColor: "bg-amber-500" },
  { icon: "self_improvement", iconColor: "text-rose-500", title: "Stress Management", items: ["4-7-8 Box breathing (2x daily)", "Phone in another room 1hr before bed"], dotColor: "bg-rose-500" },
];

function Week1Protocol({ onBack, onOpenChat, onToggleDark }) {
  const [goals, setGoals] = useState(WEEKLY_GOALS);

  const toggleGoal = (id) => {
    setGoals((prev) => prev.map((g) => (g.id === id ? { ...g, checked: !g.checked } : g)));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-main-light dark:text-text-main-dark min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
      <Week1ProtocolHeader onBack={onBack} onOpenChat={onOpenChat} onToggleDark={onToggleDark} />

      <main className="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl flex flex-col gap-8">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-primary/20 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider rounded-full">
                  Phase 1: Foundation
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-text-sub-light dark:text-text-sub-dark text-xs font-bold uppercase tracking-wider rounded-full">
                  Day 1 of 7
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                Week 1 Plan: Stabilize Sleep &amp; Reduce Inflammation
              </h1>
              <p className="text-lg md:text-xl text-text-sub-light dark:text-text-sub-dark leading-relaxed font-medium">
                This week is about setting your foundation by fixing your clock and cooling down internal stress. No intense workouts yet—just restoration.
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
            >
              <span>View Today&apos;s Tasks</span>
              <span className="material-icons-round">arrow_forward</span>
            </button>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Checklist & Goals */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-text-main-light dark:text-white flex items-center gap-2">
                    <span className="material-icons-round text-primary">check_circle</span>
                    Weekly Non-Negotiables
                  </h3>
                  <span className="text-xs font-semibold text-text-sub-light dark:text-text-sub-dark bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                    Daily
                  </span>
                </div>
                <div className="space-y-4">
                  {goals.map((goal) => (
                    <label
                      key={goal.id}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer group"
                    >
                      <div className="relative flex items-center shrink-0">
                        <input
                          type="checkbox"
                          checked={goal.checked}
                          onChange={() => toggleGoal(goal.id)}
                          className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border-2 border-gray-300 dark:border-gray-600 checked:border-primary transition-all checked:bg-primary"
                        />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity">
                          <span className="material-icons-round text-lg font-bold">check</span>
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-text-main-light dark:text-white font-semibold text-base group-hover:text-primary transition-colors">
                          {goal.title}
                        </p>
                        <p className="text-text-sub-light dark:text-text-sub-dark text-sm">{goal.subtitle}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-900/50">
                <h3 className="text-lg font-bold text-text-main-light dark:text-white mb-4 flex items-center gap-2">
                  <span className="material-icons-round text-emerald-600">flag</span>
                  Expected Outcomes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-emerald-500 text-sm mt-1">arrow_forward</span>
                    <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">
                      Wake up feeling less groggy without alarm
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-emerald-500 text-sm mt-1">arrow_forward</span>
                    <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">
                      No 3PM energy crash or sugar cravings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-icons-round text-emerald-500 text-sm mt-1">arrow_forward</span>
                    <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">
                      Reduced bloating after meals
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Metrics & Focus Areas */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-white/5">
                  <h3 className="text-lg font-bold text-text-main-light dark:text-white">Week 1 Targets</h3>
                  <button
                    type="button"
                    className="text-xs font-bold text-primary hover:text-primary-dark uppercase tracking-wider flex items-center gap-1"
                  >
                    Sync Device <span className="material-icons-round text-sm">sync</span>
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-text-sub-light dark:text-text-sub-dark text-xs uppercase tracking-wider border-b border-gray-100 dark:border-gray-800">
                        <th className="px-6 py-4 font-bold">Metric</th>
                        <th className="px-6 py-4 font-bold">Your Baseline</th>
                        <th className="px-6 py-4 font-bold">Week 1 Target</th>
                        <th className="px-6 py-4 font-bold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {METRICS.map((m) => (
                        <tr key={m.name} className="group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 ${m.iconBg} rounded-lg ${m.iconColor}`}>
                                <span className="material-icons-round text-xl">{m.icon}</span>
                              </div>
                              <div>
                                <p className="font-bold text-text-main-light dark:text-white">{m.name}</p>
                                <p className="text-xs text-text-sub-light dark:text-text-sub-dark">{m.sub}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-medium text-text-sub-light dark:text-text-sub-dark">{m.baseline}</td>
                          <td className="px-6 py-4">
                            <span className="text-lg font-bold text-text-main-light dark:text-white">{m.target}</span>
                            <span className="text-xs text-green-600 ml-1 font-bold">{m.change}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="w-24 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${m.progressColor} rounded-full`}
                                style={{ width: `${m.progress}%` }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-text-main-light dark:text-white mb-4 px-1">
                  Focus Areas &amp; Tactics
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FOCUS_AREAS.map((area) => (
                    <div
                      key={area.title}
                      className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-text-main-light dark:text-white flex items-center gap-2 mb-3">
                        <span className={`material-icons-round ${area.iconColor}`}>{area.icon}</span>
                        {area.title}
                      </h4>
                      <ul className="space-y-2">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-text-sub-light dark:text-text-sub-dark">
                            <span className={`w-1.5 h-1.5 rounded-full ${area.dotColor} mt-1.5 shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Chat CTA */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          type="button"
          className="flex items-center gap-3 pl-4 pr-6 py-3 bg-gray-900 dark:bg-white rounded-full shadow-2xl hover:scale-105 transition-transform group"
          onClick={onOpenChat}
        >
          <div className="bg-primary p-2 rounded-full">
            <span className="material-icons-round text-white text-xl">smart_toy</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Need adjustments?</span>
            <span className="text-white dark:text-gray-900 text-sm font-bold">Chat with Amara AI</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Week1Protocol;
