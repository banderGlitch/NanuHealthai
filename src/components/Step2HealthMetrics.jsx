import { useState } from "react";

function getEnergyLabel(value) {
  if (value <= 3) return { label: "Low", className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" };
  if (value <= 6) return { label: "Moderate", className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" };
  if (value <= 8) return { label: "High", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" };
  return { label: "Peak", className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" };
}

function getStressLabel(value) {
  if (value <= 3) return { label: "Low", className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" };
  if (value <= 6) return { label: "Manageable", className: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" };
  if (value <= 8) return { label: "High", className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" };
  return { label: "Critical", className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" };
}

function Step2HealthMetrics({ formData, setFormData, onNext, onBack }) {
  const metrics = formData.metrics || {};
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");

  const sleep = parseFloat(metrics.sleep ?? 7.5);
  const energy = parseInt(metrics.energy ?? 6, 10);
  const stress = parseInt(metrics.stress ?? 3, 10);

  const energyInfo = getEnergyLabel(energy);
  const stressInfo = getStressLabel(stress);

  const updateMetrics = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      metrics: { ...(prev.metrics || {}), [key]: value },
    }));
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent opacity-50 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-blue-500/5 to-transparent opacity-30 blur-3xl rounded-full transform -translate-x-1/3 translate-y-1/3" />
      </div>
    <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      <header className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
          <span className="material-icons-round text-sm mr-1">auto_awesome</span>
          AI Personalized Intake
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-main-light dark:text-text-main-dark mb-4 tracking-tight">
          Refine Your Baseline
        </h1>
        <p className="text-lg text-text-sub-light dark:text-text-sub-dark max-w-2xl">
          Our AI uses these biometrics to calculate your metabolic flexibility and design a 90-day protocol specifically for your longevity goals.
        </p>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onNext();
        }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weight */}
          <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-500 dark:text-blue-400">
                  <span className="material-icons-round">monitor_weight</span>
                </div>
                <label className="font-semibold text-lg" htmlFor="weight">
                  Weight
                </label>
              </div>
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 text-xs font-medium">
                <button
                  type="button"
                  className={`px-3 py-1 rounded-md transition-colors ${
                    weightUnit === "kg"
                      ? "bg-white dark:bg-gray-600 shadow-sm text-text-main-light dark:text-text-main-dark"
                      : "text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-text-main-dark"
                  }`}
                  onClick={() => setWeightUnit("kg")}
                >
                  kg
                </button>
                <button
                  type="button"
                  className={`px-3 py-1 rounded-md transition-colors ${
                    weightUnit === "lbs"
                      ? "bg-white dark:bg-gray-600 shadow-sm text-text-main-light dark:text-text-main-dark"
                      : "text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-text-main-dark"
                  }`}
                  onClick={() => setWeightUnit("lbs")}
                >
                  lbs
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                id="weight"
                type="number"
                placeholder="0"
                value={metrics.weight ?? ""}
                onChange={(e) => updateMetrics("weight", e.target.value)}
                className="block w-full text-4xl font-bold bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-0 px-0 py-2 transition-colors placeholder-gray-300 dark:placeholder-gray-600 dark:text-white"
              />
              <span className="absolute right-0 bottom-4 text-text-sub-light dark:text-text-sub-dark font-medium">{weightUnit}</span>
            </div>
            <p className="mt-3 text-sm text-text-sub-light dark:text-text-sub-dark group-hover:text-primary transition-colors">
              Used to calculate metabolic load.
            </p>
          </div>

          {/* Height */}
          <div className="bg-card-light dark:bg-card-dark rounded-2xl p-6 shadow-soft border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-500 dark:text-indigo-400">
                  <span className="material-icons-round">height</span>
                </div>
                <label className="font-semibold text-lg" htmlFor="height">
                  Height
                </label>
              </div>
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 text-xs font-medium">
                <button
                  type="button"
                  className={`px-3 py-1 rounded-md transition-colors ${
                    heightUnit === "cm"
                      ? "bg-white dark:bg-gray-600 shadow-sm text-text-main-light dark:text-text-main-dark"
                      : "text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-text-main-dark"
                  }`}
                  onClick={() => setHeightUnit("cm")}
                >
                  cm
                </button>
                <button
                  type="button"
                  className={`px-3 py-1 rounded-md transition-colors ${
                    heightUnit === "ft"
                      ? "bg-white dark:bg-gray-600 shadow-sm text-text-main-light dark:text-text-main-dark"
                      : "text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-text-main-dark"
                  }`}
                  onClick={() => setHeightUnit("ft")}
                >
                  ft
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                id="height"
                type="number"
                placeholder="0"
                value={metrics.height ?? ""}
                onChange={(e) => updateMetrics("height", e.target.value)}
                className="block w-full text-4xl font-bold bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-0 px-0 py-2 transition-colors placeholder-gray-300 dark:placeholder-gray-600 dark:text-white"
              />
              <span className="absolute right-0 bottom-4 text-text-sub-light dark:text-text-sub-dark font-medium">{heightUnit}</span>
            </div>
            <p className="mt-3 text-sm text-text-sub-light dark:text-text-sub-dark group-hover:text-primary transition-colors">
              Required for BMI and body composition estimates.
            </p>
          </div>
        </div>

        {/* Sleep */}
        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-500 dark:text-purple-400">
                <span className="material-icons-round text-2xl">bedtime</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Average Sleep</h3>
                <p className="text-sm text-text-sub-light dark:text-text-sub-dark">Hours per night over last 30 days</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-4xl font-bold text-primary">{sleep}</span>
              <span className="text-lg text-text-sub-light dark:text-text-sub-dark ml-1">hrs</span>
            </div>
          </div>
          <div className="relative pt-4 pb-2 overflow-visible">
            <input
              type="range"
              min="1"
              max="12"
              step="0.5"
              value={sleep}
              onChange={(e) => updateMetrics("sleep", e.target.value)}
              className="range-slider w-full block cursor-pointer"
              style={{ height: "24px" }}
            />
            <div className="relative h-4 mt-2 w-full">
              <span className="absolute text-xs text-text-sub-light dark:text-text-sub-dark" style={{ left: 0 }}>1h</span>
              <span className="absolute text-xs text-text-sub-light dark:text-text-sub-dark -translate-x-1/2" style={{ left: "27.27%" }}>4h</span>
              <span className="absolute text-xs text-text-sub-light dark:text-text-sub-dark -translate-x-1/2" style={{ left: "63.64%" }}>8h</span>
              <span className="absolute text-xs text-text-sub-light dark:text-text-sub-dark -translate-x-full" style={{ right: 0 }}>12h</span>
            </div>
          </div>
        </div>

        {/* Energy & Stress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card-light dark:bg-card-dark rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-yellow-500 dark:text-yellow-400">
                  <span className="material-icons-round">bolt</span>
                </div>
                <h3 className="text-lg font-bold">Daily Energy</h3>
              </div>
              <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full font-bold text-sm ${energyInfo.className}`}>
                {energyInfo.label}
              </span>
            </div>
            <div className="mb-8 text-center">
              <span className="text-5xl font-extrabold text-text-main-light dark:text-text-main-dark">{energy}</span>
              <span className="text-xl text-text-sub-light dark:text-text-sub-dark">/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={energy}
              onChange={(e) => updateMetrics("energy", e.target.value)}
              className="range-slider range-slider-energy w-full h-2 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs font-medium text-text-sub-light dark:text-text-sub-dark mt-3">
              <span>Lethargic</span>
              <span>Optimal</span>
            </div>
          </div>

          <div className="bg-card-light dark:bg-card-dark rounded-2xl p-8 shadow-soft border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-500 dark:text-red-400">
                  <span className="material-icons-round">psychology</span>
                </div>
                <h3 className="text-lg font-bold">Stress Level</h3>
              </div>
              <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full font-bold text-sm ${stressInfo.className}`}>
                {stressInfo.label}
              </span>
            </div>
            <div className="mb-8 text-center">
              <span className="text-5xl font-extrabold text-text-main-light dark:text-text-main-dark">{stress}</span>
              <span className="text-xl text-text-sub-light dark:text-text-sub-dark">/10</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={stress}
              onChange={(e) => updateMetrics("stress", e.target.value)}
              className="range-slider range-slider-stress w-full h-2 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs font-medium text-text-sub-light dark:text-text-sub-dark mt-3">
              <span>Calm</span>
              <span>Overwhelmed</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-800 mt-10">
          <button
            type="button"
            className="text-text-sub-light dark:text-text-sub-dark font-medium hover:text-text-main-light dark:hover:text-text-main-dark transition-colors px-6 py-3 mb-4 md:mb-0"
            onClick={onBack}
          >
            Back to History
          </button>
          <div className="flex items-center space-x-6 w-full md:w-auto">
            <div className="hidden md:block text-right">
              <p className="text-xs font-bold text-text-sub-light dark:text-text-sub-dark uppercase tracking-wide">Next Step</p>
              <p className="text-sm font-semibold text-text-main-light dark:text-text-main-dark">Protocol Generation</p>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Generate Protocol</span>
              <span className="material-icons-round">arrow_forward</span>
            </button>
          </div>
        </div>
      </form>
    </main>
    </>
  );
}

export default Step2HealthMetrics;
