import { useState } from "react";
import Stepper from "./Stepper";
import BasicDetails from "./BasicDetails";
import OrganisationDetails from "./OrganisationDetails";
import UploadMedical from "./UploadMedical";
import ReviewFinish from "./ReviewFinish";
import SuccessModal from "./SuccessModal";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    contact: "",
    age: "",
    gender: "",
    languages: [],
    organisation: [],
    specialisation: [],
    expertise: [],
    file: null,
  });

  const next = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const back = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const goToStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-[#EDE9E2]">
     
      <div className="w-full max-w-4xl bg-[#F7F5F2] rounded-3xl shadow-lg px-14 py-10 relative h-[85vh] flex flex-col">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#F97316] mb-6">
          Create your account
        </h2>

        {/* Stepper */}
        <Stepper step={step} />

        {/* 🔥 Scrollable Content Area */}
        <div className="mt-8 flex-1 overflow-y-auto pr-2">
          {step === 1 && (
            <BasicDetails
              formData={formData}
              setFormData={setFormData}
              next={next}
            />
          )}

          {step === 2 && (
            <OrganisationDetails
              formData={formData}
              setFormData={setFormData}
              next={next}
              back={back}
            />
          )}

          {step === 3 && (
            <UploadMedical
              formData={formData}
              setFormData={setFormData}
              next={next}
              back={back}
            />
          )}

          {step === 4 && (
            <ReviewFinish
              formData={formData}
              back={back}
              submit={handleSubmit}
              goToStep={goToStep}
            />
          )}
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <SuccessModal close={() => setShowSuccess(false)} />
        )}
      </div>
    </div>
  );
}