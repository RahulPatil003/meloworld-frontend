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
            : "Add the languages you know"}
        </span>

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

export default function BasicDetails({ formData, setFormData, next }) {
  return (
    <div className="space-y-4">

      {/* Contact Number */}
      <div>
        <label className="label-style">Contact Number</label>
        <input
          type="text"
          placeholder="Enter your contact number"
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
          className="input-style w-full"
        />
      </div>

      {/* Age + Gender */}
      <div className="grid grid-cols-2 gap-8">

        <div>
          <label className="label-style">Age</label>
          <input
            type="text"
            placeholder="Enter your age"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
            className="input-style w-full"
          />
        </div>

        {/* Gender Dropdown (unchanged) */}
        <div>
          <label className="label-style">Gender</label>

          <div className="relative">
            <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="input-style w-full appearance-none pr-12"
            >
              <option value="">Your gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>LGBTQ</option>
              <option>Don't want to mention</option>
            </select>

            <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="14" height="10" viewBox="0 0 14 10">
                <polygon points="2,2 12,2 7,8" fill="#F97316" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Languages Multi Select */}
      <MultiSelect
        label="Known Languages"
        options={[
          "English",
          "Hindi",
          "Kannada",
          "Tamil",
          "Telugu",
        ]}
        value={formData.languages}
        onChange={(val) =>
          setFormData({ ...formData, languages: val })
        }
      />

      {/* Next Button */}
      <div className="flex justify-end pt-6">
        <button onClick={next} className="btn-primary">
          Next →
        </button>
      </div>
    </div>
  );
}