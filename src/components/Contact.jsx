import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showHint, setShowHint] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_contact_form');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.name && parsed.email && parsed.message) {
        setShowHint(true);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio_contact_form', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    setShowSuccess(true);
    localStorage.removeItem('portfolio_contact_form');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <section id='contact' className="py-12 border-b dark:border-gray-800">
      <h2 className="text-3xl font-bold mb-6">📬 Contact Me</h2>
      {showHint && (
        <div className="bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-200 p-3 rounded-lg mb-4 text-sm font-medium">
          💡 You have unsaved form data from your last visit!
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2.5 border dark:border-gray-750 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2.5 border dark:border-gray-750 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-2.5 border dark:border-gray-750 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your message here..."></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors shadow-md text-sm">Send Message</button>
      </form>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl max-w-md border border-dashed dark:border-gray-700">
        <h4 className="text-sm font-bold text-gray-500 mb-2">👀 Live Preview</h4>
        <p className="text-sm"><span className="font-semibold text-gray-400">Name:</span> {formData.name || '---'}</p>
        <p className="text-sm"><span className="font-semibold text-gray-400">Email:</span> {formData.email || '---'}</p>
        <p className="text-sm line-clamp-2"><span className="font-semibold text-gray-400">Message:</span> {formData.message || '---'}</p>
      </div>

      {showSuccess && (
        <div className="fixed bottom-5 left-5 bg-teal-500 text-white px-5 py-3 rounded-lg shadow-xl font-bold text-sm flex items-center gap-2 animate-bounce z-50">
          🚀 Message simulated and submitted successfully!
        </div>
      )}
    </section>
  );
}