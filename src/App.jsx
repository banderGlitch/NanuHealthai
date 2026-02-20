import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import NavbarStep2 from "./components/NavbarStep2";
import NavbarDashboard from "./components/NavbarDashboard";
import ProgressBar from "./components/ProgressBar";
import Step1BasicProfile from "./components/Step1BasicProfile";
import Step2HealthMetrics from "./components/Step2HealthMetrics";
import Step3ProtocolDashboard from "./components/Step3ProtocolDashboard";

const STEPS = [
  { id: 1, label: "Basic Profile", title: "Let's build your protocol", subtitle: "We'll use this data to calibrate your metabolic baseline and longevity targets." },
  { id: 2, label: "Health Metrics", title: "Refine Your Baseline", subtitle: "Our AI uses these biometrics to calculate your metabolic flexibility and design a 90-day protocol." },
  { id: 3, label: "Health History", title: "Medical background", subtitle: "Optional but improves accuracy." },
  { id: 4, label: "Review", title: "Almost there", subtitle: "Review and submit your profile." },
];

const initialFormData = {
  age: "",
  sex: "",
  goals: ["metabolic"],
  files: [],
  metrics: { sleep: 7.5, energy: 6, stress: 3 },
};

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [isDark, setIsDark] = useState(false);

  const handleGetStarted = () => setShowLanding(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((s) => s + 1);
  };

  const handleSkip = () => {
    if (currentStep < 4) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const stepConfig = STEPS[currentStep - 1];
  const isStep2Layout = currentStep === 2;
  const isStep3Layout = currentStep === 3;

  if (showLanding) {
    return (
      <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 min-h-screen">
        <LandingPage onGetStarted={handleGetStarted} onToggleDark={toggleDark} />
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-text-main-light dark:text-text-main-dark transition-colors duration-300 min-h-screen flex flex-col">
      {isStep3Layout ? (
        <NavbarDashboard onToggleDark={toggleDark} />
      ) : isStep2Layout ? (
        <NavbarStep2 onBack={handleBack} />
      ) : (
        <Navbar onToggleDark={toggleDark} />
      )}

      {isStep3Layout ? (
        <Step3ProtocolDashboard />
      ) : isStep2Layout ? (
        <Step2HealthMetrics formData={formData} setFormData={setFormData} onNext={handleNext} onBack={handleBack} />
      ) : (
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl space-y-8">
          <ProgressBar step={currentStep} totalSteps={4} label={stepConfig.label} />

          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-text-main-light dark:text-text-main-dark">
              {stepConfig.title}
            </h1>
            <p className="text-text-sub-light dark:text-text-sub-dark max-w-xl mx-auto">{stepConfig.subtitle}</p>
          </div>

          {currentStep === 1 && (
            <Step1BasicProfile formData={formData} setFormData={setFormData} onNext={handleNext} onSkip={handleSkip} />
          )}

          {currentStep > 1 && currentStep !== 2 && currentStep !== 3 && (
            <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 text-center">
              <p className="text-text-sub-light dark:text-text-sub-dark mb-6">
                Step {currentStep} content coming soon. Use the progress bar to navigate.
              </p>
              <div className="flex gap-4 justify-center">
                {currentStep > 1 && (
                  <button
                    type="button"
                    className="text-sm font-medium text-text-sub-light dark:text-text-sub-dark hover:text-text-main-light dark:hover:text-white transition-colors"
                    onClick={() => setCurrentStep((s) => s - 1)}
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-primary/30 transform transition hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/20 flex items-center gap-2 mx-auto"
                  onClick={handleNext}
                >
                  {currentStep === 4 ? "Submit" : "Next Step"}
                  <span className="material-icons-round text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          )}
          <p className="text-center text-xs text-text-sub-light dark:text-text-sub-dark pb-8">
            By continuing, you agree to Amara&apos;s{" "}
            <a className="underline hover:text-primary" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline hover:text-primary" href="#">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </main>
      )}
    </div>
  );
}

export default App;
