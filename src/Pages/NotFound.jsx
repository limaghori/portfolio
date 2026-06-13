import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
    <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">Go Home</Link>
  </div>
);
export default NotFound;