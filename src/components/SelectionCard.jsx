function SelectionCard({ icon, label, color, selected, onClick }) {
  return (
    <button
      type="button"
      className={`selection-card cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center text-center w-full h-32 relative group ${
        selected
          ? "selected border-primary dark:border-primary bg-green-50 dark:bg-green-900/20"
          : "border-gray-200 dark:border-gray-700 bg-background-light dark:bg-background-dark hover:shadow-md"
      }`}
      onClick={onClick}
    >
      <div className={`absolute top-2 right-2 ${selected ? "" : "hidden"} check-icon`}>
        <span className="material-icons-round text-primary text-sm">check_circle</span>
      </div>
      <span
        className={`material-icons-round text-3xl mb-2 group-hover:scale-110 transition-transform ${color || "text-primary"}`}
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-text-main-light dark:text-text-main-dark">{label}</span>
    </button>
  );
}

export default SelectionCard;
