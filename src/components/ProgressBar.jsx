function ProgressBar({ step, totalSteps, label }) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark">
        <span>{label}</span>
        <span>
          Step {step} of {totalSteps}
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
