import React from "react";

const ProCard = () => {
  return (
    <div className="relative flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Badge */}
      <div className="absolute top-4 right-4 bg-gray-600 text-white text-xs px-2 py-1 rounded">
        Coming Soon
      </div>

      {/* Plan Title */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Pro
      </h3>

      {/* Price */}
      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
        $19
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {" "}
          / month
        </span>
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
        <li>✔ Unlimited projects</li>
        <li>✔ Priority support</li>
        <li>✔ Advanced analytics</li>
        <li>✔ Team collaboration</li>
      </ul>

      {/* Disabled Button */}
      <button
        disabled
        className="mt-6 w-full rounded-md bg-gray-400 py-[5] font-medium text-gray-800 dark:text-gray-600 cursor-not-allowed"
      >
        Subscribe
      </button>
    </div>
  );
};

export default ProCard;
