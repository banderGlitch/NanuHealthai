import { useState, useRef, useEffect } from "react";

const PROTOCOL_UPDATES = [
  { time: "10:42 AM • Today", title: "Hydration Goal Updated", desc: "Increased to 3.5L due to workout intensity.", color: "bg-blue-500" },
  { time: "09:15 AM • Today", title: "New Rule Added", desc: "Evening screen time limit set to 45 mins pre-bed.", color: "bg-purple-500" },
  { time: "08:30 PM • Yesterday", title: "Sleep Schedule Tweaked", desc: "Bedtime shifted to 10:30 PM based on recovery score.", color: "bg-amber-500" },
  { time: "06:00 PM • Yesterday", title: "Supplement Logged", desc: "Magnesium Glycinate - 200mg recorded.", color: "bg-teal-500" },
];

const QUICK_ACTIONS = [
  { icon: "restaurant", title: "Social dinner strategy", sub: "Staying on track tonight" },
  { icon: "directions_walk", title: "Adjust step goal", sub: "Modify daily target" },
  { icon: "self_improvement", title: "Report high stress", sub: "Need immediate calm" },
  { icon: "science", title: "Explain CRP targets", sub: "Understand the science" },
];

function AmaraChat({ onClose, onToggleDark, userName = "Shashank" }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  }, [message]);

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-main-light dark:text-text-main-dark h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close"
          >
            <span className="material-icons-round">arrow_back</span>
          </button>
          <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-icons-round text-xl">spa</span>
          </div>
          <h1 className="font-bold text-xl tracking-tight">Amara AI</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="size-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-sub-light dark:text-text-sub-dark"
          >
            <span className="material-icons-round">notifications</span>
          </button>
          <button
            type="button"
            className="size-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-sub-light dark:text-text-sub-dark"
          >
            <span className="material-icons-round">settings</span>
          </button>
          {onToggleDark && (
            <button
              type="button"
              className="size-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-sub-light dark:text-text-sub-dark"
              onClick={onToggleDark}
            >
              <span className="material-icons-round dark:hidden">dark_mode</span>
              <span className="material-icons-round hidden dark:block">light_mode</span>
            </button>
          )}
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-100 dark:border-gray-700 flex items-center justify-center">
            <span className="material-icons-round text-gray-500 dark:text-gray-400 text-sm">person</span>
          </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 lg:w-96 bg-card-light dark:bg-card-dark border-r border-gray-200 dark:border-gray-800 flex flex-col shrink-0 hidden md:flex">
          <div className="p-5 border-b border-gray-100 dark:border-gray-800">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <span className="material-icons-round text-primary">update</span>
              Dynamic Protocol Updates
            </h2>
            <p className="text-xs text-text-sub-light dark:text-text-sub-dark mt-1">
              Real-time adjustments based on your data.
            </p>
          </div>
          <div className="flex-1 overflow-y-auto p-5 space-y-6 chat-scrollbar">
            {PROTOCOL_UPDATES.map((item, i) => (
              <div
                key={i}
                className={`relative pl-6 before:absolute before:left-[7px] before:top-2 before:bottom-[-24px] before:w-[2px] before:bg-gray-100 dark:before:bg-gray-800 ${i === PROTOCOL_UPDATES.length - 1 ? "before:opacity-0" : ""}`}
              >
                <div
                  className={`absolute left-0 top-1 size-4 rounded-full border-2 border-white dark:border-card-dark ${item.color} shadow-sm z-10`}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark">
                    {item.time}
                  </span>
                  <h3 className="font-semibold text-sm text-text-main-light dark:text-text-main-dark">{item.title}</h3>
                  <p className="text-sm text-text-sub-light dark:text-text-sub-dark bg-gray-50 dark:bg-gray-800/50 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                    {item.desc.includes("3.5L") ? (
                      <>
                        Increased to <span className="font-bold text-primary">3.5L</span> due to workout intensity.
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/20">
            <div className="flex items-center justify-between text-xs text-text-sub-light dark:text-text-sub-dark font-medium">
              <span>Protocol Adherence</span>
              <span className="text-primary font-bold">94%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-primary w-[94%] rounded-full" />
            </div>
          </div>
        </aside>

        {/* Chat Area */}
        <section className="flex-1 flex flex-col bg-background-light dark:bg-background-dark relative">
          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 pb-32 chat-scrollbar">
            <div className="flex justify-center">
              <span className="text-xs font-semibold text-text-sub-light dark:text-text-sub-dark bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                Today, August 24
              </span>
            </div>

            <div className="flex gap-4 max-w-3xl">
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                <span className="material-icons-round text-primary">smart_toy</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-text-main-light dark:text-text-main-dark">Amara AI</span>
                  <span className="text-xs text-text-sub-light dark:text-text-sub-dark">10:45 AM</span>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-800 text-text-main-light dark:text-text-main-dark leading-relaxed">
                  <p>
                    Hello {userName}, I&apos;ve analyzed your labs and week 1 goals. Your CRP levels are slightly elevated,
                    but your recovery score is trending up.
                  </p>
                  <p className="mt-2">How can I help you fine-tune your protocol today?</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark pt-10 pb-6 px-4 md:px-8 z-10">
            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.title}
                    type="button"
                    className="bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-xl text-left transition-all hover:shadow-md group"
                  >
                    <span className="material-icons-round text-primary mb-2 text-[20px] block group-hover:scale-110 transition-transform">
                      {action.icon}
                    </span>
                    <p className="text-xs font-semibold text-text-main-light dark:text-text-main-dark">{action.title}</p>
                    <p className="text-[10px] text-text-sub-light dark:text-text-sub-dark mt-0.5">{action.sub}</p>
                  </button>
                ))}
              </div>

              <div className="bg-card-light dark:bg-card-dark p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-end gap-2">
                <button
                  type="button"
                  className="p-3 text-text-sub-light dark:text-text-sub-dark hover:text-primary transition-colors rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 shrink-0"
                  title="Attach file"
                >
                  <span className="material-icons-round">attach_file</span>
                </button>
                <textarea
                  ref={textareaRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-0 focus:ring-0 text-text-main-light dark:text-text-main-dark placeholder-gray-400 py-3 max-h-32 resize-none focus:outline-none"
                  placeholder="Type a message to update your protocol..."
                  rows={1}
                />
                <button
                  type="button"
                  className="p-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors shadow-sm font-bold shrink-0 flex items-center justify-center"
                >
                  <span className="material-icons-round">arrow_upward</span>
                </button>
              </div>
              <p className="text-center text-[10px] text-text-sub-light dark:text-text-sub-dark">
                Amara AI can make mistakes. Please verify important medical information.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AmaraChat;
