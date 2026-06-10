import React from 'react';
const TechBadge = ({ name }) => (
  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2.5 py-0.5 rounded">
    {name}
  </span>
);
export default TechBadge;