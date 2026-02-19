import SelectionCard from "./SelectionCard";
import FileDropZone from "./FileDropZone";

const GOALS = [
  { id: "weight-loss", icon: "monitor_weight", label: "Weight Loss", color: "text-primary" },
  { id: "sleep", icon: "bedtime", label: "Better Sleep", color: "text-blue-500" },
  { id: "metabolic", icon: "local_fire_department", label: "Metabolic Health", color: "text-orange-500" },
  { id: "energy", icon: "bolt", label: "Energy", color: "text-yellow-500" },
  { id: "performance", icon: "fitness_center", label: "Performance", color: "text-purple-500" },
  { id: "longevity", icon: "hourglass_top", label: "Longevity", color: "text-teal-500" },
];

function Step1BasicProfile({ formData, setFormData, onNext, onSkip }) {
  const { age, sex, goals, files } = formData;

  const toggleGoal = (id) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(id) ? prev.goals.filter((g) => g !== id) : [...prev.goals, id],
    }));
  };

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark" htmlFor="age">
            Age
          </label>
          <div className="relative rounded-xl shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-icons-round text-gray-400">cake</span>
            </div>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="35"
              value={age || ""}
              onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
              className="focus:ring-primary focus:border-primary block w-full pl-10 pr-12 sm:text-sm border-gray-300 dark:border-gray-600 dark:bg-background-dark rounded-xl py-3 dark:text-white"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">years</span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark">
            Biological Sex
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className={`group relative flex items-center justify-center py-3 px-4 border rounded-xl hover:border-primary dark:hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all ${
                sex === "male"
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-background-light dark:bg-background-dark"
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, sex: "male" }))}
            >
              <span className="material-icons-round text-gray-400 group-hover:text-primary mr-2">male</span>
              <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark">Male</span>
            </button>
            <button
              type="button"
              className={`group relative flex items-center justify-center py-3 px-4 border rounded-xl hover:border-primary dark:hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all ${
                sex === "female"
                  ? "border-primary bg-primary/5 dark:bg-primary/10"
                  : "border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-background-light dark:bg-background-dark"
              }`}
              onClick={() => setFormData((prev) => ({ ...prev, sex: "female" }))}
            >
              <span className="material-icons-round text-gray-400 group-hover:text-primary mr-2">female</span>
              <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark">Female</span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark">
            Primary Goals{" "}
            <span className="text-text-sub-light dark:text-text-sub-dark font-normal ml-1">(Select all that apply)</span>
          </label>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GOALS.map((goal) => (
            <SelectionCard
              key={goal.id}
              icon={goal.icon}
              label={goal.label}
              color={goal.color}
              selected={goals.includes(goal.id)}
              onClick={() => toggleGoal(goal.id)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <label className="block text-sm font-medium text-text-main-light dark:text-text-main-dark">
            Upload Last Lab Reports{" "}
            <span className="text-primary text-xs ml-2 bg-primary/10 px-2 py-0.5 rounded-full">
              Recommended for best results
            </span>
          </label>
        </div>
        <FileDropZone onFilesSelected={(f) => setFormData((prev) => ({ ...prev, files: [...(prev.files || []), ...f] }))} />
      </div>

      <div className="pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
        <button
          type="button"
          className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-white transition-colors"
          onClick={onSkip}
        >
          Skip for now
        </button>
        <button
          type="button"
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 transform transition hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/20 flex items-center gap-2"
          onClick={onNext}
        >
          Next Step
          <span className="material-icons-round text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

export default Step1BasicProfile;
