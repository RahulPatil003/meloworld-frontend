import { useState } from "react";

function MultiSelect({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  const toggleOption = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="relative">
      <label className="label-style">{label}</label>

      {/* Input Box */}
      <div
        onClick={() => setOpen(!open)}
        className="input-style w-full flex items-center justify-between cursor-pointer"
      >
        <span className="text-gray-700">
          {value.length > 0
            ? value.join(", ")
            : `Choose your ${label}`}
        </span>

        {/* Arrow */}
        <svg width="14" height="10" viewBox="0 0 14 10">
          <polygon points="2,2 12,2 7,8" fill="#F97316" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-orange-50 ${
                value.includes(option)
                  ? "bg-orange-100 text-[#F97316]"
                  : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrganisationDetails({
  formData,
  setFormData,
  next,
  back,
}) {
  return (
    <div className="space-y-4">

      <MultiSelect
        label="Organisation"
        options={[
          "NIMHANS",
          "NEXR Health",
          "Fortis Hospital",
          "Apollo Clinic",
          "Manipal Hospital",
          "Independent Practitioner",
        ]}
        value={formData.organisation}
        onChange={(val) =>
          setFormData({ ...formData, organisation: val })
        }
      />

      <MultiSelect
        label="Specialisation"
        options={[
          "Behavioural Therapist",
          "Clinical Psychologist",
          "Speech Therapist",
          "Occupational Therapist",
          "Child Counsellor",
          "Neuro Psychologist",
        ]}
        value={formData.specialisation}
        onChange={(val) =>
          setFormData({ ...formData, specialisation: val })
        }
      />

      <MultiSelect
        label="Expertise"
        options={[
          "Children",
          "Adolescents",
          "Adults",
          "Elderly",
          "Autism Spectrum",
          "ADHD",
          "Anxiety & Depression",
        ]}
        value={formData.expertise}
        onChange={(val) =>
          setFormData({ ...formData, expertise: val })
        }
      />

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        <button onClick={back} className="text-gray-500">
          ← back
        </button>

        <button onClick={next} className="btn-primary">
          Next →
        </button>
      </div>
    </div>
  );
}