import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-lg animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
          Contact Me
        </h2>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-950 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-950 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea 
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-950 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}