import React, { useState, useEffect } from 'react';

export default function ProjectUpdates() {
  const [update, setUpdate] = useState("Connecting to server to fetch latest project updates...");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const updatesList = [
      "🔥 Project 'Freelance Invoice App' has been successfully committed to GitHub!",
      "⚡ Optimized portfolio page load speeds up to 40% using Vite code-splitting.",
      "🛠️ Integrated custom Tailwind styles into the core app configuration layout.",
      "📱 Completed full cross-platform mobile responsive layout debugging configurations."
    ];

    // Requirement 6: Set up simulated polling interval every 15 seconds
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * updatesList.length);
      setUpdate(updatesList[randomIndex]);
      setPulse(true);
      
      setTimeout(() => setPulse(false), 1000); // Small pulse animation trigger
    }, 15000); // 15000ms = 15s

    // Requirement 6: Crucial interval cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-300 p-4 text-center text-sm font-medium transition duration-300 flex items-center justify-center gap-3 border-b border-blue-100 dark:border-gray-700">
      <span className="flex h-3 w-3 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
      </span>
      <p className={pulse ? "animate-bounce" : ""}>
        <strong>Live System Updates (Every 15s):</strong> {update}
      </p>
    </div>
  );
}