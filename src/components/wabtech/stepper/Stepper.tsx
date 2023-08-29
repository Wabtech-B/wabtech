"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Step {
  label: string;
  description?: string;
  content: JSX.Element;
  icon?: JSX.Element | string;
}

interface StepperProps {
  steps: Step[];
  type?: "icon" | "numbered";
  variant?: "one" | "two" | "three";
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  type = "numbered",
  variant = "one",
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleFinish = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="dark:text-slate-200">
      <div className="mb-6">
        <div
          className={`flex mb-2 justify-between ${
            variant === "three"
              ? "border border-zinc-300 dark:border-zinc-600 rounded-md"
              : ""
          }`}
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {variant === "one" && (
                <>
                  {index !== 0 && (
                    <div className="flex-1 mt-4">
                      <div
                        className={`h-0.5 bg-slate-200 dark:bg-slate-600 ${
                          currentStep === index || index < currentStep
                            ? "!bg-[#0bab7c]"
                            : ""
                        } `}
                      ></div>
                    </div>
                  )}
                </>
              )}
              <div
                className={`flex gap-x-4 items-center space-y-2 h-full ${
                  variant === "three" &&
                  "relative px-2 py-1 before:absolute before:w-[0.8rem] before:h-[0.8rem] before:bg-white dark:before:bg-zinc-900 before:-right-[0.5rem] before:border before:border-transparent border-r border-r-zinc-300 before:border-t-zinc-300 before:border-r-zinc-300 dark:border-r-zinc-600 dark:before:border-t-zinc-600 dark:before:border-r-zinc-600 before:rotate-45 last:before:hidden last:border-r-0"
                } ${variant === "one" && "flex-col"}`}
              >
                {type === "icon" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#0bab7c"
                          : "#4B5563",
                    }}
                    className="rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-300 text-white"
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <div className="flex-shrink-0">{step.icon}</div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale:
                        currentStep === index || index < currentStep ? 1.1 : 1,
                      backgroundColor:
                        currentStep === index || index < currentStep
                          ? "#0bab7c"
                          : "#4B5563",
                    }}
                    className={`rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 ${
                      currentStep === index || index < currentStep
                        ? "bg-[#0bab7c]"
                        : "bg-slate-200 dark:bg-zinc-700"
                    } text-white text-xl`}
                  >
                    {index < currentStep ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.707 14.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 1.414l-7 7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </motion.div>
                )}
                <div
                  className={`text-sm ${variant === "one" && "text-center"} ${
                    currentStep === index || index < currentStep
                      ? "text-[#0bab7c]"
                      : "text-zinc-600 dark:text-zinc-400"
                  }`}
                >
                  <div>{step.label}</div>
                  <div className="hidden sm:block">{step.description}</div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div>{steps[currentStep].content}</div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            currentStep === 0
              ? "bg-slate-200  dark:bg-zinc-600 cursor-not-allowed"
              : "bg-[#0bab7c] hover:bg-[#0bab7c]/80 text-white"
          } text-slate-500 dark:text-white `}
          onClick={handlePreviousStep}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-md ${
            currentStep === steps.length - 1
              ? "bg-[#0bab7c]"
              : "bg-[#0bab7c] hover:bg-[#0bab7c]/80"
          } text-white`}
          onClick={
            currentStep === steps.length - 1 ? handleFinish : handleNextStep
          }
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
