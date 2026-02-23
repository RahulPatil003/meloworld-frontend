import { useState } from "react";
import { X } from "lucide-react";
import uploadIcon from "../../assets/upload-icon.svg";


export default function UploadMedical({ formData, setFormData, next, back }) {
  const [error, setError] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    // 5MB validation
    if (file.size > 5 * 1024 * 1024) {
      setError("File must be below 5MB");
      return;
    }

    setError("");
    setFormData({ ...formData, file });
  };

  const removeFile = () => {
    setFormData({ ...formData, file: null });
  };

  return (
    <div className="space-y-6">

      {/* Instruction */}
      <p className="text-[#F97316]">
        Please upload a file of your Medical ID or degree certificate.
      </p>

      {/* Upload Box */}
      <div
        className="relative border-2 border-dashed border-[#F97316] rounded-2xl py-5 px-6 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFile(e.dataTransfer.files[0]);
        }}
      >
        {!formData.file ? (
          <>
            <input
              type="file"
              id="medicalUpload"
              className="hidden"
              onChange={(e) => handleFile(e.target.files[0])}
            />

            <div className="flex flex-col items-center space-y-2">
              <img
                src={uploadIcon}
                alt="upload"
                className="w-10 h-10"
              />

              <p className="text-[#F97316] text-lg font-medium">
                Drag and Drop file here
              </p>

              <p className="text-gray-400">or</p>

              <label
                htmlFor="medicalUpload"
                className="cursor-pointer border border-[#F97316] text-[#F97316] px-6 py-2 rounded-full hover:bg-[#F97316] hover:text-white transition"
              >
                Browse from device
              </label>
            </div>
          </>
        ) : (
          <div className="relative flex flex-col items-center space-y-2">

            {/* Remove Button */}
            <button
              onClick={removeFile}
              className="absolute right-2 top-2 text-[#F97316]"
            >
              <X size={20} />
            </button>

            {/* Image Preview */}
            {formData.file.type.startsWith("image") ? (
              <img
                src={URL.createObjectURL(formData.file)}
                alt="preview"
                className="max-h-48 rounded-lg"
              />
            ) : (
              <p className="text-gray-700 font-medium">
                {formData.file.name}
              </p>
            )}
          </div>
        )}

        <p className="absolute right-4 bottom-3 text-gray-400 text-sm">
          *File must be below 5mb
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {/* Buttons */}
      <div className="flex justify-between pt-4">
        <button onClick={back} className="text-gray-500">
          ← back
        </button>

        <button
          onClick={next}
          className="btn-primary"
          disabled={!formData.file}
        >
          Next →
        </button>
      </div>
    </div>
  );
}