export default function Stepper({ step }) {
  const steps = [
    "Basic Details",
    "Organisation Details",
    "Upload Medical ID",
    "Review and Finish",
  ];

  const progressWidth = ((step - 1) / (steps.length - 1)) * 100;

  return (
    <div className="relative flex justify-between items-center">

      {/* Base Line */}
      <div className="absolute top-5 left-10 right-10 h-[2px] bg-gray-300"></div>

      {/* Green Progress Line */}
      <div
        className="absolute top-5 left-10 h-[2px] bg-green-500 transition-all duration-500"
        style={{
          width: `calc((100% - 5rem) * ${progressWidth / 100})`,
        }}
      ></div>

      {steps.map((label, index) => {
        const current = index + 1;
        const active = current === step;
        const completed = current < step;

        return (
          <div key={index} className="flex flex-col items-center z-10">

            {/* Circle */}
            <div
              className={`
                w-10 h-10 flex items-center justify-center
                rounded-full text-white font-semibold
                ${
                  completed
                    ? "bg-green-500"
                    : active
                    ? "bg-[#F97316]"
                    : "bg-gray-400"
                }
              `}
            >
              {current}
            </div>

            {/* Label */}
            <span
              className={`
                mt-3 text-sm
                ${
                  completed
                    ? "text-green-600"
                    : active
                    ? "text-[#F97316]"
                    : "text-gray-500"
                }
              `}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}