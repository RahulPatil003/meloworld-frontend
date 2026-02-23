export default function ReviewFinish({
  formData,
  back,
  submit,
  goToStep,
}) {
  return (
    <div className="space-y-8">

      {/* Basic Details */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">
            Basic Details
          </h3>
          <button
            onClick={() => goToStep(1)}
            className="text-[#F97316] text-sm font-medium"
          >
            Edit
          </button>
        </div>

        <div className="space-y-2 text-gray-600">
          <p>
            <strong>Contact:</strong>{" "}
            {formData.contact || "830731972"}
          </p>

          <p>
            <strong>Age:</strong>{" "}
            {formData.age || "28"}
          </p>

          <p>
            <strong>Gender:</strong>{" "}
            {formData.gender || "Male"}
          </p>

          <p>
            <strong>Languages:</strong>{" "}
            {formData.languages?.length > 0
              ? formData.languages.join(", ")
              : "English, Hindi"}
          </p>
        </div>
      </div>

      {/* Organisation Details */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">
            Organisation Details
          </h3>
          <button
            onClick={() => goToStep(2)}
            className="text-[#F97316] text-sm font-medium"
          >
            Edit
          </button>
        </div>

        <div className="space-y-2 text-gray-600">
          <p>
            <strong>Organisation:</strong>{" "}
            {formData.organisation?.length > 0
              ? formData.organisation.join(", ")
              : "Fortis Hospital"}
          </p>

          <p>
            <strong>Specialisation:</strong>{" "}
            {formData.specialisation?.length > 0
              ? formData.specialisation.join(", ")
              : "Speech Therapist"}
          </p>

          <p>
            <strong>Expertise:</strong>{" "}
            {formData.expertise?.length > 0
              ? formData.expertise.join(", ")
              : "Children"}
          </p>
        </div>
      </div>

      {/* Upload Medical ID */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800">
            Upload Medical ID
          </h3>
          <button
            onClick={() => goToStep(3)}
            className="text-[#F97316] text-sm font-medium"
          >
            Edit
          </button>
        </div>

        <p className="text-gray-600">
          {formData.file
            ? formData.file.name
            : "medical-certificate.png"}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-6">
        <button onClick={back} className="text-gray-500">
          ← back
        </button>

        <button onClick={submit} className="btn-primary">
          Next →
        </button>
      </div>
    </div>
  );
}