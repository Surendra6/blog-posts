const WorkInProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white">
        <div className="flex items-center justify-center mb-4">
          {/* You can use an icon like an SVG or a font icon */}
          <svg
            className="w-16 h-16 text-yellow-500 animate-pulse"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Work In Progress
        </h1>
        <p className="text-gray-600">
          We are currently working on this page. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default WorkInProgress;
